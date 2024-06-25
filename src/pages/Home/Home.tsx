import { FunctionComponent, memo } from 'react'

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = memo(() => {
	return (
		<div className='flex items-center justify-center w-2/3 h-full m-auto py-8'>
			<div className='text-gray-700 text-center'>
				<h1 className='text-6xl font-bold mb-5'>
					<span className='text-blue-700'>Try it now</span> - free and
					risk-free!
				</h1>
				<p className='text-gray-400 font-semibold text-lg mb-5'>
					Enhanced project management system - Integration with popular tools-
					Flexibility in customizing the interface to suit your needsSimple and
					intuitive. Organize your work the way that suits you best. Don't put
					off till tomorrow, start today!
				</p>
				<p className='text-2xl font-semibold'>
					{'<='} Choose or{' '}
					<span className='text-blue-700'>create your project</span> for Trello
					boards
				</p>
			</div>
		</div>
	)
})

export default Home
