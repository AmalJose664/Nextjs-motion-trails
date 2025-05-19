import Link from "next/link"

const Transition = () => {
  return (
	<div>Transition Things <br />
		  <Link className='underline' href={'/practice/transition/toasts'}>Toast</Link> <br />
		  <Link className='underline' href={'/practice/transition/fade'}>Fade component </Link> <br />
		  <Link className='underline' href={'/practice/transition/modal'}>Modal component </Link> <br />
		  <Link className='underline' href={'/practice/transition/responsive-button'}>Responsive-button component </Link> <br />
		  <Link className='underline' href={'/practice/transition/sidebar'}>Sidebar component </Link> <br />
	</div>
  )
}
export default Transition