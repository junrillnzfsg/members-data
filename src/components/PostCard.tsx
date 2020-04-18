import React, { FC } from 'react'

interface OwnProps {
    id: number
    title: string
    body: string
}

type Props = OwnProps

const PostCard: FC<Props> = (props) => {
    return (
        <div className="card has-margin-bt-2">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.title}</p>
                    </div>
                </div>
                <div className="content">{props.body}</div>
                <div className="is-pulled-right">
                    <button className="button is-info has-margin-r-1">
                        View
                    </button>
                    <button className="button is-danger">Delete</button>
                </div>
                <div className="is-clearfix" />
            </div>
        </div>
    )
}

export default PostCard
