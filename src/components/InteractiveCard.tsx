import { staggeredList } from '@/db/data'
import * as motion from 'motion/react-client'
const InteractiveCard = () => {
  return (
	<div>InteractiveCard <br />
		<div className="grid grid-cols-2 gap-4 mt-[100rem]" >
		{staggeredList.map((item, indx) => (
			<motion.div 
			key={indx}
			initial={{ scale: .8}}
			whileInView={{ scale: 1}}
			whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }}
			transition={{ duration: .4}}
			className="bg-blue-500 p-6 text-white text-center rounded-lg"
			>
				<h3 className="text-2xl">Card {item}</h3>
			</motion.div>
		))}
		</div>
	</div>
  )
}
export default InteractiveCard