'use client'

import { motion } from "motion/react"
import { useState } from "react"
const variants ={ 
	off : {x: 0},
	on : {x: 70}
}
const ToggleSwitch = () => {
  
	const [isOn, setIsOn] = useState(false)
	return (
	<div>ToggleSwitch <br />
		<div className="relative inline-block w-36 h-16">
			<div className={`w-full h-full rounded-full bg-gray-300 cursor-pointer ${isOn ? "bg-green-500" : ""
					}`}
					onClick={() => setIsOn(!isOn)}
					>

			</div>
			<motion.div className="absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow"
			variants={variants}
			initial='off'
			animate= {isOn ? 'on' : 'off'}
			transition={{type:'spring', stiffness: 300}}
			>

			</motion.div>
		</div>
	</div>
  )
}
export default ToggleSwitch