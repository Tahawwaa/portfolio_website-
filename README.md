# Taha — Full Stack Portfolio

A portrait-first portfolio built with Vite, React, Tailwind CSS, Framer Motion, and a lazy-loaded Three.js scene.

## Run locally

Requires Node.js 18 or newer and npm.

```bash
npm install
npm run dev
npm run build
npm run preview
```

Vite uses port 3000 by default. Open the local URL printed in the terminal. The production output is in `dist/`.

## Page order

1. Large portrait, introduction, and interactive orbital scene
2. Skills grouped into frontend, backend, and development tools
3. Filterable projects with accessible detail dialogs and repository links
4. About and development approach
5. GitHub contact and footer

## Animation system

- The portrait moves with both the cursor and page scroll.
- The oversized name separates into floating letters as you scroll, while the 3D camera pushes through its orbital scene.
- On sufficiently large desktop viewports (1100 × 720 or larger, with a fine pointer), the skills become a sticky, scroll-scrubbed 3D assembly sequence with three phases and a progress rail. Scrolling backward reverses it; no scrolling is intercepted.
- Mobile, short viewports, and filtered skills use individual rising, rotating cards instead of the pinned sequence.
- Desktop pointers get a spring-following light, an interactive hover ring, and bounded click ripples; the native cursor remains visible.
- Skills and project panels rise, straighten, and fade in as scroll progress changes.
- Individual skills appear in a staggered sequence.
- Headings reveal word by word; paragraphs and other sections enter on scroll.
- A moving skills strip, hover effects, subtle ambient motion, and a reading-progress bar complement the entrances.
- Use the play/pause button in the header or the hero motion control to enable or disable animations. The preference persists locally.
- Without a saved preference, the page follows the visitor's reduced-motion setting. Explicitly enabling motion overrides that default.
- Keyboard focus reveals interactive content immediately. Project dialogs support Escape and return focus to their trigger.

## Project structure

```text
public/favicon.svg
src/
  App.jsx
  main.jsx
  index.css
  data/portfolio.js
  hooks/
    usePointerParallax.js
    useMediaQuery.js
  components/
    Navigation.jsx
    Hero.jsx
    ProfileCard.jsx
    Toolkit.jsx
    SectionHeading.jsx
    Projects.jsx
    ProjectCard.jsx
    ProjectArtwork.jsx
    ProjectDialog.jsx
    About.jsx
    Contact.jsx
    Icon.jsx
    motion/
      MotionSettings.jsx
      Reveal.jsx
      ScrollReveal.jsx
      AnimatedText.jsx
      ScrollProgress.jsx
      SkillTicker.jsx
      SkillSequence.jsx
      HeroWordmark.jsx
      CursorEffects.jsx
    three/
      Scene.jsx
      ParticleField.jsx
      FloatingShapes.jsx
```

## Customize

- Update identity, GitHub links, projects, and skills in `src/data/portfolio.js`.
- The supplied root image, `photo_2026-06-21_13-40-33.jpg`, is imported by `ProfileCard.jsx` and `About.jsx`. Update those imports when replacing it.
- Adjust global colors and responsive layouts in `src/index.css`; font and Tailwind tokens live in `tailwind.config.js`.
- Tune scroll distance and tilt using the `ScrollReveal` props, and entrance timing with the `Reveal` delay prop.
- Tune the three-stage choreography in `SkillSequence.jsx` and its scroll track height in `src/index.css`.
- Project artwork is a decorative visual study, not a screenshot of the original application. Actual implementation details live in the linked repositories.
- Typography uses Google Fonts with local system fallbacks. No GitHub API request is made when a visitor opens the site.

## Performance

The page renders independently of WebGL. Three.js loads separately after the initial page render, and the portrait remains visible if WebGL is unavailable. The scene uses 110 particles, simple geometry, a maximum device-pixel ratio of 1.5, and stops continuous rendering when the hero is outside the viewport or the page is hidden.

Scroll and pointer animations use motion values rather than React state updates on every frame. The skills ticker pauses outside the viewport. Animation settings also disable decorative CSS motion.

The build can report a large-chunk warning for the separately loaded Three.js engine; it is not part of the initial UI bundle. Actual frame rate depends on the device and browser.
