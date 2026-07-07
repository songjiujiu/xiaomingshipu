---
name: Warm Culinary Companion
colors:
  surface: '#fff8f0'
  surface-dim: '#e2d9c7'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf3e0'
  surface-container: '#f6eddb'
  surface-container-high: '#f0e7d5'
  surface-container-highest: '#ebe2cf'
  on-surface: '#1f1b10'
  on-surface-variant: '#4d4632'
  inverse-surface: '#353024'
  inverse-on-surface: '#f9f0dd'
  outline: '#7f765f'
  outline-variant: '#d1c6ab'
  surface-tint: '#725c00'
  primary: '#725c00'
  on-primary: '#ffffff'
  primary-container: '#ffd100'
  on-primary-container: '#6f5a00'
  inverse-primary: '#edc200'
  secondary: '#5e5f57'
  on-secondary: '#ffffff'
  secondary-container: '#e4e3d9'
  on-secondary-container: '#64655d'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#d6d6d6'
  on-tertiary-container: '#5b5d5d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe07f'
  primary-fixed-dim: '#edc200'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#564500'
  secondary-fixed: '#e4e3d9'
  secondary-fixed-dim: '#c7c7be'
  on-secondary-fixed: '#1b1c16'
  on-secondary-fixed-variant: '#464740'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fff8f0'
  on-background: '#1f1b10'
  surface-variant: '#ebe2cf'
typography:
  headline-xl:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-max-width: 750px
  gutter: 16px
---

## Brand & Style

This design system embodies a friendly, warm, and approachable personality tailored for home cooking and lifestyle enthusiasts. The aesthetic is clean and modern, prioritizing high-quality food photography while maintaining a playful and inviting atmosphere through soft color transitions and rounded UI elements.

The visual style is a blend of **Modern Minimalism** and **Tactile Softness**. It uses generous white space to allow content to breathe, combined with soft shadows and "pill" shapes that make the interface feel accessible and safe. The target audience seeks inspiration and comfort, which is reflected in the sun-drenched palette and legible, high-contrast typography.

## Colors

The palette is anchored by a vibrant, optimistic primary yellow that draws attention to key actions and indicators. The background utilizes a subtle vertical gradient, transitioning from a soft, warm cream at the top to a clean, crisp white in the content areas. 

- **Primary:** High-energy yellow for buttons, active states, and call-to-action fills.
- **Surface:** White and light cream layers provide a soft canvas for imagery.
- **Typography:** Deep black for maximum legibility in headings, and a neutral medium-grey for secondary metadata and captions.
- **Accents:** A range of soft, desaturated pastels (mints, corals, lavenders) are used sparingly for category iconography backgrounds to add variety without overwhelming the primary brand color.

## Typography

The design system uses a singular, versatile sans-serif typeface to maintain a contemporary and friendly tone. Emphasis is created through weight contrast rather than font variety.

**Headlines** are set in bold, black weights with tight tracking to create a strong visual anchor. **Body text** utilizes regular weights with generous line heights to ensure a comfortable reading experience for recipes and descriptions. **Metadata**, such as cooking times and view counts, is rendered in a smaller, grey-scale variant to establish a clear information hierarchy.

## Layout & Spacing

The layout is optimized for mobile-first consumption with a standard canvas width of 750px (retina). It follows a fluid grid system with a standard 16px outer margin.

A consistent 8px/4px base unit governs all spatial relationships. Vertical rhythm is established through 24px-32px spacing between major content sections, while items within a group (like a grid of recipe cards) are separated by 12px or 16px. Content cards often utilize internal padding of 16px to ensure text elements do not feel cramped against image edges.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Ambient Shadows**. Instead of high-contrast borders, the design system uses extremely soft, blurred shadows (15-20px blur, 5% opacity black) to lift cards off the cream background.

The hierarchy of depth is as follows:
1.  **Level 0 (Base):** The cream-to-white background gradient.
2.  **Level 1 (Cards):** White surfaces with subtle shadows for recipe cards and search bars.
3.  **Level 2 (Floating):** Floating Action Buttons (FABs) and sticky navigation bars, using more pronounced shadows to indicate interactable layers sitting above the content.

## Shapes

The shape language is defined by large, friendly radii. This softness is a core brand pillar, removing "sharpness" from the kitchen experience.

- **Buttons & Search Bars:** Full "Pill" shapes (rounded-full) are preferred for primary actions.
- **Content Cards:** 1rem (16px) or 1.5rem (24px) corner radii are used for recipe images and containers to create a modern, "app-like" feel.
- **Icons:** Icons should be enclosed in circular or soft-square containers with desaturated background tints.

## Components

### Buttons
- **Primary:** High-contrast yellow background with black text. Pill-shaped. Often includes a small trailing icon (e.g., a chevron) for directional cues.
- **Secondary/Ghost:** Transparent background with a thin border or just a subtle tonal shift. Used for secondary navigation or less critical actions.

### Input Fields & Search
- **Search Bar:** Large, pill-shaped white container with a subtle shadow. Includes a magnifying glass icon on the left and a dedicated "Search" button anchored to the right side of the track.

### Cards
- **Feature Card:** Large-scale image at the top with a text overlay or footer. Corners are heavily rounded.
- **Grid Card:** Vertical orientation. 1:1 or 4:3 aspect ratio for the image, followed by a headline, and a metadata row containing small icons (heart, clock).

### Navigation
- **Bottom Bar:** A clean, white floating or fixed bar with line-art icons. The active state is indicated by a primary yellow color for the icon. A central "Plus" button is highlighted as a circular primary-colored element for content creation.

### Chips & Tags
- Used for categories (e.g., "Easy," "Baking"). These use small text on a semi-transparent or low-opacity tinted background, positioned at the top-left corner of images.