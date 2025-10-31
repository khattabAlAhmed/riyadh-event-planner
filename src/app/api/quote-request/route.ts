import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { quoteRequestSchema } from '@/lib/validations';
import { db } from '@/lib/db/drizzle';
import { quoteRequests } from '@/lib/db/schema/forms-schema';
import { auth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get session if user is logged in
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    // Parse and validate request body
    const body = await request.json();
    const validatedData = quoteRequestSchema.parse(body);

    // Generate ID
    const id = crypto.randomUUID();

    // Prepare data for insertion
    const quoteRequestData = {
      id,
      userId: session?.user?.id || null,
      fullName: validatedData.fullName,
      phone: validatedData.phone,
      email: validatedData.email || null,
      city: validatedData.city,
      eventType: validatedData.eventType,
      eventDate: validatedData.eventDate.toISOString().split('T')[0], // Convert Date to YYYY-MM-DD
      eventTime: validatedData.eventTime,
      attendance: validatedData.attendance,
      location: validatedData.location,
      services: validatedData.services,
      budget: validatedData.budget || null,
      additionalNotes: validatedData.additionalNotes || null,
      status: 'pending',
    };

    // Insert into database
    await db.insert(quoteRequests).values(quoteRequestData);

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully',
        id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting quote request:', error);

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
        message: 'Failed to submit quote request. Please try again.',
      },
      { status: 500 }
    );
  }
}

