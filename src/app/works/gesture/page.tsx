import * as motion from 'motion/react-client'
import { imagesGesture } from "@/db/data"

const Gesture = () => {
  return (
	<div className="w-[80%] flex ">
		{imagesGesture.map((image, indx)=>(
			<motion.div key={indx} 
				className='relative m-[1rem] overflow-hidden rounded-lg shadow-lg'
				whileHover={{ scale: 1.05 }}
			>
				<img src={image.src} alt={image.caption} className='w-full h-auto' />
				<motion.div
					whileHover={{ opacity: 1 }}
					className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
					<p className='text-lg'>{image.caption}</p>
				</motion.div>
			</motion.div>
		))}
	</div>
  )
}
export default Gesture