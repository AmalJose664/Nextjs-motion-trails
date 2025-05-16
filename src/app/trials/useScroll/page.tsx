'use client'
import {motion, useScroll, useTransform} from 'motion/react'
const UseScroll = () => {
  const {scrollY} = useScroll()
  const scale = useTransform(scrollY, [0, 300],[ 1, 1.5])
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

const scale2 = useTransform(scrollY , [0, 60], [1, .5])
const borderRadius = useTransform(scrollY , [0, 1000], ['0%', '50%'])

	return (
	<div>
		<div className='h-screen flex  items-center justify-center'>
			<motion.div style={{ scale, opacity }} className='bg-blue-500 w-32 h-32 rounded-lg shadow-lg'>

			</motion.div>
			<div className='h-[150vh] w-full'>

			</div>

		</div>
		<div className='relative -h-[150vh] overflow-hidden'>
			<motion.img src={'https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
			alt="Image here"
			className='absolute inset-0 w-full object-cover'
			style={{
				scale:scale2,
				borderRadius
			}}
			/>
			<div className='sticky top-0 h-screen flex items-center justify-center'>
				<h1 className='text-white text-4xl'>Scroll To Animate</h1>
			</div>
		</div>

	</div>
  )
}
export default UseScroll