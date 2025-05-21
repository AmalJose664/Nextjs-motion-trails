'use client'

import { gestureImages } from "@/db/data"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const GestureImageGallary = () => {
	const [ currentIndex, setCurrentIndex] = useState(0)
	const handleSwipe = (_:any, info:any) => {
		if(info.offset.y > 100){
			setCurrentIndex(prev => (prev - 1) % gestureImages.length)
		}else if(info.offset.y < -100) {
			setCurrentIndex(prev => (prev + 1) % gestureImages.length)
		}
	}
  return (
	<div>Gesture Image Gallary <br />
	swipe up or down <br />
		<div className="relative w-72 h-72 overflow-hidden">
			<AnimatePresence> 
				<motion.img
				drag='y'
				key={currentIndex}
				src={gestureImages[currentIndex]} alt={"Slide "+ currentIndex}
				dragConstraints={{ top: 0, bottom : 0}}
				onDragEnd={handleSwipe}
				initial={{ opacity: 0}}
				animate={{ opacity: 1}}
				exit={{ opacity: 0}}
				className="w-full h-full rounded"
				>

				</motion.img>
			</AnimatePresence>

		</div>
	</div>
  )
}
export default GestureImageGallary