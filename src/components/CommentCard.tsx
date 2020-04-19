import React, { FC } from 'react'

interface OwnProps {
    name: string
    email: string
    body: string
}

type Props = OwnProps

const CommentCard: FC<Props> = (props) => {
    return (
        <div className="card has-margin-bt-2">
            <div className="card-header">
                <div className="card-header-title">Comment</div>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6">{props.email}</p>
                    </div>
                    <div className="media-right">
                        <figure className="image is-48x48">
                            <img
                                src={`https://ui-avatars.com/api/?name=${props.name}&background=0D8ABC&color=fff`}
                                alt="Placeholder"
                            />
                        </figure>
                    </div>
                </div>
                <div className="content is-medium">
                    <p>{props.body}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
