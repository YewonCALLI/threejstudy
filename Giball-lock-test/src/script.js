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

//scene.add(cylinder11, cylinder22, cylinder33);
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

  //빨간색이 x축, 노란색이 y축, 초록색이 z축
  //짐벌락 방지를 위해 y축 우선 모드로 바꿔줌
  //주석처리시 현재 도형은 우리가 생각하는 y축 회전이 아닌 z축 회전으로 돌고 있음
  //주석해제시 y축 회전이 우선으로 들어가면서 우리가 생각하는 y축 회전으로 돌아감
  //group.rotation.reorder("YXZ");

  //y축이랑 z축을 겹치게 하는 x축 회전
  //group.rotation.x =Math.PI/2;
  //group.rotation.x = elapsedTime;

  //y축을 회전
  //group.rotation.y =elapsedTime;

  //group.rotation.z = elapsedTime;

  group.rotation.reorder("YXZ");

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
