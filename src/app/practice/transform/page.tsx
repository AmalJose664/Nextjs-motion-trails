import Link from "next/link"

const Transform = () => {
  return (
	<div>Transform Things <br />
		  <Link className='underline' href={'/practice/transform/bounding-cirlce'}>Bounding cirlce </Link> <br />
		  <Link className='underline' href={'/practice/transform/box'}>Box </Link> <br />
		  <Link className='underline' href={'/practice/transform/complex-animation'}>Complex-animation </Link> <br />
		  <Link className='underline' href={'/practice/transform/spining-icon'}>Spining Icon</Link> <br />
		  <Link className='underline' href={'/practice/transform/skew'}>Skew Rectangle </Link> <br />
	</div>
  )
}
export default Transform