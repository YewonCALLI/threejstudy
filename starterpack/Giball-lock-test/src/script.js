import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 10);
scene.add(pointLight);

/**
 * Axes Helper
 */

/**
 * Objects
 */
const group = new THREE.Group();

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial({
    wireframe: false,
  })
);
group.add(cube1);
const cylinder1 = new THREE.Mesh(
  new THREE.TorusGeometry(1.15, 0.01, 64, 100),
  new THREE.MeshBasicMaterial({
    color: "yellow",
  })
);
cylinder1.rotation.x = Math.PI / 2;

const cylinder2 = new THREE.Mesh(
  new THREE.TorusGeometry(1.1, 0.01, 64, 100),
  new THREE.MeshBasicMaterial({
    color: "red",
  })
);
cylinder2.rotation.y = Math.PI / 2;
const cylinder3 = new THREE.Mesh(
  new THREE.TorusGeometry(1.2, 0.01, 64, 100),
  new THREE.MeshBasicMaterial({
    color: "green",
  })
);
cylinder3.rotation.z = Math.PI / 2;
group.rotation.x = 0;
group.rotation.y = 0;
group.rotation.z = 0;
group.add(cylinder1, cylinder2, cylinder3);
scene.add(group);
console.log(cube1.rotation);

const cylinder11 = new THREE.Mesh(
  new THREE.TorusGeometry(1.3, 0.02, 64, 100),
  new THREE.MeshBasicMaterial({
    color: "red",
    transparent: true,
    opacity: 0.3,
  })
);
cylinder11.rotation.y = Math.PI / 2;

const cylinder22 = new THREE.Mesh(
  new THREE.TorusGeometry(1.4, 0.02, 64, 100),
  new THREE.MeshBasicMaterial({
    color: "green",
    transparent: true,
    opacity: 0.5,
    opacity: 0.3,
  })
);
cylinder22.rotation.z = Math.PI / 2;
const cylinder33 = new THREE.Mesh(
  new THREE.TorusGeometry(1.35, 0.02, 64, 100),
  new THREE.MeshBasicMaterial({
    color: "yellow",
    transparent: true,
    opacity: 0.3,
  })
);
cylinder33.rotation.x = Math.PI / 2;

scene.add(cylinder11, cylinder22, cylinder33);
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(2, 2, 2);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  //???????????? x???, ???????????? y???, ???????????? z???
  //????????? ????????? ?????? y??? ?????? ????????? ?????????
  //??????????????? ?????? ????????? ????????? ???????????? y??? ????????? ?????? z??? ???????????? ?????? ??????
  //??????????????? y??? ????????? ???????????? ??????????????? ????????? ???????????? y??? ???????????? ?????????
  //group.rotation.reorder("YXZ");

  //y????????? z?????? ????????? ?????? x??? ??????
  //group.rotation.x =Math.PI/2;
  //group.rotation.reorder("YXZ");
  group.rotation.x = elapsedTime;

  //y?????? ??????
  group.rotation.y =Math.PI/3;

  group.rotation.z = elapsedTime;

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
