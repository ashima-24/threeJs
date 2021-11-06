console.log(THREE);


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
scene.add(camera)


// Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGlRenderer({

canvas: canvas 
})

renderer.setSize(sizes.width, sizes.height)
