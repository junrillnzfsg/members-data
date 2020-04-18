import request from 'utils/request'

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export const getPostsDataApi = (userId: number) =>
    request.get('/posts', { params: { userId } }).then(({ data }) => data)
