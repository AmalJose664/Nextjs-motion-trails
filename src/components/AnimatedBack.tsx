import * as motion from 'motion/react-client'
const AnimatedBack = () => {
  return (
	<div>AnimatedBack ground
		<motion.div className='w-screen h-screen '
			  animate={{ backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"], }}
			  transition={{duration: 5, ease: 'linear' ,repeat: Infinity}}
		>

		</motion.div>
	</div>
  )
}
export default AnimatedBack