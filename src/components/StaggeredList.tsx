import { staggeredList } from '@/db/data'
import * as motion from 'motion/react-client'
const stgrdVariants = { 
	hidden :{ opacity: 0},
	visible :{ opacity: 1},
}
const StaggeredList = () => {
	
  return (
	<div>StaggeredList <br />
		<motion.ul
			  variants={{ visible: { transition: { staggerChildren: .2 //delay is this
				}} }}
			  initial='hidden'
			  animate='visible'
		>
			{staggeredList.map((itm, index) => (
				<motion.li key={index} 
					className="mb-2 p-5 bg-yellow-300 text-black"
					variants={stgrdVariants}
				>
					{itm}
				</motion.li>
			))}
		</motion.ul>
	</div>
  )
}
export default StaggeredList