import React from 'react'
import configureStore from 'redux-mock-store'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import reduxStoreMock from '../mocks/reduxStoreMock'

const mockStore = configureStore([])
const store = mockStore(reduxStoreMock)

describe('Component test', () => {
    test('renders <App /> component', () => {
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
