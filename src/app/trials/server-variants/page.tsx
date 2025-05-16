import * as motion from 'motion/react-client'

const ServerVariants = () => {
	const boxVariants = {
		initial: { scale: 1, rotate: 0, skew: 0 },
		hover: { scale: 1.2, rotate: 15, skew: '10deg', transitions: { duration: .3 } },
		click: { scale: .9, rotate: -15, transition: { duration: .3 } }
	}
  return (
	<div className='flex gap-5'>
		<div>
			  ServerVariants
			  <motion.div className="-w40, h-40 bg-blue-500 rounded-lg" variants={boxVariants}
				  initial='initial'
				  whileHover='hover'
				  whileTap='click'
			  >

			  </motion.div>
		</div>
		
	</div>
  )
}
export default ServerVariants