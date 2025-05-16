'use client'
import { motion } from "motion/react"
import { useState } from "react"

const Variants = () => {
  
	const variants = {
		hidden: {opacity: 0, scale: .8},
		visible: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: .5 }

	}
	const cardVariants = { 
		front: {rotateY:0 },
		back: {rotateY:180 },

	}
	const [isVisible, setIsVisible] = useState(true)
	const [isFlipped, setIsFlipped] = useState(false)
	return (
	<div className="flex gap-5">
		<div>
			<motion.div variants={variants}
				initial='hidden'
				animate={isVisible ? 'visible' : 'hidden'}
				exit={'exit'}
				transition={{ duration: 1, }}
				className="box">

			</motion.div>
			<div onClick={()=>setIsVisible(!isVisible)}> CHnage value</div>
		</div>
		<div>
			<motion.div className="perspective-1000" onClick={()=>setIsFlipped(!isFlipped)} >
				<motion.div 
					variants={cardVariants} initial='front' 
					exit='back' 
					animate={isFlipped ? 'back' : 'front'}
					transition={{duration:0.6}}
					className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d">
					<motion.div  className="absolute inset-0 bg-blue-500 flex items-center justify-center text-white text-xl font-bold ">
						{isFlipped ? 'Back side' : 'Front side'}
					</motion.div>
					
				</motion.div>
			</motion.div>
		</div>
	</div>
  )
}
export default Variants