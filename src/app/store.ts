import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import membersListReducer from 'features/membersList/membersListSlice'
import memberDetailsReducer from 'features/memberDetails/memberDetailsSlice'
import postsDataReducer from '../features/postsData/postsDataSlice'

export const store = configureStore({
    reducer: {
        membersList: membersListReducer,
        memberDetails: memberDetailsReducer,
        postsData: postsDataReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
