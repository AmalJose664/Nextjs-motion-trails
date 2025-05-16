'use client'
1
import { galleryImages } from "@/db/data"
import { motion } from "motion/react"
import { useState } from "react"

const parentVariants = {
	hidden: {opacity: 0},
	visible: { opacity: 1, transition: { staggerChildren: .3, staggerDirection: 1, } }
} 
const childVariants = {
	hidden : {opacity: 0, y: 20},
	visible: { opacity:1, y:0 }
}

const StaggerImages = () => {
	const [showImages, setShowImages] = useState(false)
  return (
	<div>Stagger Images
		<div>
			<button onClick={()=>setShowImages(!showImages)} className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold">
				{showImages ? 'Hide images' : 'Show images'}
			</button>
			<motion.div variants={parentVariants} initial='hidden' animate={ showImages ? 'visible' : 'hidden'} className="flex">
				{galleryImages.map((image,index)=> (
					<motion.img variants={childVariants}  
					src={image} key={index} alt={"Galary image " + index + 1} className="ml-[1.4rem] w-[200px] rounded" />
				))}
			</motion.div>
		</div>
	</div>
  )
}
export default StaggerImages