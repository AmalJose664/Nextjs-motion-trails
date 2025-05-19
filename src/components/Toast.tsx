'use client'

import { motion } from "motion/react"
import { useEffect, useState } from "react"

const Toast = () => {
	const [visible, setVisible] = useState(false)
	let timer : any
	const showToast = () => {
		setVisible(true)
		timer = setTimeout(() => setVisible(false), 3000)
		
	}
	useEffect(()=>{
		return ()=> clearTimeout(timer)
	},[])
	return (
	<div className="flex    flex-col items-center">
		<button className="mb-4 p-2 bg-blue-500 text-white rounded" onClick={showToast}>
			Show Notification
		</button>
		{visible && (
			<motion.div className="fixed top-4 right-4 p-4 bg-green-500 text-white"
				initial={{opacity:0, translateY: -20 }}
				exit={{opacity:0, translateY: -20 }}
				transition={{ duration: .5 }}
				animate={{ opacity:1, translateY: 0}}
				
			>
				Notification: Action Successfull !
			</motion.div>
		)}
	</div>
  )
}
export default Toast