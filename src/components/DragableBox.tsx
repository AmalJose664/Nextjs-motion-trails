'use client'

import { motion, useMotionValue } from "motion/react"

const DragableBox = () => {
	const x = useMotionValue(0)
	const y = useMotionValue(0)


  return (
	<div>DragableBox
		<br />
		<div className=""	>
			<motion.div drag style={{ x, y }} className="h-32 w-32 bg-blue-500 rounded">

			</motion.div>
			<p className="text-white">
				Position : ({x.get().toFixed(2)}, ({y.get().toFixed(2)}))
			</p>
		</div>
	</div>
  )
}
export default DragableBox