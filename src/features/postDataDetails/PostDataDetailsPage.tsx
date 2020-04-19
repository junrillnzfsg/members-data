import React, { FC, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Post } from 'api/postsDataAPI'
import CommentCard from 'components/CommentCard'
import {
    getPostsDataAsync,
    selectPostsDataList,
} from 'features/postsDataList/postsDataListSlice'
import {
    getCommentsListAsync,
    selectCommentsList,
} from 'features/commentsList/commentsListSlice'
import {
    selectPostDataDetails,
    setPostDataDetails,
} from './postDataDetailsSlice'

interface OwnProps {}

type Props = OwnProps

const PostDataDetailsPage: FC<Props> = (props) => {
    const { userId, id } = useParams()

    const dispatch = useDispatch()

    const postsDataList = useSelector(selectPostsDataList)
    const postDataDetails = useSelector(selectPostDataDetails)
    const commentsList = useSelector(selectCommentsList)

    // retrieve members post
    useEffect(() => {
        if (!userId) return
        const userIdNumber = parseInt(userId, 10)
        dispatch(getPostsDataAsync(userIdNumber))
    }, [userId, dispatch])

    useEffect(() => {
        if (!id) return
        const postData = postsDataList.find(
            (post) => post.id === parseInt(id, 10)
        )
        if (!postData) return
        dispatch(setPostDataDetails(postData))
    }, [dispatch, id, postsDataList])

    useEffect(() => {
        if (!id) return
        const postId = parseInt(id, 10)
        dispatch(getCommentsListAsync(postId))
    }, [id, dispatch])

    return (
        <div className="container has-padding-3">
            {userId && (
                <Fragment>
                    <h4 className="is-size-1 has-text-centered">
                        {(postDataDetails as Post).title}
                    </h4>
                    <div className="card content is-large has-text-centered">
                        <div className="card-content">
                            <p className="">{(postDataDetails as Post).body}</p>
                        </div>
                    </div>
                    <div className="content is-large has-margin-t-3 has-text-centered">
                        <Link
                            to={`/member/${userId}`}
                            className="button is-info"
                        >
                            Back to Member Details
                        </Link>
                    </div>
                    {!commentsList.length && (
                        <progress
                            className="progress is-large is-info"
                            max="100"
                        />
                    )}
                    {commentsList.map((comment) => (
                        <CommentCard {...comment} key={comment.id} />
                    ))}
                </Fragment>
            )}
        </div>
    )
}

export default PostDataDetailsPage
