import * as motion from 'motion/react-client'
const WaveEffet = () => {
	const boxes = Array.from({length: 15})
  return (
	<div>Wave Effect 
		<div className="flex space-x-2">
			{boxes.map((box, index)=> (
				<motion.div
				key={index}
				className='w-16 h-16 bg-purple-500 rounded-lg'
				animate={{ y: [0, -60, 0]}}
				transition={{ duration: .6, repeat: Infinity, repeatType: 'reverse', delay: index * .1}}
				>

				</motion.div>
			))}
		</div>
	</div>
  )
}
export default WaveEffet