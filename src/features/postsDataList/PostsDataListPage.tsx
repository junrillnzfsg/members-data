import React, { FC, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import PostCard from 'components/PostCard'
import { setCommentsList } from 'features/commentsList/commentsListSlice'
import {
    deletePostsDataAsync,
    getPostsDataAsync,
    selectPostsDataList,
} from './postsDataListSlice'

interface OwnProps {
    onUpdateList: () => void
}

type Props = OwnProps

const PostsDataListPage: FC<Props> = (props) => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const postsDataList = useSelector(selectPostsDataList)

    // retrieve members post
    useEffect(() => {
        if (!id) return
        const userId = parseInt(id, 10)
        dispatch(getPostsDataAsync(userId))
        dispatch(setCommentsList([]))
    }, [id, dispatch])

    useEffect(() => {
        props.onUpdateList()
    }, [postsDataList])

    const handleDeletePost = (postId: number, userId: number) => {
        dispatch(deletePostsDataAsync(postId, userId))
    }

    return (
        <Fragment>
            {!postsDataList.length && (
                <progress className="progress is-large is-info" max="100" />
            )}
            <div className="columns">
                <div className="column">
                    {id &&
                        postsDataList.map((post) => (
                            <PostCard
                                {...post}
                                key={post.id}
                                userId={parseInt(id, 10)}
                                onDeletePost={handleDeletePost}
                            />
                        ))}
                </div>
            </div>
        </Fragment>
    )
}

export default PostsDataListPage
