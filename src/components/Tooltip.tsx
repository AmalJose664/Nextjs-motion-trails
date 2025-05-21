'use client'

import { motion } from "motion/react"
import { useState } from "react"

const variants = {
	hidden: { opacity: 0, y: -10},
	visible: { opacity: 1, y: 0}
}
const Tooltip = () => {
	const [visible, setVisble] = useState(false)
  return (
	<div>Tooltip 
		<div  className="relative inline-block m-10">
			<button 
			onMouseEnter={()=>setVisble(true)}
			onMouseLeave={()=>setVisble(false)}
			className="p-2 bg-blue-500 text-white"
			>Hover Over Me</button>
			{visible && (
				<motion.div className="absolute bg-gray-700 text-white p-2 rounded"
				variants={variants}
				initial='hidden'
				animate='visible'
				exit='hidden'
				transition={{  duration: .2}}
				>
					  Tooltip content
				</motion.div>
			)}
		</div>
	</div>
  )
}
export default Tooltip