import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import {
  CSS3DObject,
  CSS3DRenderer,
} from "three/examples/jsm/renderers/CSS3DRenderer";
import { PlaneGeometry } from "three";
import gsap from "gsap";

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Setup

const canvas = document.getElementById("bg");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(30);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#e5e5e5", 1);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  (camera.aspect = window.innerWidth / window.innerHeight),
    camera.updateProjectionMatrix();
});

const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// renderer.shadowMap.enabled = true;

renderer.render(scene, camera);

// const torusKnot = new THREE.Mesh(
//   new THREE.TorusKnotGeometry(8, 2.5, 150, 16),
//   new THREE.MeshNormalMaterial()
// );
// torusKnot.position.set(10, 0, 0);
// scene.add(torusKnot);

// Objects

// Box
const box_size = 30;
// const geometry2 = new THREE.BoxGeometry(box_size, box_size, box_size);
// const material2 = new THREE.MeshStandardMaterial({
//   color: "red",
//   wireframe: true,
// });
// const box = new THREE.Mesh(geometry2, material2);

// scene.add(box);

// Projects

const projectTitleWords = [
  ["One", "Go!"],
  ["ATLivingSafe:", "A Safety-Oriented", "Apartment", "Listing", "Site"],
  ["Pet Adoption", "Photo", "Pawpularity", "Prediction"],
  ["BYOW", "Build", "Your", "Own", "World"],
];

const projectTitleSubstrings = projectTitleWords.map((title) => {
  const substrings = [];
  let substring = "";
  let i = 0;
  while (i < title.length) {
    if (substring.length + title[i].length < box_size * 0.6) {
      substring += title[i] + " ";
      i++;
    } else {
      substrings.push(substring);
      substring = "";
    }
  }
  substring.length > 0 && substrings.push(substring);
  return substrings;
});

// const categories = [
//   "Fullstack",
//   "Fullstack + Machine Learning",
//   "Machine Learning & Computer Vision",
//   "Backend",
// ];

// const skills = [
//   ["JavaScript", "React.js", "Python", "Flask"],
//   ["JavaScript", "React.js", "Google Maps APIs"],
// ];

const projectHeaders = new THREE.Object3D();
// const projectContent = new THREE.Object3D();
const font_size = box_size / 15;
const line_padding = font_size * 1.2;
const xOffset = 1,
  yOffset = -15;

const loader = new FontLoader();
loader.load("fonts/Work Sans_Bold.json", (font) => {
  // Projects
  projectTitleSubstrings.forEach((title, i) => {
    // const numSubstring = title.length;

    // Number

    const mesh = new THREE.Mesh(
      new TextGeometry(`${i + 1}`, {
        font: font,
        size: font_size * 2,
        height: 0.2,
      }),
      new THREE.MeshStandardMaterial({ color: "black" })
    );
    mesh.position.y = yOffset + line_padding * 1.5;
    // mesh.rotation.z = THREE.MathUtils.degToRad(-30);
    posit(mesh, i);
    projectHeaders.add(mesh);

    // Title

    title.forEach((substring, j) => {
      const geometryText = new TextGeometry(substring, {
        font: font,
        size: font_size,
        height: 0.2,
      });

      const mesh = new THREE.Mesh(
        geometryText,
        new THREE.MeshStandardMaterial({ color: "black" })
      );

      mesh.castShadow = true;
      mesh.position.y = yOffset + -j * line_padding;
      // mesh.rotation.z = THREE.MathUtils.degToRad(-30);

      posit(mesh, i);
      projectHeaders.add(mesh);
    });
  });
});

// // Categories

// loader.load("fonts/Poppins_Regular.json", (font) => {
//   categories.forEach((category, i) => {
//     const plane = new THREE.Mesh(
//       new PlaneGeometry(box_size, 20),
//       new THREE.MeshStandardMaterial({ color: "blue" })
//     );
//     posit(plane, i);
//     plane.position.y += 5 - 4 * line_padding;

//     const mesh = new THREE.Mesh(
//       new TextGeometry(category, {
//         font: font,
//         size: 0.8,
//         height: 0,
//       }),
//       new THREE.MeshStandardMaterial({ color: "red" })
//     );

//     posit(mesh, i);
//     mesh.position.y = 5 - 4 * line_padding;
//     projectContent.add(plane, mesh);
//   });
// });

