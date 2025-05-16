'use client'
import {motion,  useMotionValue,  useSpring, useTransform } from 'motion/react'
import { ChangeEvent } from 'react'
const MotionValue = () => {
	const xValue = useSpring(1) // or useMotionValue
	const x = useMotionValue(0)
	const y = useMotionValue(0)

	const bgColor = useTransform(x, [-100, 100], ['#ff000', '#ff00ff'])


	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
		xValue.set(parseFloat(e.target.value))
	}
  return (
	<div>
		MotionValue
		  <motion.div className='box' style={{ scale: xValue }} drag dragConstraints={{top: -100, bottom: 200, left: -200, right:200}}>

		</motion.div>
		<div>
			<div className='mt-[6rem]'>
				<input type="range" min={.5} max={5} step={.01} defaultValue={1} onChange={onChangeHandler}/>
			</div>
		</div>
		use Transform example

		<div>
			<motion.div 
				  drag dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
				  style={ { x, y, backgroundColor:bgColor}}
			className='w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer'>
				<span className='text-white'>Drag me</span>
			</motion.div>
		</div>
	</div>
  )
}
export default MotionValue