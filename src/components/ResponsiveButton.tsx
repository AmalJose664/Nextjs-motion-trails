import * as motion from 'motion/react-client'
const ResponsiveButton = () => {
  return (
	  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} className="p-2 bg-blue-500 text-white rounded ">
		Click Me
	</motion.div>
  )
}
export default ResponsiveButton