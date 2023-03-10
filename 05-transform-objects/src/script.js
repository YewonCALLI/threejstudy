import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

mesh.scale.set(1.2,0.2,2)
mesh.rotation.set(1,Math.PI/2,6)
mesh.rotation.reorder('YXZ')
mesh.rotation.set(0.2,0,0)

// mesh.rotation.x = 1
// mesh.rotation.y = Math.PI/2
// mesh.rotation.z = 9

scene.add(mesh)

// const group = new THREE.Group()
// scene.add(group)

// group.position.y=-1
// group.scale.y=2
// group.rotation.y = 1

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color:0xff0000})
// )

// group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color:0x00ff00})
// )
// cube2.position.x=-2
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color:0x0000ff})
// )
// cube3.position.x=2
// group.add(cube3)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z=3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)