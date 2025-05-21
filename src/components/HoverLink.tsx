'use client'

import { motion, useMotionValue } from "motion/react"
const HoverLink = () => {
	const scale = useMotionValue(1)
  return (
	<div>HoverLink <br />
		<motion.button onHoverStart={()=> scale.set(1.1)} onHoverEnd={()=>scale.set(1)}
				style={{scale}}
				className="p-4 bg-blue-500 text-white rounded"
			>
			Hover Me !! 
		</motion.button>
	</div>
  )
}
export default HoverLink