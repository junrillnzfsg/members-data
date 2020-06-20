import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'app/store'
import {
    createPostDataApi,
    deletePostDataApi,
    getPostsDataApi,
    Post,
} from 'api/postsDataAPI'

interface PostsDataState {
    value: Post[]
}

export const initialState: PostsDataState = {
    value: [],
}

export const postsDataListSlice = createSlice({
    name: 'postsData',
    initialState,
    reducers: {
        setPostsData: (state, action: PayloadAction<Post[]>) => {
            state.value = action.payload
        },
    },
})

export const { setPostsData } = postsDataListSlice.actions

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

export const deletePostsDataAsync = (
    postId: number,
    userId: number
): AppThunk => async (dispatch) => {
    try {
        await deletePostDataApi(postId)
        const postsData = await getPostsDataApi(userId)
        dispatch(
            setPostsData(
                (postsData as Post[]).filter((post) => post.id !== postId)
            )
        )
    } catch (e) {}
}

export const createPostsDataAsync = (post: Post): AppThunk => async (
    dispatch
) => {
    try {
        const newPost = await createPostDataApi(post)
        const postsData = await getPostsDataApi(post.userId)
        dispatch(setPostsData([newPost, ...postsData]))
    } catch (e) {}
}

// The function below is called a selector and allows us to select a value from the state.
export const selectPostsDataList = (state: RootState) =>
    state.postsDataList.value

export default postsDataListSlice.reducer
