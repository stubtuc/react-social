import React, {useEffect, useState} from 'react';
import hots from '../hot.svg'
import hotsRed from '../hotRed.svg'
import comments from '../comments.svg'
import options from '../options.svg'
import Alert from "./Alert"
import moment from "moment"
import 'moment/locale/ru'
import i18next from "i18next";

const login = 'kek'

const Post = ({post, deletePost}:any) => {

    const [likes, setLikes] = useState<number>(post.likes.length)
    const [showOption, setShowOption] = useState<boolean>(false)
    const [changePost, setChangePost] = useState<boolean>(false)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [changeHeader, setChangeHeader] = useState<string>(post.header)
    const [changeText, setChangeText] = useState<string>(post.text)

    const onLikeHandler = () => {
        if (post.likes.includes(login)) {
            post.likes = post.likes.filter((key:any) => key !== login)
        }
        else post.likes.push(login)

        setLikes(post.likes.length)
    }

    const applyChanges = () => {
        if (changeHeader && changeText) {
            post.header = changeHeader
            post.text = changeText
            post.date = moment().locale('ru').calendar()
            setChangePost(false)
        }
    }

    useEffect(() => {
        setLikes(post.likes.length)
    }, [post.likes])

    return (
        <>
            {
                showAlert && <Alert header={ i18next.t('no-access-header') } text={ i18next.t('no-access-text') } setShowAlert={ setShowAlert }/>
            }
        <div className='post'
             onMouseLeave={() => {
                 setShowOption(false)
             }}>
            <div className='post__info'>
                {
                    !changePost
                    ? <h3 className='post__article'>{ post.header }</h3>
                        : <input
                            type="text"
                            value={ changeHeader }
                            className='input'
                            onChange={(event) => {
                                setChangeHeader(event.target.value)
                            }}
                        />
                }
                {
                    !changePost && <p className='post__date'>{ moment(post.date).locale(i18next.language).calendar() }</p>
                }
            </div>
            {
                !changePost
                ? <p className='post__text'>{ post.text }</p>
                    : <textarea
                        className='textarea'
                        rows={5}
                        cols={10}
                        value={ changeText }
                        onChange={(event) => {
                            setChangeText(event.target.value)
                        }}
                    />
            }
            {
                !changePost && (
                    <div className="post__counters">
                        <div className="post__likes">
                            <img
                                src={ post.likes.includes(login) ? hotsRed : hots }
                                alt='Likes'
                                className='post__icon'
                                onClick={ () => {
                                    onLikeHandler()
                                }}
                            />

                            { post.likes.includes(login)
                                ? <p className='post__counter--red'>{likes}</p>
                                : <p className='post__counter'>{likes}</p> }
                        </div>
                        <div className="post__comments">
                            <img src={ comments } alt='Comments' className='post__icon'/>
                        </div>
                    </div>
                )
            }
            {
                changePost && (
                    <input
                        type="button"
                        className={ changeHeader && changeText ? 'btn' : 'btn--muted'}
                        value={ i18next.t('edit') as string }
                        onClick={() => {
                            applyChanges()
                        }}
                    />
                )
            }
            <div className="post__options">
                <img src={ options }
                     alt="Options"
                     className='post__icon'
                     onMouseOver={() => {
                         setShowOption(true)
                     }}
                />
                {
                    showOption && (
                        <div className="post__menu">
                            <p onClick={() => {
                                post.author === login ? deletePost(post.id) : setShowAlert(true)
                            }}>{ i18next.t('delete') as string }</p>
                            <p onClick={() => {
                                post.author === login ? setChangePost(true) : setShowAlert(true)
                            }}
                            >{ i18next.t('edit') as string }</p>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    );
};

export default Post;