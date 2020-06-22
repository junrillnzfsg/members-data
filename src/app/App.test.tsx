import React from 'react'
import configureStore from 'redux-mock-store'
import { render, fireEvent, screen } from '@testing-library/react'
import ReactRedux, { Provider } from 'react-redux'
import App from './App'
import reduxStoreMock, { postsDataList } from '../mocks/reduxStoreMock'
import * as ReactRouter from 'react-router'
import PostDataListPage from '../features/postsDataList/PostsDataListPage'

const mockStore = configureStore([])
const store = mockStore(reduxStoreMock)

describe('Component test', () => {
    test('renders <App /> component', () => {
        store.dispatch = jest.fn()
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        expect(getByText(/Members Data/i)).toBeInTheDocument()
    })
})

describe('Router test', () => {
    test('Should open member details page when clicking on link', () => {
        store.dispatch = jest.fn()
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        fireEvent.click(screen.getByRole('link'))
        expect(getByText(/John Posts/i)).toBeInTheDocument()
    })
})

describe('Redux test', () => {
    test('Should load posts data from state on clicking member details', () => {
        store.dispatch = jest.fn()

        // @ts-ignore
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        fireEvent.click(screen.getByRole('link'))
        expect(getByText(/Sample title/i)).toBeInTheDocument()
    })
})
