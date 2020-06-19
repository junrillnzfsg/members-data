import React, { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PostForm from 'components/PostForm'
import { Member } from 'api/membersAPI'
import { Post } from 'api/postsDataAPI'
import {
    getMembersListAsync,
    selectMembersList,
} from 'features/membersList/membersListSlice'
import PostsDataListPage from 'features/postsDataList/PostsDataListPage'
import { createPostsDataAsync } from 'features/postsDataList/postsDataListSlice'
import { selectMemberDetails, setMemberDetails } from './memberDetailsSlice'

interface OwnProps {}

type Props = OwnProps

const MemberDetailsPage: FC<Props> = (props) => {
    const { id } = useParams()

    const dispatch = useDispatch()
    const [showPostForm, setShowPostForm] = useState(false)

    const membersList = useSelector(selectMembersList)
    const memberDetails = useSelector(selectMemberDetails)

    // retrieve members list
    useEffect(() => {
        dispatch(getMembersListAsync())
    }, [dispatch])

    // retrieve specific member details
    useEffect(() => {
        if (!id) return
        const userId = parseInt(id, 10)
        const member = membersList.find((member) => member.id === userId)
        if (!member) return
        dispatch(setMemberDetails(member))
    }, [id, membersList, dispatch])

    const handleSubmit = (post: Post) => {
        if (!id) return
        dispatch(createPostsDataAsync({ ...post, userId: parseInt(id, 10) }))
    }
    return (
        <div className="container has-padding-3">
            <h4 className="is-size-1 has-text-centered">
                {(memberDetails as Member).name} Posts
            </h4>
            <div className="content is-large has-margin-t-3 has-text-centered">
                <Link to={`/`} className="button is-info has-margin-r-3">
                    Back to Members List
                </Link>
                {!showPostForm && (
                    <button
                        className="button is-success"
                        onClick={() => setShowPostForm(true)}
                    >
                        Create New Post
                    </button>
                )}
                {showPostForm && (
                    <button
                        className="button is-danger"
                        onClick={() => setShowPostForm(false)}
                    >
                        Cancel
                    </button>
                )}
            </div>
            {showPostForm && <PostForm onSubmit={handleSubmit} />}
            <PostsDataListPage onUpdateList={() => setShowPostForm(false)} />
        </div>
    )
}

export default MemberDetailsPage
