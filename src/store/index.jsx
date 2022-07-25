import { configureStore } from '@reduxjs/toolkit'
import UserNameSlices from './slices/UserName.slices'

export default configureStore({
  reducer: {
        user : UserNameSlices,
	}
})