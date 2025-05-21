'use client'

import { motion } from "motion/react"
import { useState } from "react"

const LongPressSizeChange = () => {
  
	const [isLarge, setIsLarge] = useState(false)
	const handleLongPressStart = () =>{ 
		setIsLarge(true)
	}
	const handleLongPressEnd = () => {
		setIsLarge(false)
	}
	return (
	<div>LongPressSizeChange
		<br />
		<motion.div 
			className={`w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center transition-all
         				duration-300 cursor-pointer ${isLarge ? "w-48 h-48" : ""}`}
			onTapStart={handleLongPressStart}
			onTapCancel={handleLongPressEnd}
			onTap={handleLongPressEnd}
		>
			Long Press Me !
		</motion.div>
	</div>
  )
}
export default LongPressSizeChange