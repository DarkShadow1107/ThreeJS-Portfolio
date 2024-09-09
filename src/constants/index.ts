import type {
  TNavLink,
  TService,
  TTechnology,
  TTechnology2,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  frontend,
  gamedev,
  embedded,
  web,
  
  alpinejs,
  assembly,
  bootstrap,
  c,
  cpp,
  csharp,
  css,
  git,
  glsl,
  html,
  javascript,
  lightroom,
  nextjs,
  p5js,
  photoshop,
  reactjs,
  sass,
  scss,
  tailwind,
  typescript,
  threejs,

  mepgranada,

  apple_website_3d,
  apple_website_in_tailwind_css,
  bakery_threejs,
  blue_plasma_threejs,
  caldera_terrain_generator_threejs,
  canvas_orbital_trails_2,
  canvas_orbital_trails,
  car_3d_demo,
  car_at_night_threejs,
  circular_terrain_generator_threejs,
  clima_code,
  credit_card_type_auto_detection_tailwind_css_format_with_alpinejs,
  csharp_calculator,
  css_scroll_driven_dock,
  css_scroll_driven_scroll_snapping_animations_scrolltimeline_api,
  diorama_threejs,
  filspresso,
  fire_shader_threejs,
  fluid_slider_css,
  github_clone_nextjs,
  github_stats_app,
  gorillas_game,
  hangman_game,
  hard_boiled_threejs,
  hexanimation,
  home_theater,
  infinite_portals_threejs,
  island_terrain_generator_threejs,
  lake_terrain_generator_threejs,
  little_restaurant_threejs,
  loading_animation_js,
  moss_animation_js,
  nixie_tube_clock_css,
  parametric_surface_threejs_lenisjs,
  particle_life_js_with_mithriljs,
  physics_gpu_render,
  react_smooth_section_navigator,
  retrofuturist_point_base_game,
  solar_system_3d,
  space_tourism,
  tektris_js,
  tower_of_climbing_cubes_css,
  transdimensional_worm_p5js,
  universe_encyclopedia,
  web_ide,

  ana,

} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Game Developer",
    icon: gamedev,
  },
  {
    title: "Embedded Software Developer",
    icon: embedded,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Assembly",
    icon: assembly,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Sassy CSS",
    icon: scss,
  },
];

const technologies_2: TTechnology2[] = [
  {
    name: "P5.js",
    icon: p5js,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Lightroom",
    icon: lightroom,
  },
  {
    name: "Alpine JS",
    icon: alpinejs,
  },
  {
    name: "OpenGL Shading Language",
    icon: glsl,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Syntactically Awesome Style Sheets",
    icon: sass,
  }
];
const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "M.E.P. Europrojects Granada",
    icon: mepgranada,
    iconBg: "#383E56",
    date: "May 2022 - June 2022",
    points: [
      "Developing and maintaining websites using HTML, CSS and JavaScript.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Editing images in Adobe Lightroom and Photoshop and put them in the websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I worked with Gabi for Filspresso project and I can clearly say that he is a devotating person when its comes to professional areas. We spent weeks for this project to end but in the end it all worth it. We've learnt many things about coffee and programming that will help us in the nearly future.",
    name: "Popescu Ana-Ioana",
    designation: "Student from FILS",
    company: "National University of Science and Technology POLITEHNICA Bucharest",
    image: ana,
  },
];

