import Link from "next/link"

const Works = () => {
  return (
	<div>Works

		incoming <br />
		<Link className='underline' href={'/works/gesture'}>Gesture image gallary </Link> <br />
		<Link className='underline' href={'/works/stagger'}>Stagger image gallary </Link> <br />
	</div>
  )
}
export default Works