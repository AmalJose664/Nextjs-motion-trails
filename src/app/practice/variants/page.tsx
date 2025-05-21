import Link from "next/link"

const VariantsPage = () => {
  return (
	<div>Variants Page Things <br />
		<Link className='underline' href={'/practice/variants/fade-in'}>Fade In</Link> <br />
		<Link className='underline' href={'/practice/variants/menu'}>Sliding Menu</Link> <br />
		<Link className='underline' href={'/practice/variants/tooltip'}>Tool tip</Link> <br />
		<Link className='underline' href={'/practice/variants/switch'}>Toggle Switch</Link> <br />
		<Link className='underline' href={'/practice/variants/dynamic'}>Dynamic list</Link> <br />
		

	</div>
  )
}
export default VariantsPage