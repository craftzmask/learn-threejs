import * as THREE from 'three';

/**
 * We need 4 elements to get started:
    A scene that will contain objects
    Some objects
    A camera
    A renderer
 */

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Create Mesh (geometry + material) aka (shape + how it looks)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Create camera
const sizes = {
	width: 800,
	height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

// Render
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

/**
 * Animation
 */
const timer = new THREE.Timer();

const tick = () => {
	timer.update();
	const ellapsedTime = timer.getElapsed();
	
	mesh.rotation.x = ellapsedTime;
	mesh.rotation.y = ellapsedTime;

	renderer.render(scene, camera);

	window.requestAnimationFrame(tick);
}

tick();