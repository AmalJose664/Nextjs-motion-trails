import Link from "next/link"

const GesturesPage = () => {
	return (
		<div>Gesture Page Things <br />
			<Link className='underline' href={'/practice/gestures/dragbox'}>Draging box</Link> <br />
			<Link className='underline' href={'/practice/gestures/image-glry'}>Image Gallayr</Link> <br />
			<Link className='underline' href={'/practice/gestures/longpress'}>Long press to work</Link> <br />
			<Link className='underline' href={'/practice/gestures/rotate'}>Roate item Drag</Link> <br />
			<Link className='underline' href={'/practice/gestures/swipe'}>Swipe Card</Link> <br />
			<Link className='underline' href={'/practice/gestures/tap-color'}>Tap color change</Link> <br />


		</div>
	)
}
export default GesturesPage