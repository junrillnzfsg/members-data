import React from 'react'
import * as ReactRouter from 'react-router'
import ReactRedux, { Provider } from 'react-redux'
import postsData, { initialState, setPostsData } from './postsDataListSlice'
import { render, fireEvent, screen } from '@testing-library/react'
import PostDataListPage from './PostsDataListPage'
import reduxStoreMock, { postsDataList } from '../../mocks/reduxStoreMock'
import configureStore from 'redux-mock-store'

const stateValue = [
    {
        userId: 1,
        id: 1,
        title: 'test title',
        body: 'test body',
    },
]

const mockStore = configureStore([])
const store = mockStore(reduxStoreMock)

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}))

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
