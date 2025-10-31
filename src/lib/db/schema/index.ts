import * as authSchema from "./auth-schema";
import * as formsSchema from "./forms-schema";

export const schema = {
    ...authSchema,
    ...formsSchema,
}

// Export individual tables for direct imports
export { user, session, account, verification } from "./auth-schema";
export { quoteRequests, contactSubmissions } from "./forms-schema";