    import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { createCube } from './cube.js';

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
    95,
    window.innerWidth / window.innerHeight,
    1,
    1200
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    scene.background = new THREE.Color(0x1c1c1b);
    const floorGrid = new THREE.GridHelper(
        1050,
        350,
        0x444444,
        0x222222
    );
    const rubik_cube=createCube();

    scene.add(rubik_cube);
    
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

    controls.minDistance = 5;
    controls.maxDistance = 12;

    function animate() {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();