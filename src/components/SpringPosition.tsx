'use client'
import { motion, useMotionValue, useSpring } from "motion/react";
const SpringPosition = () => {
	const x = useSpring(0,{stiffness:300});
	const y = useSpring(0,{stiffness:300});
	const moveBox = () => {
		x.set(Math.random() * 300);
		y.set(Math.random() * 300);
	};

  return (
	<div>SpringPosition <br />
		<div className="relative">
			<motion.div
				style={{ x, y }}
				className="w-32 h-32 bg-blue-500 rounded"
				onClick={moveBox}
			>
				Click Me
			</motion.div>
		</div>
	</div>
  )
}
export default SpringPosition