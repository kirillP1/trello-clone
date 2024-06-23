import { FunctionComponent } from 'react'

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='text-gray-700'>
				<p className='text-2xl font-semibold'>
					{'<='} Choose or create your project for Trello boards
				</p>
			</div>
		</div>
	)
}

export default Home
