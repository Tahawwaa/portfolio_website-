# 3D Interactive Portfolio

An immersive 3D portfolio built with Vite, React, Three.js (@react-three/fiber + @react-three/drei), Tailwind CSS, and Framer Motion.

## Features

- Floating 3D avatar: distorted glowing sphere with wireframe halo, subtle bobbing, mouse-reactive tilt
- Interactive particle field: 2,000 additive-blended particles that rotate and respond to the cursor
- Floating geometric shapes: wireframe icosahedrons, torus knots, and octahedrons drifting in the scene
- Dynamic lighting: a point light tracks the cursor across the scene
- Camera rig: smooth lerped parallax camera motion
- Glassmorphism profile card: 3D tilt parallax via Framer Motion springs, staggered entrance animations
- Fully responsive: scales from mobile to desktop, DPR capped at 2 for performance

## Setup

    npm install
    npm run dev      (dev server at http://localhost:3000)
    npm run build    (production build)
    npm run preview  (preview the production build)

## Project Structure

    index.html                        Entry HTML, Google Fonts preload
    vite.config.js                    Vite + React plugin
    tailwind.config.js                Custom colors, fonts, animations
    postcss.config.js
    src/
      main.jsx                        React entry point
      index.css                       Tailwind layers + glass/gradient utilities
      App.jsx                         Root with Suspense fallback
      hooks/
        useMousePosition.js           Normalized mouse coordinates hook
      components/
        Hero.jsx                      Hero section: scene + overlay layout
        ProfileCard.jsx               Glassmorphism card with 3D tilt
        LoadingScreen.jsx             Suspense fallback spinner
        three/
          Scene.jsx                   Canvas, camera rig, dynamic light, fog
          Avatar.jsx                  Distorted glowing sphere avatar
          ParticleField.jsx           2k-particle starfield
          FloatingShapes.jsx          Drifting wireframe geometries

## Customization

- Edit the PROFILE object in src/components/ProfileCard.jsx to change name, title, and bio.
- Swap the procedural avatar in src/components/three/Avatar.jsx for a texture-mapped sphere or a GLTF model (useTexture / useGLTF from drei).
- Adjust the palette in tailwind.config.js (cyber-blue, cyber-purple, cyber-pink) and the matching hex values in the three/ components.

## Performance Notes

- Particles use a single buffer geometry with additive blending and depthWrite false.
- Mouse state lives in a ref, so no React re-renders happen per mousemove inside the Canvas.
- dpr is capped at [1, 2] and powerPreference is set to high-performance.
- All animation is frame-delta based for consistent speed across refresh rates.
