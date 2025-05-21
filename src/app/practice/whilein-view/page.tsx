import Link from "next/link"

const WhileInView = () => {
	return (
		<div>Variants Page Things <br />
			<Link className='underline' href={'/practice/whilein-view/card'}>Card Flip</Link> <br />
			<Link className='underline' href={'/practice/whilein-view/interactive-card'}>Interactive card</Link> <br />
			<Link className='underline' href={'/practice/whilein-view/stagger-list'}>Stagger list </Link> <br />
			<Link className='underline' href={'/practice/whilein-view/timeline'}>Time line animation</Link> <br />


		</div>
	)
}
export default WhileInView