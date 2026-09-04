import * as THREE from 'three';
export function rotate(rubik_cube,move){
    let faces;
    let group=new THREE.Group();
    let direction;
    if(move==="L"){
        faces=rubik_cube.children.filter(cube=>cube.userData.x===-1);
        direction=-1;
    }
    else if(move==="R"){
         faces=rubik_cube.children.filter(cube=>cube.userData.x===1);
          direction=1;
    }
    else if(move==="U"){
         faces=rubik_cube.children.filter(cube=>cube.userData.y===1);
         direction=1;
    }
    else if(move==="D"){
         faces=rubik_cube.children.filter(cube=>cube.userData.y===-1);
         direction=-1;
    }
    else if(move==="F"){
         faces=rubik_cube.children.filter(cube=>cube.userData.z===1);
          direction=1;
    }
    else if(move==="B"){
         faces=rubik_cube.children.filter(cube=>cube.userData.z===-1);
         direction=-1;
    }
    rubik_cube.add(group);

    faces.forEach(cube=>{
        group.add(cube)
    });

    if(move==="L"||move==="R"){
        group.rotation.x=direction*Math.PI/2;
    }
    else if(move==="U"||move==="D"){
        group.rotation.y=direction*Math.PI/2;
    }
    else if(move==="F"||move==="B"){
        group.rotation.z=direction*Math.PI/2;
    }
    const moveBack=[...group.children];
    
    moveBack.forEach(cube=>{
        const {x,y,z}=cube.userData;

        rubik_cube.attach(cube);

        if(move==="L"){
            cube.userData.x=x;
            cube.userData.y=z;
            cube.userData.z=-y;
        }
        else if(move==="R"){
            cube.userData.x=x;
            cube.userData.y=-z;
            cube.userData.z=y;
        }
       else if(move==="U"){
            cube.userData.x=z;
            cube.userData.y=y;
            cube.userData.z=-x;
        }
       else if(move==="D"){
            cube.userData.x=-z;
            cube.userData.y=y;
            cube.userData.z=x;
}
        else if(move==="F"){
            cube.userData.x=-y;
            cube.userData.y=x;
            cube.userData.z=z;
}
        else if(move==="B"){
            cube.userData.x=y;
            cube.userData.y=-x;
            cube.userData.z=z;
}
    })
    rubik_cube.remove(group)
}

