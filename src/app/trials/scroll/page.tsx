import * as motion from 'motion/react-client'
const boxes = Array.from({length:6}, (_,index)=> index +1)
const ScrollAnime = () => {
  return (
	<div className='pb-[10rem] pt-[10rem]'>ScrollAnime
		<div className="h-[200vh] w-full flex justify-center items-center mt-[100rem]"> 
			<motion.div initial={{scale: .5, opacity: 0}} 
				whileInView={ { scale:1.1, opacity:1, y:-200}} 
				transition={{duration: 1}}
				className="bg-white rounded-lg p-6 shadow-lg text-center">
				<h2 className="text-2xl font-bold mb-2 text-gray-900">Amazing Cards</h2>
				<p className="text-gray-600">This card Animates into View</p>
			</motion.div>
		</div>
		Boxes
		<div className=''>
			<h1 className='text-4xl font-bold mb-10'>Scroll to Animate</h1>
			<div className='space-y-6'>
				{boxes.map((box,index)=>(
					<motion.div key={index}
					initial={{opacity:0, scale: .5}}
					whileInView={{opacity:1, scale:1}}
					className='w-64 h-64 bg-blue-500 flex items-center justify-center text-white rounded-lg shadow-lg'
					>
						Box {box}
					</motion.div>
				))}
			</div>
		</div>


	</div>
  )
}
export default ScrollAnime