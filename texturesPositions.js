// PLANETS TEXTURES
let milkywayTexture = textureLoader.load("./assets/solar-system/milky-way.jpg");
let sunTexture = textureLoader.load("./assets/solar-system/sun.jpg");
let mercuryTexture = textureLoader.load("./assets/solar-system/mercurymap.jpg");
let mercuryBumpsTexture = textureLoader.load(
  "./assets/solar-system/mercurybump.jpg"
);
let venusTexture = textureLoader.load("./assets/solar-system/venusmap.jpg");
let venusBumpsTexture = textureLoader.load(
  "./assets/solar-system/venusbump.jpg"
);
let earthTexture = textureLoader.load("./assets/solar-system/earthmap1k.jpg");
let earthBumpsTexture = textureLoader.load(
  "./assets/solar-system/earthbump.jpg"
);
let earthCloudTexture = textureLoader.load(
  "./assets/solar-system/earthCloud.png"
);
let moonTexture = textureLoader.load("./assets/solar-system/moonmap1k.jpg");
let moonBumpsTexture = textureLoader.load(
  "./assets/solar-system/moonbump1k.jpg"
);
let marsTexture = textureLoader.load("./assets/solar-system/mars_1k_color.jpg");
let marsBumpsTexture = textureLoader.load(
  "./assets/solar-system/marsbump1k.jpg"
);
let jupiterTexture = textureLoader.load("./assets/solar-system/jupitermap.jpg");
let saturnTexture = textureLoader.load("./assets/solar-system/saturnmap.jpg");
let saturnRingTexture = textureLoader.load(
  "./assets/solar-system/saturnringcolor.jpg"
);
let uranusTexture = textureLoader.load("./assets/solar-system/uranus.jpg");
let neptuneTexture = textureLoader.load("./assets/solar-system/neptune.jpg");
let particlesTexture = textureLoader.load("/assets/particles/star_01.png");


// DATA FOR PLANETS
let planetsData = [
  { name: "Sun", radius: 5, texture: sunTexture },
  {
    name: "Mercury",
    radius: 0.5,
    texture: mercuryTexture,
    bumpTexture: mercuryBumpsTexture,
  },
  {
    name: "Venus",
    radius: 0.5,
    texture: venusTexture,
    bumpTexture: venusBumpsTexture,
  },
  {
    name: "Earth",
    radius: 0.8,
    texture: earthTexture,
    bumpTexture: earthBumpsTexture,
  },
  {
    name: "Mars",
    radius: 0.8,
    texture: marsTexture,

    bumpTexture: marsBumpsTexture,
  },
  {
    name: "Jupiter",
    radius: 1.5,
    texture: jupiterTexture,
  },
  {
    name: "Saturn",
    radius: 1,
    texture: saturnTexture,
  },
  {
    name: "Uranus",
    radius: 1,
    texture: uranusTexture,
  },
  {
    name: "Neptune",
    radius: 1,
    texture: neptuneTexture,
  },
];


// POSITION CALCULATION
gap = planet.name !== "Sun" ? planet.radius * 5 : 10;
  nextCenter = currCenter - (1 / 2) * planet.radius - gap;
  if (planet.name === "Mars") nextCenter -= 2;