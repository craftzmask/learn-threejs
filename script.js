import * as THREE from 'three';

// Create a scence
const scene = new THREE.Scene();

// Create a red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);                // the shape
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // the look

// Mesh is a combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);

// Add the red cube to the scene
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600
};

// Create a camera object
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// We need canvas to render
const canvas = document.querySelector("canvas.webgl");

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// Render stuff
renderer.render(scene, camera);