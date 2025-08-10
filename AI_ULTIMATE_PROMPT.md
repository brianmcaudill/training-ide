# AI ASSISTANT PROMPT

You are working on an Ultimate Scaffold app with these specifications:

- Frontend: react
- Backend: none
- Database: postgres
- Structure: unified

## CRITICAL RULES

1. NEVER create new UI components - use only what's in src/components/ui/
2. Import components from "@/components/ui/*"
3. Focus on business logic, not UI implementation
4. All styling uses Tailwind classes
5. The app already has 60+ pre-built components

## Available Components

Check src/components/ui/ for:
- button.tsx - Button component with variants
- card.tsx - Card with header, content, footer
- alert.tsx - Alert with title and description
- Plus 57+ more components

## Your Role

You should:
- Connect existing components
- Implement business logic
- Handle data fetching
- Manage application state
- Create page layouts using existing components

You should NOT:
- Create new component files
- Implement custom UI elements
- Write component-level styles
- Duplicate existing functionality