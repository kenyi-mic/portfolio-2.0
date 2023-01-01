import * as THREE from "three";
import images from "../js/images";
import vertex from "../shaders/vertex.glsl";
import fragment from "../shaders/fragment.glsl";
const loader = new THREE.TextureLoader();

const texture1 = loader.load(images.me);
const texture2 = loader.load(images.software);
const texture3 = loader.load(images.dhaka);

const lerp = (start, end, t) =>{
    return start * (1 - t) + end * t;
}

class Shaded {
  constructor() {
    this.constructor = document.querySelector(".landing");
    this.links = [...document.querySelectorAll(".shadedimg")];
    this.scene = new THREE.Scene();
    this.perspective = 1000;
    this.targetX = 0;
    this.targetY = 0;
    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0);
    this.texture = {
      uTexture: {
        value: texture1,
      },
      uAlpha: {
        value: 0.0,
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0),
      },
      transparent: true,
    };
    this.links.map((link, i) => {
      link.addEventListener("mouseenter", () => {
        switch (i) {
          case 0:
            this.uniform.uTexture.value = texture1;
            break;
          case 1:
            this.uniform.uTexture.value = texture2;
            break;
          case 2:
            this.uniform.uTexture.value = texture3;
            break;
        }
      });
      link.addEventListener("mouseleave", () => {
        this.uniform.uAlpha = lerp(this.uniform.uAlpha.value, 0.0, 0.1);
      });
    });
    this.checkHover();
    this.setupCamera();
    this.followMouseMove();
    this.createMesh();
  }
  get viewport() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let aspect = width / height;
    return width, height, pixelRatio, aspect;
  }
checkHover(){
    this.inner.addEventListener('mouseenter',()=>{
        this.hovered = true;
    })
    this.inner.addEventListener('mouseleave',()=>{
        this.hovered = false;
        this.uniform.uTexture = {
            value: texture1 
        }
    })
}
  setupCamera() {
    window.addEventListener('resize',this.onResize.bind(this))
    let fov =
      (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
      Math.PI;
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.viewport.aspect,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, this.perspective);
    //renderer
    this.renderer = new THREE.WebGL1Renderer({
          antialias: true,
          alpha:true,
        });
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
  }
  followMouseMove(){
    window.addEventListener('mousemove',(e)=>{
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });

  }
  createMesh() {
      this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
      this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.sizes.set(370, 470, 1);
      this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)
      this.mesh.position.set(this.offset.x, this.offset.y, 0)
      this.scene.add(this.mesh);
      
  }
  onResize(){
   this.camera.aspect = this.viewport.aspect
   this.camera.fov = (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
   Math.PI;
   this.renderer.setSize(this.viewport.width, this.viewport.height);
   this.camera.updateProjectionMatrix();
  }
}
new Shaded();
