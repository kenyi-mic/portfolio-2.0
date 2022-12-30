import * as THREE from "three";
import images from "./images";



const container = document.querySelector('.three-bg');
const loader = new THREE.TextureLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry(13, 5, 15, 9)
const material = new THREE.MeshBasicMaterial( { color: 0x0ffff, map:loader.load(images.bg15) } );
const cube = new THREE.Mesh( geometry, material );

//responsive
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
})

scene.add( cube );
camera.position.z = 5;

const count = geometry.attributes.position.count;
const clock = new THREE.Clock();



function animate() {
  const time = clock.getElapsedTime();
  for(let i = 0; i < count; i++){
    const x = geometry.attributes.position.getX( i );
    const y = geometry.attributes.position.getY( i );
    geometry.attributes.position.setZ( i, Math.sin(x) );
    geometry.computeVertexNormals();
    geometry.attributes.position.needsUpdate = true;

  }
  requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}


animate();

