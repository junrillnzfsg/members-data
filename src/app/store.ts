import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import membersListReducer from 'features/membersList/membersListSlice'
import memberDetailsReducer from 'features/memberDetails/memberDetailsSlice'
import postsDataListReducer from 'features/postsDataList/postsDataListSlice'
import postDataDetailsReducer from 'features/postDataDetails/postDataDetailsSlice'
import commentsListReducer from 'features/commentsList/commentsListSlice'

export const store = configureStore({
    reducer: {
        membersList: membersListReducer,
        memberDetails: memberDetailsReducer,
        postsDataList: postsDataListReducer,
        postDataDetails: postDataDetailsReducer,
        commentsList: commentsListReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
