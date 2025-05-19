'use client'
 import {AnimatePresence, motion} from 'motion/react'
import { useState } from 'react'
const FadeComponent = () => {
	const [visible, setVisible ] = useState(false)
  return (
	<div className='flex flex-col items-center'>
		<button className='mb-4 p-6 bg-blue-500 text-white rounded' 
		 onClick={()=> setVisible(!visible)}
		 >
			Toggle Fade
		</button>
		  <AnimatePresence>
			  {visible && (<motion.div className='p-2 text-black bg-gray-200 rounded' initial={{ opacity: 0 }}
				  animate={{ opacity: 1 }}
				  exit={{ opacity: 0 }}
				  transition={{ duration: .5 }}
			  >Hello I'm fading component</motion.div>)}
		  </AnimatePresence>
	</div>
  )
}
export default FadeComponent