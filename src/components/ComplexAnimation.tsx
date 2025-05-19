import * as motion from 'motion/react-client'
const ComplexAnimation = () => {
  return (
	<motion.div animate={{ x: 200, rotate: 360, scale: 1.5}}
		  transition={{ duration: 2 }} className="bg-purple-500 w-20 h-20"
	></motion.div>
  )
}
export default ComplexAnimation