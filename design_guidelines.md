# Design Guidelines: English Verb Conjugation Web App

## Design Approach

**Reference-Based Approach:** Drawing inspiration from modern educational platforms like Duolingo, Quizlet, and Memrise that successfully balance playful aesthetics with learning effectiveness. The design will embrace vibrant visual language while maintaining excellent readability and usability for educational content.

**Core Principles:**
- Playful confidence: Bold, friendly design that makes learning feel approachable
- Information clarity: Clean hierarchy despite colorful treatment
- Delight through micro-interactions: Subtle animations that reward user actions
- Card-based modularity: Each tense group feels like a distinct, digestible unit

## Typography System

**Font Families:**
- Primary: "DM Sans" or "Inter" (Google Fonts) - clean, modern sans-serif for interface
- Accent: "Fredoka" or "Outfit" (Google Fonts) - rounded, playful for headings and verb displays

**Type Scale:**
- Hero/Page Title: text-5xl to text-6xl, font-bold
- Tense Headers: text-2xl to text-3xl, font-semibold
- Verb Display: text-4xl, font-bold (the searched verb)
- Conjugation Labels (I, you, he/she/it): text-sm, font-medium, uppercase tracking
- Conjugated Forms: text-lg to text-xl, font-semibold
- Body/Instructions: text-base, font-normal
- Helper Text: text-sm, font-normal

## Layout & Spacing System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, and 12 for consistent rhythm
- Component padding: p-4 to p-8
- Card gaps: gap-6 to gap-8
- Section spacing: py-12 to py-20
- Tight groupings: space-y-2
- Moderate groupings: space-y-4 to space-y-6

**Container Strategy:**
- Search section: max-w-2xl mx-auto
- Conjugation display: max-w-6xl mx-auto
- Cards grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

**Vertical Flow:**
- Hero section: 60vh with centered content
- Search bar: Prominent, immediately below hero
- Results area: Natural height with consistent card sizes

## Component Library

### Navigation
- Simple header with logo/title on left
- Minimal navigation (About/Help links) on right
- Sticky positioning for constant access
- Height: h-16 to h-20

### Hero Section
- Centered layout with headline and subheadline
- Large, welcoming message: "Master English Verb Conjugations"
- Search bar integrated directly in hero for immediate action
- Playful illustration or abstract shapes as background imagery

### Search Component
- Large search input: h-14 to h-16, rounded-2xl
- Prominent search icon inside input (left side)
- Auto-complete dropdown: rounded-xl, shadow-lg, absolute positioning
- Suggestion items: p-3 to p-4, hover states with background shifts
- "Recent searches" section in dropdown if empty

### Conjugation Display Cards

**Card Structure:**
- Rounded corners: rounded-2xl to rounded-3xl
- Generous padding: p-6 to p-8
- Shadow treatment: shadow-md with subtle hover elevation (shadow-lg)
- Each tense category gets its own card

**Tense Card Layout:**
- Tense name header: Border-bottom separator, pb-4, mb-6
- Grid of persons: grid-cols-2 gap-4 (for I/you/he she it/we/they pairs)
- Person label + conjugated form paired vertically

**Person Conjugation Items:**
- Label (e.g., "I", "You"): Smaller text, reduced opacity
- Conjugated verb: Larger, bold text
- Spacing between label and form: space-y-1

### Special Elements

**Irregular Verb Indicator:**
- Badge/chip component: inline-flex items-center
- Position near verb title
- Rounded-full, px-3 py-1, text-xs font-semibold

**Verb Title Display:**
- Large display of the searched verb at top of results
- Phonetic pronunciation helper below (text-sm, italic)
- Particle grouping if phrasal verb

**Empty State:**
- Centered illustration placeholder
- Encouraging message: "Search for any English verb to begin"
- Example verbs as clickable suggestions (be, go, have, etc.)

## Animations

**Subtle, Purposeful Motion:**
- Card entrance: Staggered fade-in with slight slide-up (50ms delay between cards)
- Search suggestions: Fade in smoothly (150ms duration)
- Hover states: Scale transform (scale-105) with transition-transform duration-200
- Loading state: Gentle pulse animation on search input
- NO distracting page-wide animations or continuous motion

## Images

### Hero Section Image
**Description:** Cheerful, abstract illustration featuring floating speech bubbles, letters, or linguistic symbols in a playful composition. Should convey learning, communication, and language mastery. Style should be modern, geometric, with friendly shapes.

**Placement:** Background element in hero section, either as:
- Centered illustration with content overlaid
- Split layout: illustration on right, search on left (desktop)
- Full-width with overlay gradient for text readability

**Treatment:** Semi-transparent or with gradient overlay to ensure text remains perfectly readable. Illustration should complement rather than compete with the search interface.

### Additional Visual Elements
- Icon library: Heroicons for UI elements (search, arrow indicators)
- Decorative elements: Subtle geometric shapes or dots as background accents
- NO stock photos of people - keep focus on abstract, friendly illustration style

## Accessibility & Interaction

- Maintain WCAG AA contrast ratios despite playful palette
- Clear focus indicators on all interactive elements (ring-2 ring-offset-2)
- Keyboard navigation support for search and suggestions
- Semantic HTML structure (proper heading hierarchy)
- Form labels always visible (no placeholder-only inputs)

## Responsive Behavior

**Mobile (base):**
- Single column conjugation cards
- Full-width search bar
- Reduced padding: p-4
- Stack all tense cards vertically

**Tablet (md:):**
- Two-column card grid
- Larger search input
- Increased spacing: p-6

**Desktop (lg:):**
- Three-column card grid for compact tenses
- Maximum width containers centered
- Full spacing: p-8
- Horizontal tense layout for simple tenses (present/past side by side)

This design creates a vibrant, engaging learning environment that makes verb conjugation feel approachable and even fun, while maintaining the clarity needed for effective educational content display.