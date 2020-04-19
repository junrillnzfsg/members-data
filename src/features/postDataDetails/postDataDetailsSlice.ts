import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { Post } from 'api/postsDataAPI'

interface PostDataDetailsState {
    value: Post | {}
}

const initialState: PostDataDetailsState = {
    value: {
        title: '',
        body: '',
    },
}

export const postDataDetailsSlice = createSlice({
    name: 'postsData',
    initialState,
    reducers: {
        setPostDataDetails: (state, action: PayloadAction<Post>) => {
            state.value = action.payload
        },
    },
})

export const { setPostDataDetails } = postDataDetailsSlice.actions

// The function below is called a selector and allows us to select a value from the state.
export const selectPostDataDetails = (state: RootState) =>
    state.postDataDetails.value

export default postDataDetailsSlice.reducer
