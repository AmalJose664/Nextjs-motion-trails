import * as motion from 'motion/react-client'
import Link from 'next/link'

const Home = () => {
	
  return (
	<div>
		<motion.div 
		initial={{ x: 0, y: 100 }} 
		animate={{x:0, y:-100,
			borderRadius:['20%', '1%', "40%", "50%", ],
			backgroundColor: [
				"#FF5733", // Orange-red
				"#33C1FF", // Sky blue
				"#28A745", // Green
				"#FFC300", // Yellow
				"#6F42C1", // Purple
				"#FF33A1", // Pink
				"#1D1D1D", // Dark gray
				"#17A2B8", // Teal
				"#FF6F00", // Deep orange
				"#007BFF"  // Blue
			]
		}} 
		transition={{delay:.7, ease:'anticipate', duration:6}} 
		className="box">
			
		</motion.div>
		<div className='flex space-x-2'>
			{[...Array(3)].map((_, index)=>(
				<motion.div key={index} className='w-8 h-8 bg-teal-500 rounded-full'
				 animate={{ y: [0,-15,0 ]}}
				 transition={{duration:.6, ease: 'easeInOut', repeat: Infinity, delay: index * .2}}
				></motion.div>
			))}
		</div>
		<div className='flex  flex-col '>
			click here to go to<Link className='underline' href={'/trials/'}> Trials</Link> <br />
		   click here to go to<Link className='underline' href={'/works/'}> Works</Link> <br />
		   click here to go to<Link className='underline' href={'/practice/'}> Practice</Link> <br />
		</div>
	</div>
  )
}
export default Home