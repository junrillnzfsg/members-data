import request from 'utils/request'

export type Member = {
    id: number
    name: string
    company: {
        name: string
    }
}

export const getMembersApi = () =>
    request.get('/users').then(({ data }) => data)
