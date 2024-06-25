import { FunctionComponent, useEffect, useState } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { IBoard } from '../../../@types/IBoard'
import { fetchRandomImage } from '../../../helpers/Boards/fetchRandomImage/fetchRandomImage'

interface BoardImagesProps {
	register: UseFormRegister<IBoard>
	setValue: UseFormSetValue<IBoard>
}

export interface IImageResponse {
	id: string
	urls: { small: string; regular: string }
}

const BoardImages: FunctionComponent<BoardImagesProps> = ({
	register,
	setValue,
}) => {
	const [image, setImage] = useState<IImageResponse>()

	console.log('image', image)

	const fetchImage = async () => {
		try {
			console.log('fetchImage')
			const image = (await fetchRandomImage()) as IImageResponse

			setImage(image)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		if (!image) {
			fetchImage()
		}
	}, [])

	useEffect(() => {
		if (image) setValue('imageId', image.id)
	}, [image, setValue])

	return (
		<div>
			<div className='h-40 relative'>
				<div className='absolute inset-0 w-full h-full  bg-gray-400'></div>
				{image && (
					<img
						src={image.urls.small}
						alt='Random'
						className='absolute inset-0 w-full h-full object-cover'
					/>
				)}
			</div>
			<input className='hidden' {...register('imageId')} />
			<button type='button' onClick={fetchImage} className='py-1'>
				Get Another Image
			</button>
		</div>
	)
}

export default BoardImages
