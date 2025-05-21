import * as motion from 'motion/react-client'

const DragBox = () => {
  return (
	<div>DragBox <br />
		  <motion.div dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
			  className="w-32 h-32 bg-green-500 rounded-lg shadow-lg" drag>
			Drag Me !
		</motion.div>
	</div>
  )
}
export default DragBox