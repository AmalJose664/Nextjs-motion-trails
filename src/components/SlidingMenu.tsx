'use client'
import {motion }from 'motion/react'
import { useState } from 'react'
const variants = {
	closed: {x: '-100%'},
	open: { x: 0}
}
const SlidingMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
  return (
	<div>SlidingMenu <br />
		<button onClick={()=>setIsOpen(!isOpen)}  className="p-2 bg-gray-500 text-white">
			Toggle Menu
		</button>
		<motion.div 
			  className="fixed top-0 left-0 w-64 h-full bg-blue-600"
			  variants={variants}
			  initial='closed'
			  animate={ isOpen ? 'open' : 'closed'}
			  transition={{ duration: .4}}
		>
			<ul className="p-4 text-white">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</motion.div>
	</div>
  )
}
export default SlidingMenu