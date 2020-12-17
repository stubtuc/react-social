import { createStore } from "redux";
import {IPost} from "./interfaces";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_POST_TITLE = 'UPDATE_NEW_POST_TITLE'

export const updateNewPostTitle = (title:string) => {
    return {
        type: UPDATE_NEW_POST_TITLE,
        title
    }
}

export const updateNewPostText = (text:string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}

export const addPost = (post:IPost) => {
    return {
        type: ADD_POST,
        post
    }
}

const initialState = {
    posts: [
        {
            id: 1,
            header: 'Post',
            text: 'Text',
            date: 'Now',
            likes: ['kek', 'lol', 'arbidol'],
            author: 'admin'
        }
    ],
    newPostText: {
        title: '',
        text: ''
    }
}

const postsReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TITLE: {
            const stateCopy = { ...state }
            stateCopy.newPostText.title = action.title
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = { ...state }
            stateCopy.newPostText.text = action.text
            return stateCopy
        }
        default:
            return state
    }
}

// @ts-ignore
const store = createStore(postsReducer);

export default store;