import Link from "next/link"

const MotionValue = () => {
	return (
		<div>Keyframes <br />
			<Link className='underline' href={'/practice/motion-value/drag-box'}>Draggable Box</Link> <br />
			<Link className='underline' href={'/practice/motion-value/dynamic-rotate'}>Dynamic Rotate</Link> <br />
			<Link className='underline' href={'/practice/motion-value/hover-link'}>Hover scaled Link</Link> <br />
			<Link className='underline' href={'/practice/motion-value/spring-anime'}>Sping Animation</Link> <br />
		</div>
	)
}
export default MotionValue