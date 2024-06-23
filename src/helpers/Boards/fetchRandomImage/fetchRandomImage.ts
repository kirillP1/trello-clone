import axios from 'axios'
import { IImageResponse } from '../../../Components/buisness/BoardsImages/BoardsImages'

export const fetchRandomImage = async (): Promise<
	IImageResponse | undefined
> => {
	try {
		const response = await axios.get(
			'https://api.unsplash.com/photos/random?client_id=6LuDJkfli8IQ4C_L5eEn0TV5SCtc__5dw7OoynclTZY'
		)
		console.log('response.data', response.data)
		//const imageBlob = URL.createObjectURL(response.data)
		return response.data
	} catch (error) {
		console.error('Error fetching random image:', error)
	}
}
