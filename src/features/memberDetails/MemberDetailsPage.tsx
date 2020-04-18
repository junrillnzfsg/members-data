import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    getMembersListAsync,
    selectMembersList,
} from '../membersList/membersListSlice'
import { selectMemberDetails, setMemberDetails } from './memberDetailsSlice'
import { Member } from '../../api/membersAPI'
import { getPostsDataAsync, selectPostsData } from '../postsData/postsDataSlice'
import PostCard from '../../components/PostCard'

interface OwnProps {}

type Props = OwnProps

const MemberDetailsPage: FC<Props> = (props) => {
    const { id } = useParams()

    const dispatch = useDispatch()

    const membersList = useSelector(selectMembersList)
    const memberDetails = useSelector(selectMemberDetails)
    const postsData = useSelector(selectPostsData)

    // retrieve members list
    useEffect(() => {
        dispatch(getMembersListAsync())
    }, [dispatch])

    // retrieve specific member details
    useEffect(() => {
        if (!id) return
        const userId = parseInt(id, 10)
        const member = membersList.find((member) => member.id === userId) || {}
        dispatch(setMemberDetails(member))
    }, [id, membersList, dispatch])

    // retrieve members post
    useEffect(() => {
        if (!id) return
        const userId = parseInt(id, 10)
        dispatch(getPostsDataAsync(userId))
    }, [id, memberDetails, dispatch])

    return (
        <div className="container has-padding-3">
            <h4 className="is-size-1 has-text-centered">
                {(memberDetails as Member).name} Posts
            </h4>
            <div className="has-margin-t-3">
                <button className="button is-info is-large is-fullwidth">
                    Create New Post
                </button>
            </div>
            <div className="columns">
                <div className="column">
                    {postsData.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MemberDetailsPage
