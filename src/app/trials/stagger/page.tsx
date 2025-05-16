import * as  motion from 'motion/react-client'

const parentVariants = {
	hidden: {opacity: 0, },
	visible: {opacity: 1, transition: {staggerChildren: .3 }},
}

const childVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};
const Stagger = () => {
  return (
	<div>Stagger
		<motion.div variants={parentVariants} initial='hidden' animate='visible' className='flex space-x-4'>
			{[...Array(5)].map((_, index) => (
				<motion.div key={index} className='box' variants={childVariants}>

				</motion.div>
		))}
		</motion.div>
	</div>
  )
}
export default Stagger