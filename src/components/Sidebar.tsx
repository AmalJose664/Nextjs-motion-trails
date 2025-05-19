'use client'
import {motion} from 'motion/react'
import { useState } from 'react'
const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)
  return (
	<div className='flex'>
		<button
			className="mb-4 p-2 bg-blue-500 text-white rounded"
			onClick={() => setIsOpen(!isOpen)}
		>
			Toggle Sidebar
		</button>
		<motion.div className={`fixed left-0 top-0 h-full bg-blue-500 text-white p-4 ${isOpen ? '' : '-translate-x-full'}`}
			initial={{ x: "-100%"}}
			animate={{ x: isOpen ? '0%' : '-100%'}}
			transition={{duration: .5}}
			exit={{ x: '-100%'}}
		>	
			<h2 className='text-lg font-bold'>SideBar</h2>
			<p>My Personal Content</p>
		</motion.div>
	</div>
  )
}
export default Sidebar