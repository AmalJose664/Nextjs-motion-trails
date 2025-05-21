import { gestureImages } from '@/db/data'
import * as motion from 'motion/react-client'
const stgrVariants = {
	hidden: { opacity: 0},
	visible: { opacity: 1}
}
const Staggered = () => {
  return (
	<div>Staggered <br />
		<motion.div  className="flex"
      	initial="hidden"
      	animate="visible" 
		variants={{ visible: { transition: {staggerChildren: .4 } }}}
		>
			{gestureImages.map((img, index) => (
				<motion.img key={index} src={img} alt={"Image " + index} variants={stgrVariants} className="w-[20rem] h-auto ml-[2rem] rounded " /> 
			))}
		</motion.div>
	</div>
  )
}
export default Staggered