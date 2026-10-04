import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * We need 4 elements to get started:
    A scene that will contain objects
    Some objects
    A camera
    A renderer
 */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Create Mesh (geometry + material) aka (shape + how it looks)
const createMesh = (width, height, depth, color) => {
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const material = new THREE.MeshBasicMaterial({ color });
  return new THREE.Mesh(geometry, material);
};

const meshes = [
  createMesh(2, 2, 2, 0xff0000),
  createMesh(1, 3, 1, 0x0000ff),
  createMesh(3, 1, 1, 0x0000ff),
  createMesh(1, 1, 3, 0x0000ff),
];

for (const mesh of meshes) {
  scene.add(mesh);
}

const canvasSizes = { width: 800, height: 600 };

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  canvasSizes.width / canvasSizes.height,
  1,
  100,
);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 3;
scene.add(camera);

// Render
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvasSizes.width, canvasSizes.height);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Animation
 */
const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
