import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 1. Create a scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  95,
  window.innerWidth / window.innerHeight,
  1,
  1200
);

// 3. Create a renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const blackMaterial = new THREE.MeshStandardMaterial({
    color: 0x2e2e2d
});

const redMaterial = new THREE.MeshStandardMaterial({
    color: "red"

});

const orangeMaterial = new THREE.MeshStandardMaterial({
    color: "magenta"
});

const whiteMaterial = new THREE.MeshStandardMaterial({
    color: "white"
});

const yellowMaterial = new THREE.MeshStandardMaterial({
    color: "yellow"
});

const greenMaterial = new THREE.MeshStandardMaterial({
    color: "green"
});

const blueMaterial = new THREE.MeshStandardMaterial({
    color:"cyan"
});

const spacing =1.035;

const edges = new THREE.EdgesGeometry(geometry);


for (let x = -1; x <= 1; x++) {

    for (let y = -1; y <= 1; y++) {

        for (let z = -1; z <= 1; z++) {

            if (x === 0 && y === 0 && z === 0) {
                continue;
            }

            const cubieMaterials = [
                blackMaterial,
                blackMaterial,
                blackMaterial,
                blackMaterial,
                blackMaterial,
                blackMaterial
            ];

            if (x === 1) {
                cubieMaterials[0] = redMaterial;
            }
            if (x === -1) {
                cubieMaterials[1] = orangeMaterial;
            }
            if (y === 1) {
                cubieMaterials[2] = yellowMaterial;
            }
            if (y === -1) {
                cubieMaterials[3] = whiteMaterial;
            }
            if (z === 1) {
                cubieMaterials[4] = greenMaterial;
            }
            if (z === -1) {
                cubieMaterials[5] = blueMaterial;
            }
            const cube = new THREE.Mesh(
                geometry,
                cubieMaterials
            );
            cube.position.set(
                x * spacing,
                y * spacing,
                z * spacing
            );
            const border = new THREE.LineSegments(
                edges,
                new THREE.LineBasicMaterial({
                    color: 0x000000
                })
            );
            cube.add(border);
            scene.add(cube);
        }
    }
}
scene.background = new THREE.Color(0x1c1c1b);
const floorGrid = new THREE.GridHelper(
    1050,
    350,
    0x444444,
    0x222222
);

scene.add(floorGrid);
floorGrid.position.y = -15;

const light1 = new THREE.DirectionalLight(
    0xffffff,
    3
);
const light2 = new THREE.DirectionalLight(
    0xffffff,
    3
);

light1.position.set(-5, 6, 2);
light2.position.set(5,-6,2);
scene.add(light1);
scene.add(light2);

camera.position.set(6, 6, 6);
camera.lookAt(0, 0, 0);

const ambientLight = new THREE.AmbientLight("white", 10);
scene.add(ambientLight);

const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;
controls.dampingFactor = 0.03;

function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();