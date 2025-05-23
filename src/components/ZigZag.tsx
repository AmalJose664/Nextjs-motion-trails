import * as motion from 'motion/react-client'
const ZigZag = () => {
  return (
	<div>Zig Zag
		<motion.div className='w-16 h-16 bg-green-500'
		animate={{ x: [0, 50, 0, -50, 0], y: [0, -50, 0, 50 , 0]}}
		transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut'}}
		>

		</motion.div>
	</div>
  )
}
export default ZigZag