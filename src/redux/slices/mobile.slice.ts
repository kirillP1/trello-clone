import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface MobileState {
	mobileMenuActive: boolean
	isMobile: boolean
}

const initialState: MobileState = {
	mobileMenuActive: false,
	isMobile: false,
}

export const mobileSlice = createSlice({
	name: 'mobile',
	initialState,
	reducers: {
		setMobileMenuActive: (state, action: PayloadAction<boolean>) => {
			console.log('Mobile menu active', action.payload)
			state.mobileMenuActive = action.payload
		},
		setIsMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setMobileMenuActive, setIsMobile } = mobileSlice.actions

export default mobileSlice.reducer
