import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()


//Object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : 0xff0000})
const box = new THREE.Mesh(geometry,material)

scene.add(box)

//Sizes
const sizes={
    width:800,
    height:600
}

//Camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z=2

scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)

const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)