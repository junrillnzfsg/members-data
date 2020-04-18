import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { Member } from 'api/membersAPI'

interface MemberDetailsState {
    value: Member | {}
}

const initialState: MemberDetailsState = {
    value: {
        id: null,
        name: '',
        company: {
            name: '',
        },
    },
}

export const memberDetailsSlice = createSlice({
    name: 'memberDetails',
    initialState,
    reducers: {
        setMemberDetails: (state, action: PayloadAction<Member | {}>) => {
            state.value = action.payload
        },
    },
})

export const { setMemberDetails } = memberDetailsSlice.actions

// The function below is called a selector and allows us to select a value from the state.
export const selectMemberDetails = (state: RootState) =>
    state.memberDetails.value

export default memberDetailsSlice.reducer
