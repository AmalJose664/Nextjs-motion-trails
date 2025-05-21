'use client'

import { motion } from "motion/react"
import { useState } from "react"

const RotateDrag = () => {
	const [rotation, setRotation] = useState(0)
	const handleDrag = (_:any, info:any) => {
		const newRoation = rotation + info.offset.x
		setRotation(newRoation / 2)
	}
	return (
	<div>RotateDrag <br />
		<motion.div className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center" drag onDrag={handleDrag} style={{ rotate: rotation}}>
			Drag Me !! 
		</motion.div>
	</div>
  )
}
export default RotateDrag