const projects: TProject[] = [
  {
    name: "Apple Website 3D",
    description:
      "Apple's website for the iPhone 15 Pro series made in React and 3D visual.",
    tags: [
      {
        name: "React",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: apple_website_3d,
    sourceCodeLink: "https://github.com/DarkShadow1107/Apple-3D-Website",
    sourceLiveDemoLink: "https://apple-3d-website-kappa.vercel.app/",
  },
  {
    name: "Apple Website in Tailwind",
    description:
      "Apple's website for the iPhone XR in Tailwind CSS and responsiveness.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: apple_website_in_tailwind_css,
    sourceCodeLink: "https://github.com/DarkShadow1107/Apple-Website-in-Tailwind-CSS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Apple-Website-in-Tailwind-CSS/",
  },
  {
    name: "Bakery",
    description:
      "A 3D model of a bakery rendered in the browser using JavaScript.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: bakery_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/3D-Bakery-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/3D-Bakery-ThreeJS/",
  },
  {
    name: "Blue Plasma",
    description:
      "3D visual of geometrical waves with a portal above rendered in the browser using JavaScript.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: blue_plasma_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Blue-Plasma-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Blue-Plasma-ThreeJS/",
  },
  {
    name: "Caldera Terrain Generator",
    description:
      "A web app rendering 3D caldera terrain models based on user input in the browser.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: caldera_terrain_generator_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Caldera-terrain-Generator-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Caldera-terrain-Generator-ThreeJS/",
  },
  {
    name: "Canvas Orbital Trails 2.0",
    description:
      ".",
    tags: [
      {
        name: "SketchJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: canvas_orbital_trails_2,
    sourceCodeLink: "https://github.com/DarkShadow1107/Canvas-Orbital-Trails-2.0",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Canvas-Orbital-Trails-2.0/",
  },
  {
    name: "Canvas Orbital Trails",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: canvas_orbital_trails,
    sourceCodeLink: "https://github.com/DarkShadow1107/Canvas-Orbital-Trails",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Canvas-Orbital-Trails/",
  },
  {
    name: "Car 3D Demo",
    description:
      "3D car moving with user input decoded with Google's Draco library rendered in the browser.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: car_3d_demo,
    sourceCodeLink: "https://github.com/DarkShadow1107/Car-3D-Demo",
    sourceLiveDemoLink: "https://car-3d-demo.vercel.app/",
  },
  {
    name: "Car at Night",
    description:
      "3D car animation rendered in the browser using JavaScript.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: car_at_night_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Car-at-night-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Car-at-night-ThreeJS/",
  },
  {
    name: "Circular Terrain Generator",
    description:
      "A web app rendering 3D circular terrain models based on user input in the browser.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: circular_terrain_generator_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Circular-terrain-Generator-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Circular-terrain-Generator-ThreeJS/",
  },
  {
    name: "Clima Code",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "SVG",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: clima_code,
    sourceCodeLink: "https://github.com/DarkShadow1107/Clima-Code",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Clima-Code/",
  },
  {
    name: "Credit Card Type Auto Detection",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "AlpineJS",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: credit_card_type_auto_detection_tailwind_css_format_with_alpinejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Credit-Card-type-auto-detection-Tailwind-CSS-format-with-AlpineJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Credit-Card-type-auto-detection-Tailwind-CSS-format-with-AlpineJS/",
  },
  {
    name: "Calculator",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "CSharp",
        color: "green-text-gradient",
      },
    ],
    image: csharp_calculator,
    sourceCodeLink: "https://github.com/DarkShadow1107/Calculator-Csharp",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Space-404-Page/",
  },
  {
    name: "Scroll Driven Dock",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "GSAP",
        color: "yellow-text-gradient",
      },
    ],
    image: css_scroll_driven_dock,
    sourceCodeLink: "https://github.com/DarkShadow1107/CSS-Scroll-Driven-Dock",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/CSS-Scroll-Driven-Dock/",
  },
  {
    name: "Scroll Driven Animations",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ScrollTimeLine API",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: css_scroll_driven_scroll_snapping_animations_scrolltimeline_api,
    sourceCodeLink: "https://github.com/DarkShadow1107/CSS-scroll-driven-scroll-snapping-animations-ScrollTimeLine-API",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/CSS-scroll-driven-scroll-snapping-animations-ScrollTimeLine-API/",
  },
  {
    name: "Diorama",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: diorama_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Diorama-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Diorama-ThreeJS/",
  },
  {
    name: "Filspresso",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "SVG",
        color: "orange-text-gradient",
      },
    ],
    image: filspresso,
    sourceCodeLink: "https://github.com/DarkShadow1107/Filspresso",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Filspresso/",
  },
  {
    name: "Fire Shader",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: fire_shader_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Fire-shader-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Fire-shader-ThreeJS/",
  },
  {
    name: "Fluid Slider",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "PUG",
        color: "brown-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: fluid_slider_css,
    sourceCodeLink: "https://github.com/DarkShadow1107/Fluid-Slider-CSS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Fluid-Slider-CSS/",
  },
  {
    name: "GitHub Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: github_clone_nextjs,
    sourceCodeLink: "https://github.com/DarkShadow1107/GitHub-Clone-NextJS",
    sourceLiveDemoLink: "https://git-hub-clone-next-js.vercel.app/",
  },
  {
    name: "GitHub Stats App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: github_stats_app,
    sourceCodeLink: "https://github.com/DarkShadow1107/GitHub-Stats-App",
    sourceLiveDemoLink: "https://startling-druid-cb30bc.netlify.app/",
  },
  {
    name: "Gorillas Game",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: gorillas_game,
    sourceCodeLink: "https://github.com/DarkShadow1107/Gorillas---Plain-JavaScript-Game-with-HTML-Canvas",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Gorillas---Plain-JavaScript-Game-with-HTML-Canvas/",
  },
  {
    name: "Hangman Game",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Raylib",
        color: "grey-text-gradient",
      },
      {
        name: "C",
        color: "grey-text-gradient",
      },
    ],
    image: hangman_game,
    sourceCodeLink: "https://github.com/DarkShadow1107/Hangman",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Space-404-Page/",
  },
  {
    name: "Hard Boiled",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: hard_boiled_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Hard-Boiled-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Hard-Boiled-ThreeJS/",
  },
  {
    name: "Hexanimation",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: hexanimation,
    sourceCodeLink: "https://github.com/DarkShadow1107/Hexanimation",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Hexanimation/",
  },
  {
    name: "Home Theater",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: home_theater,
    sourceCodeLink: "https://github.com/DarkShadow1107/Home-Theater",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Home-Theater/",
  },
  {
    name: "Infinite Portals",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: infinite_portals_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Infinite-Portals-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Infinite-Portals-ThreeJS/",
  },
  {
    name: "Island Terrain Generator",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: island_terrain_generator_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Island-terrain-Generator-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Island-terrain-Generator-ThreeJS/",
  },
  {
    name: "Lake Terrain Generator",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: lake_terrain_generator_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Lake-terrain-Generator-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Lake-terrain-Generator-ThreeJS/",
  },
  {
    name: "Little Restaurant",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: little_restaurant_threejs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Little-Restaurant-ThreeJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Little-Restaurant-ThreeJS/",
  },
  {
    name: "Loading Animation",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: loading_animation_js,
    sourceCodeLink: "https://github.com/DarkShadow1107/Loading-Animation-JS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Loading-Animation-JS/",
  },
  {
    name: "Moss Animation",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: moss_animation_js,
    sourceCodeLink: "https://github.com/DarkShadow1107/Moss-animation-JS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Moss-animation-JS/",
  },
  {
    name: "Nixie Tube Clock",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: nixie_tube_clock_css,
    sourceCodeLink: "https://github.com/DarkShadow1107/Nixie-Tube-Clock-CSS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Nixie-Tube-Clock-CSS/",
  },
  {
    name: "Parametric Surface  ",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "LenisJS",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: parametric_surface_threejs_lenisjs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Parametric-Surface-ThreeJS-LenisJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Parametric-Surface-ThreeJS-LenisJS/",
  },
  {
    name: "Particle Life",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: particle_life_js_with_mithriljs,
    sourceCodeLink: "https://github.com/DarkShadow1107/Particle-Life-JS-with-MithrilJS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Particle-Life-JS-with-MithrilJS/",
  },
  {
    name: "Physics GPU Render",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "GLSL",
        color: "grue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: physics_gpu_render,
    sourceCodeLink: "https://github.com/DarkShadow1107/Physics-GPU-Render",
    sourceLiveDemoLink: "https://physics-gpu-render.vercel.app/",
  },
  {
    name: "Smooth Section Navigator",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: react_smooth_section_navigator,
    sourceCodeLink: "https://github.com/DarkShadow1107/React-Smooth-Section-Navigator",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/React-Smooth-Section-Navigator/",
  },
  {
    name: "Retrofuturist Point Base Game",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "ArsonJS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: retrofuturist_point_base_game,
    sourceCodeLink: "https://github.com/DarkShadow1107/Retrofuturist-Point-base-Game",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Retrofuturist-Point-base-Game/",
  },
  {
    name: "Solar System 3D",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Twig",
        color: "brown-text-gradient",
      },
      {
        name: "WebGL",
        color: "grue-text-gradient",
      },
    ],
    image: solar_system_3d,
    sourceCodeLink: "https://github.com/DarkShadow1107/Solar-System-3D",
    sourceLiveDemoLink: "https://solar-system-3d-gules.vercel.app/",
  },
  {
    name: "Space Tourism",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: space_tourism,
    sourceCodeLink: "https://github.com/DarkShadow1107/Space-Tourism",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Space-Tourism/",
  },
  {
    name: "Trektris",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: tektris_js,
    sourceCodeLink: "https://github.com/DarkShadow1107/Trektris-JS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Trektris-JS/",
  },
  {
    name: "Tower of Climbing Cubes",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tower_of_climbing_cubes_css,
    sourceCodeLink: "https://github.com/DarkShadow1107/Tower-of-climbing-cubes-CSS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Tower-of-climbing-cubes-CSS/",
  },
  {
    name: "Transdimensional Worm",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "P5JS",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: transdimensional_worm_p5js,
    sourceCodeLink: "https://github.com/DarkShadow1107/Transdimensional-Worm-P5JS",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Transdimensional-Worm-P5JS/",
  },
  {
    name: "Universe Encyclopedia",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "yellow-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "WebGL",
        color: "grue-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
      {
        name: "PUG",
        color: "brown-text-gradient",
      },
    ],
    image: universe_encyclopedia,
    sourceCodeLink: "https://github.com/DarkShadow1107/Universe-Encyclopedia",
    sourceLiveDemoLink: "https://darkshadow1107.github.io/Universe-Encyclopedia/",
  },
  {
    name: "Web IDE",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "violet-text-gradient",
      },
    ],
    image: web_ide,
    sourceCodeLink: "https://github.com/DarkShadow1107/Web-IDE",
    sourceLiveDemoLink: "https://light-web-ide.vercel.app/",
  },
];

export { services, technologies, technologies_2, experiences, testimonials, projects };
