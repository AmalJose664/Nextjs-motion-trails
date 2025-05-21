import * as motion from 'motion/react-client'
const variants = {
	hidden: { opacity: 0},
	visible: { opacity: 1},
	
}
const FadeIn = () => {
	return (
	  <div>FadeIn
		<motion.div className="bg-blue-500 p-4 rounded shadow"
		variants={variants}
		initial='hidden'
		animate='visible'
		transition={{ duration: 0.5}}
		>
			Fade in Component
		</motion.div>
	  </div>
  )
}
export default FadeIn