import request from 'utils/request'

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export const getPostsDataApi = (userId: number) =>
    request.get('/posts', { params: { userId } }).then(({ data }) => data)

export const getPostDataCommentsApi = (postId: number) =>
    request.get(`/posts/${postId}/comments`).then(({ data }) => data)

export const deletePostDataApi = (postId: number) =>
    request.delete(`/posts/${postId}`).then(({ data }) => data)
export const createPostDataApi = (post: Post) =>
    request.post(`/posts`, post).then(({ data }) => data)
