import axios from 'axios'

export const fetchImageById = async (
	imageId: string
): Promise<string | undefined> => {
	try {
		const response = await axios.get(
			'https://api.unsplash.com/photos/' +
				imageId +
				'?client_id=6LuDJkfli8IQ4C_L5eEn0TV5SCtc__5dw7OoynclTZY'
		)

		return response.data.urls.full
	} catch (error) {
		console.error('Error fetching image by id:', error)
	}
}
