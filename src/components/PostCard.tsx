import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

interface OwnProps {
    id: number
    userId: number
    title: string
    body: string
    onDeletePost: (postId: number, userId: number) => void
}

type Props = OwnProps

const PostCard: FC<Props> = (props) => {
    const [loading, setLoading] = useState(false)

    const handleDeletePost = () => {
        setLoading(true)
        props.onDeletePost(props.id, props.userId)
    }

    return (
        <div className="card has-margin-bt-2">
            <div className="card-header">
                <div className="card-header-title is-size-4">{props.title}</div>
            </div>
            <div className="card-content">
                <div className="content">{props.body}</div>
                <div className="is-pulled-right">
                    <Link
                        className="button is-info has-margin-r-1"
                        to={`/member/${props.userId}/post/${props.id}`}
                    >
                        View
                    </Link>
                    <button
                        className={clsx('button is-danger', {
                            'is-loading': loading,
                        })}
                        onClick={handleDeletePost}
                    >
                        Delete
                    </button>
                </div>
                <div className="is-clearfix" />
            </div>
        </div>
    )
}

export default PostCard
