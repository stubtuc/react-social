import React, {useContext, useState} from 'react';
import moment from "moment";
import 'moment/locale/ru'
import PostList from "./PostList";
import { postsList } from "../interfaces";
import AppContext from "../AppContext";
import i18next from "i18next";
import debounce from 'lodash/debounce';

const CreatePost = () => {
    const { posts: postsFromContext } = useContext(AppContext)

    const [newPost, setNewPost] = useState({
        title: { value: '', valid: true },
        message: { value: '', valid: true },
    });

    const [posts, setPosts] = useState<postsList>(postsFromContext)
    const [createPost, setCreatePost] = useState<boolean>(false)

    const validateField = ({fieldType, fieldValue}: {fieldType: string, fieldValue: string}) => {
        if (fieldType === 'title') {
            return fieldValue.charAt(0) === fieldValue.charAt(0).toUpperCase();
        }
    }

    const debouncedValidation = debounce(({fieldType, fieldValue}) => {
        setNewPost({
            ...newPost,
            [fieldType]: {
                // @ts-ignore
                ...newPost[fieldType].value,
                valid: validateField({fieldValue, fieldType})
            }
        });
    }, 1600);

    const onChangeHandler = (e: any) => {
        setNewPost({
            ...newPost,
            [e.target.name]: {
                value: e.target.value,
                valid: true
            }
        });
    }

    const onCreateHandler = () => {
        if (newPost.title && newPost.message) {

            posts.unshift({ id: posts.length + 1, header: newPost.title.value, text: newPost.message.value, date: moment().format() as any as string, likes: [], author: 'kek'})
            setNewPost({ title: { value: '', valid: true }, message: { value: '', valid: true }});
        }
    }

    const deletePost = (id:number) => {
        setPosts(posts.filter((post) => post.id !== id))
    }

    return (
        <>
            {
                createPost
                    ? (
                        <form className='create-post'>
                            <input type="text" name="title" value={ newPost.title.value } className='input' placeholder={ `${i18next.t('new_post_header')}` } onChange={onChangeHandler}/>
                            <textarea className='textarea' name="message" rows={5} cols={10} value={ newPost.message.value } placeholder={ `${i18next.t('new_post_message')}` } onChange={onChangeHandler}/>
                            <input type='button'
                                   className={
                                       (newPost.title.value.length > 0 && newPost.message.value.length > 0) ? 'btn' : 'btn--muted'
                                   }
                                   value={ `${i18next.t('create_post_btn_text')}` }
                                   onClick={ onCreateHandler }
                                   disabled={newPost.title.value.length === 0 || newPost.message.value.length === 0}
                            />
                        </form>
                    ) : (
                        <div className={'btn-container'}>
                            <input type='button'
                                   className='btn'
                                   value={ `${i18next.t('create_post_btn_text')}` }
                                   onClick={ () => {
                                       setCreatePost(true)
                                   } }
                            />
                        </div>
                    )
            }
            <PostList posts={posts} deletePost={ deletePost }/>
        </>
    )
}

export default CreatePost;