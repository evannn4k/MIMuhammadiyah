---
name: Academic Operations System
colors:
    surface: '#faf8ff'
    surface-dim: '#d2d9f4'
    surface-bright: '#faf8ff'
    surface-container-lowest: '#ffffff'
    surface-container-low: '#f2f3ff'
    surface-container: '#eaedff'
    surface-container-high: '#e2e7ff'
    surface-container-highest: '#dae2fd'
    on-surface: '#131b2e'
    on-surface-variant: '#464555'
    inverse-surface: '#283044'
    inverse-on-surface: '#eef0ff'
    outline: '#777587'
    outline-variant: '#c7c4d8'
    surface-tint: '#4d44e3'
    primary: '#3525cd'
    on-primary: '#ffffff'
    primary-container: '#4f46e5'
    on-primary-container: '#dad7ff'
    inverse-primary: '#c3c0ff'
    secondary: '#0051d5'
    on-secondary: '#ffffff'
    secondary-container: '#316bf3'
    on-secondary-container: '#fefcff'
    tertiary: '#005338'
    on-tertiary: '#ffffff'
    tertiary-container: '#006e4c'
    on-tertiary-container: '#7df1bd'
    error: '#ba1a1a'
    on-error: '#ffffff'
    error-container: '#ffdad6'
    on-error-container: '#93000a'
    primary-fixed: '#e2dfff'
    primary-fixed-dim: '#c3c0ff'
    on-primary-fixed: '#0f0069'
    on-primary-fixed-variant: '#3323cc'
    secondary-fixed: '#dbe1ff'
    secondary-fixed-dim: '#b4c5ff'
    on-secondary-fixed: '#00174b'
    on-secondary-fixed-variant: '#003ea8'
    tertiary-fixed: '#85f8c4'
    tertiary-fixed-dim: '#68dba9'
    on-tertiary-fixed: '#002114'
    on-tertiary-fixed-variant: '#005137'
    background: '#faf8ff'
    on-background: '#131b2e'
    surface-variant: '#dae2fd'
typography:
    display:
        fontFamily: Plus Jakarta Sans
        fontSize: 36px
        fontWeight: '700'
        lineHeight: 44px
        letterSpacing: -0.025em
    headline-lg:
        fontFamily: Plus Jakarta Sans
        fontSize: 30px
        fontWeight: '600'
        lineHeight: 38px
        letterSpacing: -0.02em
    headline-lg-mobile:
        fontFamily: Plus Jakarta Sans
        fontSize: 24px
        fontWeight: '600'
        lineHeight: 32px
        letterSpacing: -0.015em
    headline-md:
        fontFamily: Plus Jakarta Sans
        fontSize: 20px
        fontWeight: '600'
        lineHeight: 28px
        letterSpacing: -0.015em
    headline-sm:
        fontFamily: Plus Jakarta Sans
        fontSize: 16px
        fontWeight: '600'
        lineHeight: 24px
        letterSpacing: -0.01em
    body-lg:
        fontFamily: Inter
        fontSize: 16px
        fontWeight: '400'
        lineHeight: 24px
    body-md:
        fontFamily: Inter
        fontSize: 14px
        fontWeight: '400'
        lineHeight: 20px
    body-sm:
        fontFamily: Inter
        fontSize: 12px
        fontWeight: '400'
        lineHeight: 16px
    label-md:
        fontFamily: Inter
        fontSize: 13px
        fontWeight: '500'
        lineHeight: 18px
    label-sm:
        fontFamily: Inter
        fontSize: 11px
        fontWeight: '600'
        lineHeight: 14px
        letterSpacing: 0.025em
    tabular-data:
        fontFamily: Inter
        fontSize: 13px
        fontWeight: '400'
        lineHeight: 20px
        letterSpacing: -0.005em
rounded:
    sm: 0.125rem
    DEFAULT: 0.25rem
    md: 0.375rem
    lg: 0.5rem
    xl: 0.75rem
    full: 9999px
spacing:
    gutter: 1.25rem
    gutter-desktop: 1.5rem
    margin: 1rem
    margin-tablet: 1.5rem
    margin-desktop: 2rem
    space-xs: 0.25rem
    space-sm: 0.5rem
    space-md: 1rem
    space-lg: 1.5rem
    space-xl: 2rem
---

## Brand & Style

The design system is crafted for institutional efficiency, high information density, and cognitive clarity. Built to serve school administrators, registrars, and department heads, the system balances executive authority with modern SaaS precision. It communicates trust, architectural rigor, and frictionless productivity.

The design movement combines **Minimalism** with modern **Utility-First UI Architecture** (inspired by Tailwind and Radix/Shadcn design primitives). Surfaces rely on flat structural panels, razor-thin outlines, precise micro-geometry, and intentional negative space rather than decorative flourishes. The visual tone is structured, objective, and quiet—allowing high-volume tabular records, student timelines, and administrative workflows to take precedence.

## Colors

The color palette centers on a disciplined neutral spine paired with an authoritative indigo primary accent and functional semantic markers.

- **Primary Canvas & Surfaces**: Light mode relies on a pure canvas (`#FFFFFF`) layered with subtle off-white workspace panels (`#F8FAFC`). Dark mode inverses this structure using deep zinc/slate tones (`#09090B` foundation with `#18181B` surface tiers).
- **Borders & Dividers**: High-precision, low-contrast hairline borders using `#E2E8F0` (light) and `#27272A` (dark).
- **Primary & Interactive**: Vibrant Indigo (`#4F46E5`) paired with Cobalt Blue (`#2563EB`) strictly reserved for focused states, call-to-actions, active navigation highlights, and interactive triggers.
- **Semantic Badges**:
    - **Success**: Muted emerald container (`#ECFDF5`) with structured text (`#047857`) for completed terms, paid tuition, and attendance benchmarks.
    - **Warning**: Warm amber tint (`#FFFBEB`) with dark amber text (`#B45309`) for probation notices, pending transfers, and unsaved grading sheets.
    - **Destructive**: Rose tint (`#FFF1F2`) with crisp crimson text (`#BE123C`) for disciplinary actions, overdue accounts, and critical errors.

