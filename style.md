# Style Guide

Conventions I shall follow to maintain consistent code.

## General

## Files

All files shall have an extension whenever possible. For configuration files, .cjs or .js is preferred. JSON5 is preferred to regular JSON.

### Formatting

Two spaces shall be used instead of tabs. Single quotes shall be used whenever possible. Notable exceptions include html attributes and json files. Trailing commas shall be used whenever possible. Semicolons shall be used whenever possible.

### Naming

Use lower camelCase in most instances. Boolean variables shall be prefixed with is as in isDark.

Filenames of components shall be in UpperCamelCase.

## CSS

### Naming

### Colors

All colors shall be in the oklch format.

### Style Tokens

The color palette tokens shall be declared in a separate css file. This file should contain every unique color used in the project (Note that colors may be modified in use such as with filters). When tokens are to be used, they will be imported from this file and assigned to variables indicating where they will be used. For example:

```css
@import "themeTokens.css";

:root {
  --color-text-primary: var(--color-primary-contrast);
  --color-main-bg: var(--color-primary);
}
```

Colors shall be prefixed with "color". They shall be named --color-(primary | secondary | tertiary)?-(accent | contrast), giving up to 9 colors. Main colors not have accent or contrast suffix in their name. They should usually have lower chroma values. Accent colors should be used sparingly and should usually have a high chroma value. Contrast colors shall have a different lightness and should meet the APCA contrast of L<sup>c</sup> 60.

## Svelte

### Naming

Component files shall use UpperCamelCase.
