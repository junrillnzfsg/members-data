import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'app/store'
import { Comment, getPostDataCommentsApi } from 'api/postsDataAPI'

interface CommentsListState {
    value: Comment[]
}

const initialState: CommentsListState = {
    value: [],
}

export const commentsListSlice = createSlice({
    name: 'commentsList',
    initialState,
    reducers: {
        setCommentsList: (state, action: PayloadAction<Comment[]>) => {
            state.value = action.payload
        },
    },
})

export const { setCommentsList } = commentsListSlice.actions

// The function below is called a thunk and allows us to perform async logic.
export const getCommentsListAsync = (userId: number): AppThunk => async (
    dispatch
) => {
    try {
        const comments = await getPostDataCommentsApi(userId)
        dispatch(setCommentsList(comments))
    } catch (e) {
        dispatch(setCommentsList([]))
    }
}

// The function below is called a selector and allows us to select a value from the state.
export const selectCommentsList = (state: RootState) => state.commentsList.value

export default commentsListSlice.reducer
