import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'app/store'
import { Member, getMembersApi } from 'api/membersAPI'

interface MembersListState {
    value: Member[]
}

const initialState: MembersListState = {
    value: [],
}

export const membersListSlice = createSlice({
    name: 'membersList',
    initialState,
    reducers: {
        setMembersList: (state, action: PayloadAction<Member[]>) => {
            state.value = action.payload
        },
    },
})

export const { setMembersList } = membersListSlice.actions

// The function below is called a thunk and allows us to perform async logic.
export const getMembersListAsync = (): AppThunk => async (dispatch) => {
    try {
        const members = await getMembersApi()
        dispatch(setMembersList(members))
    } catch (e) {
        dispatch(setMembersList([]))
    }
}

// The function below is called a selector and allows us to select a value from the state.
export const selectMembersList = (state: RootState) => state.membersList.value

export default membersListSlice.reducer
