//console.log(THREE);


const scene = new THREE.Scene()


// Red cube Mesh -> made of geometry and maerial

const geometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({color: '#ff0000'})

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const sizes = 
{
	width: 800,
	height: 600

}
//camera

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z =  3
//camera.position.y =  3
//camera.position.x =  3


scene.add(camera)


// Renderer
const canvas = document.querySelector('canvas.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)