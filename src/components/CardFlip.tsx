import * as motion  from "motion/react-client"

const CardFlip = () => {
  return (
	<div>CardFlip <br />
		<motion.div className="perspective-1000 w-64 h-64 mt-[100rem]">
			<motion.div  className="relative w-full h-full"
			initial={{ rotateY: 0 }}
			whileInView={{ rotateY: 180}}
			style={{ transformStyle: 'preserve-3d'}}
			transition={{ duration: .5}}
			>
				  <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg">
					  Front
				  </div>
				  <div
					  className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-lg"
					  style={{ transform: "rotateY(180deg)" }}
				  >
					  Back
				  </div>
			</motion.div>
		</motion.div>
	</div>
  )
}
export default CardFlip