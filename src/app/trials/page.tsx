import Link from "next/link"

const TrialsPage = () => {
  return (
	<div>Trials Page
		visit
		<br />
		<Link className='underline' href={'/trials/variants'}> Variants</Link> <br />
		<Link className='underline' href={'/trials/server-variants'}>Server Variants</Link> <br />
		<Link className='underline' href={'/trials/gesture'}> Gestures</Link> <br />
		<Link className='underline' href={'/trials/stagger'}> Stagger</Link> <br />
		<Link className='underline' href={'/trials/motion-value'}> Motion value </Link> <br />
		<Link className='underline' href={'/trials/scroll'}> Scroll aniamtion </Link> <br />
		<Link className='underline' href={'/trials/useScroll'}> Scroll aniamtion Use scroll </Link> <br />
	</div>
  )
}
export default TrialsPage