import * as motion from 'motion/react-client'
const Box = () => {
  return (
	<motion.div initial={{x: -100}} animate={{ x: 100}} transition={{duration: 2,}} className='bg-blue-500 w-20 h-20'>  </motion.div>
  )
}
export default Box