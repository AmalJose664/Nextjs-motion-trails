import { staggeredList } from '@/db/data'
import * as motion from 'motion/react-client'
const TimeLineAnimation = () => {
	const itemVariants = {
		hidden: {opacity: 0, scale: .5, rotate: 180},
		visible: {opacity: 1, scale: 1, rotate: 0}
	}
  return (
	<div>TimeLineAnimation <br />
		<motion.div className="flex items-center my-[100rem]"
		initial='hidden' whileInView='visible' transition={{ staggerChildren: .4}}
		>
			{staggeredList.map((item, indx)=> (
				<motion.div
				key={indx}
				variants={itemVariants}
					className="bg-purple-500 ml-[2rem] p-4 text-white
           			my-2 rounded-lg"
				
				>
					{item}
				</motion.div>
			))}
		</motion.div>
	</div>
  )
}
export default TimeLineAnimation