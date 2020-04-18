import React, { FC } from 'react'

interface OwnProps {}

type Props = OwnProps

const Member: FC<Props> = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                    <div className="media-right">
                        <figure className="image is-48x48">
                            <img
                                src="https://bulma.io/images/placeholders/96x96.png"
                                alt="Placeholder"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member
