'use client'

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const variants = {
	enter: { opacity: 1, y:0},
	exit: { opacity: 0, y: -20}
}
const DynamicList = () => {
	const [items, setItems] = useState<string[]>([])
	const addItem = () => {
		const newItem = 'item ' + items.length+1
		setItems( (prev) => [...prev, newItem])
	}
	const removeItem = (index: number)=> {
		setItems(prev => prev.filter((_, i) => i !== index))
	}
  return (
	<div>DynamicList
		 <div>
			 <button onClick={addItem} className="mb-4 p-2 bg-blue-500 text-white">Add Items</button>
		 </div>
		 <AnimatePresence>
			{items.map((i, index)=> (
				<motion.div 
				key={index}
				className="p-2 bg-gray-800 mb-2 rounded"
				variants={variants}
				initial='exit'
				animate='enter'
				transition={{ duration: .3}}
				onClick={()=> removeItem(index)}
				>
					{i}
				</motion.div>
			))}
		 </AnimatePresence>
	</div>
  )
}
export default DynamicList