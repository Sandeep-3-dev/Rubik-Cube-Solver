import * as THREE from 'three';

export function rotateRight(rubik_cube){

    const face=rubik_cube.children.filter(cube=>{
        return cube.userData.x===1
    })
    const rightgrp=new THREE.Group();
    rubik_cube.add(rightgrp);

    face.forEach(cube=>{
        rightgrp.add(cube)
    })
    rightgrp.rotation.x=Math.PI/2;

    const moveBack=[...rightgrp.children];
    
    moveBack.forEach(cube=>{
        const {x,y,z}=cube.userData;
        rubik_cube.attach(cube);
        cube.userData.x=x;
        cube.userData.y=-z;
        cube.userData.z=y;
    })
    rubik_cube.remove(rightgrp)
}

export function rotateFace(rubik_cube){
    const faces=rubik_cube.children.filter(cube=>{
        return cube.userData.z===1
    });

    const facegrp=new THREE.Group();
    rubik_cube.add(facegrp);

    faces.forEach(cube=>{
       facegrp.add(cube);
    });
    facegrp.rotation.z=Math.PI/2;

    const moveBack = [...facegrp.children];

    moveBack.children.forEach(cube=>{
        const {x,y,z}=cube.userData;
        rubik_cube.attach(cube);
        cube.userData.x=y;
        cube.userData.y=-x;
        cube.userData.z=z;
    })
    rubik_cube.remove(facegrp);
}

export function rotateTop(rubik_cube){
    const faces=rubik_cube.children.filter(cube=> cube.userData.y===1);

    const topgrp=new THREE.Group();
    rubik_cube.add(topgrp);

    faces.forEach(cube=>{
        topgrp.add(cube);
    });

    topgrp.rotation.y=Math.PI/2;

    const moveBack=[...topgrp.children];

    moveBack.forEach(cube=>{
        const {x,y,z}=cube.userData;

        rubik_cube.attach(cube);

        cube.userData.x=-z;
        cube.userData.y=y;
        cube.userData.z=x;
    });

    rubik_cube.remove(topgrp);

}