## Typography

The typographic hierarchy pairs **Plus Jakarta Sans** for headlines and key numerical KPI totals with **Inter** for data tables, form fields, and operational metadata.

- **Tabular Data Treatment**: All table numeric cells, student IDs, GPA indicators, and date columns must enforce OpenType tabular figures (`font-variant-numeric: tabular-nums; tnum: 1`) to guarantee perfect vertical alignment across dense rows.
- **Rhythm & Line Heights**: Tight line-height ratios preserve vertical real estate in enterprise panels, preventing vertical drift in wide forms and administrative sheets.

## Layout & Spacing

The layout is built upon an 8pt base grid with a fixed collapsible operational sidebar (64px collapsed, 260px expanded) and a fluid main dashboard panel spanning up to a maximum container constraint of 1600px.

- **Grid Architecture**:
    - **Desktop (>= 1280px)**: 12-column layout with 24px gutters. Standard KPI stat groupings occupy 3 columns each; high-density student registration tables span 8 or 12 columns.
    - **Tablet (768px - 1279px)**: 6-column fluid structure, sidebar auto-collapses to an icon rail, and multi-column forms collapse to pairs.
    - **Mobile (< 768px)**: 1-column responsive stack; navigation transitions into a slide-over sheet drawer.
- **Padding Discipline**: Components rely strictly on balanced utility scales (`space-xs` through `space-xl`) to establish dense, legible breathing room around tabular sets without inflating panel heights.

## Elevation & Depth

This design system eschews multi-layered drop shadows in favor of **crisp hairline borders** and **low-diffusion micro-shadows**.

- **Level 0 (Flat)**: Background canvas (`#F8FAFC`) directly bordered by 1px solid `#E2E8F0`.
- **Level 1 (Cards, Data Panels)**: Neutral white surface (`#FFFFFF`) with a 1px border (`#E2E8F0`) and an ambient shadow of `0 1px 2px 0 rgba(0, 0, 0, 0.04)`.
- **Level 2 (Popovers, Dropdowns, Selects)**: Floating above workspace surfaces with a 1px border (`#E2E8F0`) and depth of `0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`.
- **Level 3 (Modal Dialogs, Slide-over Sheets)**: Centered structural focus backed by an accessible backdrop overlay (`rgba(15, 23, 42, 0.55)` with `backdrop-filter: blur(4px)`) and elevated with `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`.

## Shapes

The design system enforces a disciplined geometric radius:

- **Base Elements (`rounded-md` / 6px)**: Applied to text input fields, action buttons, select dropdowns, and checkboxes.
- **Structural Containers (`rounded-lg` / 8px)**: Applied to data cards, table wrappers, metric summary tiles, and modal dialogs.
- **Pill Shape (`rounded-full`)**: Applied strictly to analytical status badges, student avatar fallbacks, and quick-filter tag indicators.

## Components

### Buttons

- **Primary**: Solid Indigo (`#4F46E5`), text white, subtle top border highlight. On hover: `#4338CA`. Height: 36px (default), 32px (sm), 40px (lg).
- **Secondary / Outline**: Background transparent, border 1px solid `#E2E8F0`, text `#0F172A`. On hover: `#F1F5F9`.
- **Destructive**: Rose background (`#BE123C`), text white. On hover: `#9F1239`.
- **Ghost**: Zero border, text `#475569`. On hover: `#F1F5F9`.

### Badges & Status Chips

- Height: 22px, padding: 2px 8px, font: `label-sm`, rounded full (`rounded-full`).
- **Enrolled / Active**: Light emerald background (`#ECFDF5`), border 1px solid `#A7F3D0`, text `#065F46`.
- **Probation / Under Review**: Light amber background (`#FFFBEB`), border 1px solid `#FDE68A`, text `#92400E`.
- **Suspended / Unpaid**: Light rose background (`#FFF1F2`), border 1px solid `#FECDD3`, text `#9F1239`.

### Data Tables

- Flush borders with outer card boundary.
- **Header Row**: `#F8FAFC` background, height 40px, uppercase `label-sm` text color `#64748B`, bottom border 1px solid `#E2E8F0`.
- **Row**: Height 52px, text `tabular-data` color `#0F172A`, bottom border 1px solid `#F1F5F9`. On hover: subtle `#F8FAFC` row highlight with immediate 150ms transition.

### Input Fields & Controls

- **Text Inputs**: Height 36px, background `#FFFFFF`, border 1px solid `#CBD5E1`. Placeholder `#94A3B8`. Focused state: border `#4F46E5` with `ring-2 ring-indigo-500/20`.
- **Checkboxes**: 16x16px, border 1px solid `#CBD5E1`, rounded (4px). Checked state: solid `#4F46E5` with sharp white tick icon.

### Cards & Metrics

- Background `#FFFFFF`, border 1px solid `#E2E8F0`, padding 20px (`space-lg`), shadow level 1.
- Top section houses category label (`label-sm` in slate-500) alongside contextual micro-icon; mid-section displays primary KPI metric (`Plus Jakarta Sans`, 28px, semi-bold); bottom row contains trend pill (e.g., `+4.2% vs last semester`).
