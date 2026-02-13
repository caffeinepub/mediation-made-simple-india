# Specification

## Summary
**Goal:** Simplify the “My Dispute – What Should I Do?” experience by removing the free-text chatbot and expanding category-based guidance with more detailed, India-focused informational content.

**Planned changes:**
- Remove the “Describe Your Dispute” free-text/chatbot UI from the Dispute Guidance page and keep only the dispute category selection workflow.
- Expand guidance content for each of the six existing categories (family, business, employment, property/landlord-tenant, consumer, neighborhood) to include: realistic examples, mediation suitability (including when it may not be suitable), recommended next steps, practical do’s and don’ts, and plain-English legal-information notes for India-focused context (informational, not legal advice).
- Update backend guidance data/response structures so the category-based guidance API returns structured fields needed for the expanded sections (category-specific, not generic).
- Update the category results UI to render the expanded guidance in a scannable, mobile-friendly, accessible layout using headings and semantic lists, while keeping the existing disclaimer visible.

**User-visible outcome:** Users select a dispute category and see richer, clearly organized guidance (examples, suitability notes, next steps, do’s/don’ts, and legal info) without any free-text chatbot or textarea input on the page.
