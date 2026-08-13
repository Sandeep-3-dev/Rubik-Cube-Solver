import * as THREE from 'three';
export function createCube() {
    const rubiksCube = new THREE.Group();

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
        color: "cyan"
    });

    const spacing = 1.035;

    const edges = new THREE.EdgesGeometry(geometry);

    const borderMaterial = new THREE.LineBasicMaterial({
        color: 0x000000
    });


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
                    borderMaterial
                );

                cube.add(border);

                rubiksCube.add(cube);
            }
        }
    }


    return rubiksCube;
}