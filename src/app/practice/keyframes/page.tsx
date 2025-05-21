import Link from "next/link"

const Keyframes = () => {
  return (
	<div>Keyframes <br />
		  <Link className='underline' href={'/practice/keyframes/animated-background'}>Animated Background</Link> <br />
		  <Link className='underline' href={'/practice/keyframes/ball'}>Bouncing  Ball</Link> <br />
		  <Link className='underline' href={'/practice/keyframes/color-change'}>Color Change</Link> <br />
		  <Link className='underline' href={'/practice/keyframes/pulse'}>Pulsating effect</Link> <br />
		  <Link className='underline' href={'/practice/keyframes/wave'}>Wave Effect </Link> <br />

		  <Link className='underline' href={'/practice/keyframes/sliding'}>Sliding Text Effect </Link> <br />
		  <Link className='underline' href={'/practice/keyframes/zigzag'}>Zig Zag Effect </Link> <br />
	</div>
  )
}
export default Keyframes