# Sentinel's Journal

## 2024-05-24 - Input Validation and Error Leakage
**Vulnerability:** The `POST /api/prompts` endpoint lacked length validation for user input fields (title, description, prompt text, tags) and returned raw database error messages to the client.
**Learning:** Checking for the presence of a field is not enough; length constraints are crucial to prevent DoS attacks and database issues. Returning raw error messages can leak internal schema details.
**Prevention:** Implement strict length limits on all user inputs. Log detailed errors server-side but return generic error messages to the client.
