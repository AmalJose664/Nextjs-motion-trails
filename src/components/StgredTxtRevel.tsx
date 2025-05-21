import * as motion from 'motion/react-client'
const Text = "Hello World"
const stgrdVariants = {
	hidden: { opacity: 0},
	visible: { opacity: 1}
}
const StgredTxtRevel = () => {
  return (
	<div>StgredTxtRevel <br />
		<motion.h1
			  className="text-4xl font-bold text-white"
			  initial='hidden'
			  animate='visible'
			  variants={{ visible : { transition: { staggerChildren: .3}}}}
		>
			{Text.split('').map((letter, index) => (
				<motion.span
				key={index}
				variants={stgrdVariants}
				>
					{letter}
				</motion.span>
			))}	 
		</motion.h1>
	</div>
  )
}
export default StgredTxtRevel