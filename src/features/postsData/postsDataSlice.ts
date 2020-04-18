import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'app/store'
import { getPostsDataApi, Post } from 'api/postsDataAPI'

interface PostsDataState {
    value: Post[]
}

const initialState: PostsDataState = {
    value: [],
}

export const postsDataSlice = createSlice({
    name: 'postsData',
    initialState,
    reducers: {
        setPostsData: (state, action: PayloadAction<Post[]>) => {
            state.value = action.payload
        },
    },
})

export const { setPostsData } = postsDataSlice.actions

// The function below is called a thunk and allows us to perform async logic.
export const getPostsDataAsync = (userId: number): AppThunk => async (
    dispatch
) => {
    try {
        const posts = await getPostsDataApi(userId)
        dispatch(setPostsData(posts))
    } catch (e) {
        dispatch(setPostsData([]))
    }
}

// The function below is called a selector and allows us to select a value from the state.
export const selectPostsData = (state: RootState) => state.postsData.value

export default postsDataSlice.reducer
