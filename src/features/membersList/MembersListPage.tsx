import React, { FC, useEffect } from 'react'
import ProfileCard from 'components/ProfileCard'
import { useDispatch, useSelector } from 'react-redux'
import { getMembersListAsync, selectMembersList } from './membersListSlice'
import { Link } from 'react-router-dom'

interface OwnProps {}

type Props = OwnProps

const MembersListPage: FC<Props> = (props) => {
    const dispatch = useDispatch()
    const membersList = useSelector(selectMembersList)

    useEffect(() => {
        dispatch(getMembersListAsync())
    }, [dispatch])

    return (
        <div className="container has-padding-3">
            <h4 className="is-size-1 has-text-centered">Members Data</h4>
            <div className="columns">
                <div className="column">
                    {membersList.map((member) => (
                        <Link to={`/member/${member.id}`}>
                            <ProfileCard
                                name={member.name}
                                company={member.company.name}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MembersListPage
