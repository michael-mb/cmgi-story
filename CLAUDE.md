# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — serve with hot reload at http://localhost:3000
- `npm run build` — production build (SSR/Nitro output)
- `npm run generate` — static site generation
- `npm run preview` — preview the production build
- `npm run dev-ssl` — dev server over HTTPS using `localhost.pem` / `localhost-key.pem` (must exist at repo root)

No test or lint scripts are configured.

## Environment

`STORYBLOK_ACCESS_TOKEN` (Storyblok Space "Preview Token") is required and read in `nuxt.config.js`. It is currently committed in `.env` — treat that token as the only configuration entry point.

## Architecture

Nuxt 4 + `@storyblok/nuxt` SPA acting as the frontend for content authored in Storyblok. All visible content is fetched from Storyblok at request time using the `draft` version (no live/published switch yet).

**Three layers of `.vue` files, by role:**

1. `pages/` — Nuxt file-based routes. Each top-level page fetches **one** Storyblok story (e.g. `pages/about.vue` → `useAsyncStoryblok('about', { version: 'draft' })`), then renders `<StoryblokComponent :blok="story.content" />`. Catch-all routes under `pages/events/[...slug].vue` and `pages/prayer/[...slug].vue` fetch `cdn/stories/events/<slug>` / `cdn/stories/prayer/<slug>` via `useStoryblokApi()` and redirect to `/404` on failure.
2. `storyblok/` — components registered as Storyblok bloks. Subfolders are organizational only (`pages/`, `main/`, `multipart/`); Storyblok looks them up by **filename = blok technical name**. Each component takes a `blok` prop and uses `v-editable="blok"` so the Storyblok visual editor can target it. `MainPage.vue` / `Page.vue` recursively render `blok.body` via `<StoryblokComponent v-for="blok in blok.body" :blok="blok" />` — this is how nested content trees are unfolded.
3. `components/` — global Nuxt auto-imported components for chrome (`Header`, `MobileHeader`, `Footer`). Used by `layouts/default.vue`, which additionally fetches the `readmore` story and passes its `caroussel[0]` to a shared `CarrouselWrapperDown` rendered on every page.

**SEO meta pattern.** Every page expects `story.content.meta[0]` to contain `{ title, description, keywords, author }` and feeds it to `useHead`. New top-level pages should follow this contract.

**Rich text.** `RichTextBlock.vue` (and similar bloks) render Storyblok long text fields with the `marked` library via `v-html="marked(blok.text)"`. There is no sanitization step — content is trusted because it comes from the authenticated CMS.

**Theme assets.** A large static HTML theme lives under `public/` (`css/`, `js/`, `rs-plugin/`, `images/`). `nuxt.config.js` injects every stylesheet and script tag into `<head>` globally — Bootstrap, jQuery, Owl Carousel, Revolution Slider, custom.js, etc. Order matters; jQuery must load before its plugins. Page markup throughout uses Bootstrap classes and the theme's class names directly.

**Vercel.** Deployed to https://cmgi-story.vercel.app. `plugins/vercel.ts` injects `@vercel/analytics` client-side only (`mode: 'client'` in `nuxt.config.js`).

**Language.** UI copy and routes are in German (`htmlAttrs.lang: 'de'`, `error.vue` etc.).
