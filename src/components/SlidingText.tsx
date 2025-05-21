import * as motion from 'motion/react-client'
const SlidingText = () => {
  return (
	<div>SlidingText
		<motion.h1 className='text-2xl font-bold text-white' 
		initial={{ x: '-100%'}}
		animate={{ x: 0}}
		transition={{duration: 1}}
		>
			Slide In Text
		</motion.h1>
	</div>
  )
}
export default SlidingText