import { staggeredList } from '@/db/data'
import * as motion from 'motion/react-client'
const StaggerListView = () => {
	const listVariants = {
		hidden: {opacity: 0},
		visible: {opacity: 1}
	}
  return (
	<div>StaggerList View <br />
		<motion.ul className="flex flex-col items-center mt-[100rem]"
			initial="hidden"
			whileInView={'visible'}
			variants={listVariants}
			transition={{ staggerChildren: .3}}
		>
			{staggeredList.map((item, index)=> (
				<motion.li 
				key={index}
					className="bg-blue-500 p-4 text-white my-2 rounded-lg"
					initial={{ opacity: 0, y: 20}}
					whileInView={{ opacity: 1, y: 0}}
					transition={{duration: .5}}
				>
					{item}
				</motion.li>
			))}
		</motion.ul>
	</div>
  )
}
export default StaggerListView