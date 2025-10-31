import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { contactFormSchema } from '@/lib/validations';
import { db } from '@/lib/db/drizzle';
import { contactSubmissions } from '@/lib/db/schema/forms-schema';
import { auth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get session if user is logged in
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Generate ID
    const id = crypto.randomUUID();

    // Prepare data for insertion
    const contactData = {
      id,
      userId: session?.user?.id || null,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      subject: validatedData.subject,
      message: validatedData.message,
      status: 'new',
    };

    // Insert into database
    await db.insert(contactSubmissions).values(contactData);

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);

    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit contact form. Please try again.',
      },
      { status: 500 }
    );
  }
}

