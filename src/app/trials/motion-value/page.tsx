'use client'
import {motion, useMotionValue, useMotionValueEvent } from 'motion/react'
const MotionValue = () => {
	const xValue = useMotionValue(60) 
	useMotionValueEvent(xValue,'animationStart', ()=>{
		console.log('animation started on x');
		
	} )
	useMotionValueEvent(xValue, 'change', (latest) => {
		console.log('change', latest);

	})
  return (
	<div>
		MotionValue
		  <motion.div className='box' style={{ x: xValue }} drag dragConstraints={{top: -100, bottom: 200, left: -200, right:200}}>

		</motion.div>

	</div>
  )
}
export default MotionValue