'use client'

import { motion, useMotionValue } from "motion/react"
const DynamicRotation = () => {
	const roateBox =() =>{
		rotation.set(rotation.get() + 45)
	}
	const rotation = useMotionValue(0)
  return (
	<div>DynamicRotation <br />
		<motion.div className="w-32 h-32 bg-blue-500 rounded" style={{rotate: rotation}} onClick={roateBox}>
			clicl me!
		</motion.div>
	</div>
  )
}
export default DynamicRotation