import { staggeredList } from '@/db/data'
import * as motion from 'motion/react-client'
const stgrdVariants = {
	hidden : {opacity: 0},
	visible: {opacity: 1}
}
const StagredGridLayout = () => {
  return (
	<div>StagredGridLayout <br />
		<motion.div 
			  className="grid grid-cols-3 gap-4"
			  initial="hidden"
			  animate="visible"
			  variants={{ visible: {transition: { staggerChildren: .3}}}}
		>
			{staggeredList.map((item, index) => (
				<motion.div
				key={index}
				variants={stgrdVariants}
				 className="p-4 bg-gray-200 rounded text-black"
				>
					{item}
				</motion.div>
			))}
		</motion.div>
	</div>
  )
}
export default StagredGridLayout