# SCAFFOLD STRICT RULES

This app was created with Ultimate Scaffold.

## ⚠️ MANDATORY RULES

1. **NEVER create new UI components**
   - ALL UI components are in src/components/ui/
   - Import and use them, don't create new ones

2. **ONLY import from approved paths**
   - ✅ @/components/ui/*
   - ✅ @/lib/utils
   - ❌ Creating new component files
   - ❌ Custom UI implementations

3. **Write ONLY glue code**
   - Connect existing components
   - Add business logic
   - Handle state management
   - Make API calls

4. **Component usage**
   - Check src/components/ui/ for available components
   - Read component props from the files
   - Combine components to build features

## Available Components

- Button (button.tsx)
- Card (card.tsx)
- Alert (alert.tsx)
- And 57+ more ready-to-use components!

## Example Usage

```tsx
// ✅ CORRECT - Using existing components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// ❌ WRONG - Creating custom components
const MyButton = () => <button>Click me</button>;
```

Remember: The scaffold provides everything you need. Just assemble!