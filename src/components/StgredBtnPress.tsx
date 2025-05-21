import { staggeredList } from '@/db/data'
import * as motion from 'motion/react-client'
const StgredBtnPress = () => {
  return (
	<div>Stagerred Button Press <br />
		<motion.div whileHover={{transition: {staggerChildren: .2}}}
			className="flex space-x-4"
		>
			  {staggeredList.map((_, index) => (
				  <motion.button
				  	key={index}
					 className="p-2 bg-blue-500 text-white rounded"
					 whileHover={{scale: 1.1}}
				  >{'Button ' + (index + 1)} </motion.button>
			  ))}
		</motion.div>
	</div>
  )
}
export default StgredBtnPress