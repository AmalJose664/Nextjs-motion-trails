'use client'
import {motion} from 'motion/react'
import { useState } from 'react'
const SkewRectangle = () => {
	const [isSkewed, setIsSkewed] = useState(true)
  return (
	<motion.div className='bg-yellow-500 w-40 h-40'
	  onClick={()=>setIsSkewed(!isSkewed)}
	  animate={{skewX: isSkewed ? 20 : 0}}
	  transition={{duration: .5}}
	 ></motion.div>
  )
}
export default SkewRectangle