function posit(mesh, i) {
  switch (i) {
    case 0:
      mesh.position.x = -box_size / 2 + xOffset;
      mesh.position.z = box_size / 2;
      break;
    case 1:
      mesh.rotation.y = THREE.MathUtils.degToRad(90);
      mesh.position.x = box_size / 2;
      mesh.position.z = box_size / 2 - xOffset;
      break;
    case 2:
      mesh.rotation.y = THREE.MathUtils.degToRad(180);
      mesh.position.x = box_size / 2 - xOffset;
      mesh.position.z = -box_size / 2;
      break;
    case 3:
      mesh.rotation.y = THREE.MathUtils.degToRad(270);
      mesh.position.x = -box_size / 2;
      mesh.position.z = -box_size / 2 + xOffset;
      break;
    default:
      break;
  }
}

const orbitGroup = new THREE.Object3D();
orbitGroup.add(projectHeaders);
orbitGroup.position.x = 40;

scene.add(orbitGroup);
// scene.add(projectContent);

// ??
// const material = new THREE.MeshBasicMaterial({ color: "purple" });
// material.opacity = 0;
// material.blending = THREE.NoBlending;

// function Element(element) {
//   const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(box_size, box_size),
//     material
//   );
//   console.log(element);
//   // const div = document.createElement("div");
//   // div.style.width = "100px";
//   // div.style.height = "100px";
//   // // div.style.backgroundColor = "#000";
//   // div.append(element);

//   const object = new CSS3DObject(element);
//   plane.add(object);
//   scene.add(plane, object);
//   object.position.copy(plane.position);
//   console.log(object);
//   // object.rotation.y = plane.rotation.y;

//   return object;
// }

// const cssRenderer = new CSS3DRenderer({
//   canvas: document.getElementById("bg"),
// });
// cssRenderer.setSize(window.innerWidth, window.innerHeight);

// const group = new THREE.Group();
// group.add(new Element(document.getElementById("hoho")));
// scene.add(group);

// copy

// function Element(element, x, y, z, ry) {
//   const div = document.createElement("div");
//   div.style.width = "480px";
//   div.style.height = "360px";
//   div.style.backgroundColor = "#000";

//   div.appendChild(element);

//   const object = new CSS3DObject(div);
//   object.position.set(x, y, z);
//   object.rotation.y = ry;

//   return object;
// }
// const container = document.getElementById("bg");

// const cssRenderer = new CSS3DRenderer();
// cssRenderer.setSize(window.innerWidth, window.innerHeight);
// container.appendChild(cssRenderer.domElement);

// const group = new THREE.Group();
// group.add(new Element(document.getElementById("hoho"), 0, 0, 240, 0));
// scene.add(group);

// Lights

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// The X axis is red. The Y axis is green. The Z axis is blue.
const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, -40);

// const visibleXYAtDepth = (depth, camera) => {
//   const cameraOffset = camera.position.z;
//   if (depth < cameraOffset) {
//     depth -= cameraOffset;
//   } else {
//     depth += cameraOffset;
//   }

//   const vFOV = (camera.fov * Math.PI) / 180;

//   const height = 2 * Math.tan(vFOV / 2) * Math.abs(depth);

//   return [height * camera.aspect, height];
// };

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  // if (t > -500) {
  //   torusKnot.position.z = t * -0.05;
  // }

  // torusKnot.rotation.x += 0.01;
  // torusKnot.rotation.y += 0.01;
  // torusKnot.rotation.z += 0.01;

  if (t > -940) {
    orbitGroup.position.z = t * -0.3 - 300;
  } else if (t > -3030) {
    orbitGroup.rotation.y = (t + 940) * 0.003;
  } else {
    orbitGroup.position.z = (-940 - t - 3030) * -0.3 - 300;
  }
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

const clock = new THREE.Clock();
let time = 0;
let delta = 0;

function animate() {
  requestAnimationFrame(animate);

  delta = clock.getDelta();
  time += delta;
  // torusKnot.rotation.x += 0.01;
  // torusKnot.rotation.y += 0.01;
  // torusKnot.rotation.z += 0.01;

  projectHeaders.position.y = Math.abs(Math.sin(time * 2)) * 0.6;

  // controls.update();

  renderer.render(scene, camera);
  // cssRenderer.render(scene, camera);
}

animate();

// t1 = new gsap.timeline().delay(0.3);
// t1.to(torusKnot.scale, 1, { x: 2, ease: Expo.easeOut });
