'use client'

import { tapColors } from "@/db/data"
import { motion } from "motion/react"
import { useState } from "react"

const TapColor = () => {
	
    const [ colorIndex, setColorIndex] = useState(0)
	return (
	<div>TapColor <br />
		<motion.div 
		className={`w-32 h-32 ${tapColors[colorIndex]} rounded-lg flex items-center justify-center`}
		onTap={()=>setColorIndex(prev => (prev + 1) % tapColors.length )}
		>
			Tap Me !! 
		</motion.div>
	</div>
  )
}
export default TapColor