import * as motion  from "motion/react-client"

const Genstres = () => {
	
	return (
	<div>Gestures
		<div className="flex gap-10"> 
			<motion.div className="box"
				whileHover={{ scale: 1.2, skewX: 10 }}
				whileTap={{ scale: 1.2, rotateY:60, backgroundColor:'red' }}
				drag
				whileDrag={{ scale: 1.2, rotateX: 60, backgroundColor: 'violet' }}
				transition={{type:'spring', stiffness: 300}}
				dragConstraints={{top:-50, bottom: 100, left:-200, right:300}}
			></motion.div>
			<AnimatedCard/>
		</div>
	</div>
  )
}
export default Genstres

function AnimatedCard(){

	return (
		<motion.div 
		initial={{scale:1 , rotate: 0}}
		whileHover={{scale: 1.05, rotate: 3}}
		whileTap={{scale:0.95 }}
		drag
		dragConstraints={{ top: -50, bottom: 100, left: -200, right: 300 }}
		transition={{ type:'spring', stiffness: 300}}
		dragElastic={ .4}
		className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" >
			<img
				className="w-full h-48 object-cover"
				src="https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Card Image"
			/>
			<div className="p-6">
				<h2 className="text-xl font-semibold mb-2" >Dynamic Card Title</h2>
				<p className="text-gray-700 mb-4">
					This is my simple and amazing card build with amazing animation library (motion.dev)
				</p>
				<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
				>Learn More</button>
			</div>
		</motion.div>
	)
}