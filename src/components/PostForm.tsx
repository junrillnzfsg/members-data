import React, { ChangeEvent, ComponentType, useState } from 'react'
import { Post } from '../api/postsDataAPI'
import clsx from 'clsx'

interface OwnProps {
    onSubmit: (post: Post) => void
}

type Props = OwnProps

const PostForm: ComponentType<Props> = (props) => {
    const [formState, setFormState] = useState({ title: '', body: '' })
    const [loading, setLoading] = useState(false)

    const handleFormChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setFormState({ ...formState, [e.target.name]: e.target.value })

    const { onSubmit } = props

    return (
        <form>
            <div className="field">
                <div className="control">
                    <input
                        name="title"
                        type="text"
                        className="input"
                        placeholder="Title"
                        onChange={handleFormChange}
                    />
                </div>
            </div>
            <div className="field">
                <textarea
                    name="body"
                    className="textarea"
                    placeholder="Body"
                    onChange={handleFormChange}
                />
            </div>
            <button
                className={clsx('button is-info is-fullwidth', {
                    'is-loading': loading,
                })}
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                    setLoading(true)
                    onSubmit(formState as Post)
                }}
            >
                Submit
            </button>
        </form>
    )
}

export default PostForm
