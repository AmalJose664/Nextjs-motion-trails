import * as motion from 'motion/react-client'
const BouncingBall = () => {
  return (
	<div>BouncingBall
		<motion.div className='w-16 h-16 bg-yellow-400 rounded-full'
		animate={{y: [0, -100, 0], }}
		transition={{ duration:1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut'}}
		>
			
		</motion.div>
	</div>
  )
}
export default BouncingBall