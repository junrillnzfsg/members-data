import postsData, { initialState, setPostsData } from './postsDataListSlice'

const stateValue = [
    {
        userId: 1,
        id: 1,
        title: 'test title',
        body: 'test body',
    },
]

describe('Action creator test', () => {
    test('Should return expected action on setPostsData', () => {
        const expectedAction = {
            type: setPostsData.type,
            payload: stateValue,
        }
        expect(setPostsData(stateValue)).toEqual(expectedAction)
    })
})

describe('Reducer test', () => {
    test('Should update the state on setPostsData', () => {
        const expectedState = {
            value: [stateValue],
        }
        expect(
            postsData(initialState, {
                type: setPostsData.type,
                payload: [stateValue],
            })
        ).toEqual(expectedState)
    })
})
