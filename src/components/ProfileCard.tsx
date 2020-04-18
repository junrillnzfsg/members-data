import React, { FC } from 'react'

interface OwnProps {
    name: string
    company: string
}

type Props = OwnProps

const ProfileCard: FC<Props> = (props) => {
    return (
        <div className="card has-margin-bt-2">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6">{props.company}</p>
                    </div>
                    <div className="media-right">
                        <figure className="image is-128x128">
                            <img
                                src={`https://ui-avatars.com/api/?name=${props.name}&background=0D8ABC&color=fff`}
                                alt="Placeholder"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
