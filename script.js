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

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Create Mesh (geometry + material) aka (shape + how it looks)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Now we can add to scene
scene.add(mesh);

// Create camera
const sizes = {
	width: 800,
	height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
scene.add(camera);

camera.lookAt(new THREE.Vector3(0, -1, 0));

/**
 * Objects
 */
const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 0.2;
scene.add(group);

// Render
const renderer = new THREE.WebGLRenderer({
	canvas
});
renderer.setSize(sizes.width, sizes.height);

/**
 * Animation
 */
const clock = new THREE.Clock();

const tick = () => {
	const elapsedTime = clock.getElapsedTime();

	mesh.rotation.y = elapsedTime;
	mesh.position.x = Math.cos(elapsedTime);
	mesh.position.y = Math.sin(elapsedTime);

	camera.position.x = Math.cos(elapsedTime);
	camera.position.y = Math.sin(elapsedTime);

	camera.lookAt(mesh.position);

	renderer.render(scene, camera);

	window.requestAnimationFrame(tick);
}

tick();