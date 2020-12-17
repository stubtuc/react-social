import React from 'react';
import Post from "./Post";
import i18next from "i18next";

const PostList = ({posts, deletePost}:any) => {
    return (
        <>
            <h2 className='posts-header'>{ i18next.t('news') }</h2>
            {
                posts.length > 0
                    ? posts.map((post:any) => {
                        return <Post post={post} key={post.id} deletePost={deletePost}/>
                    })
                    : (
                        <div className='placeholder'>
                            <p>Здесь ничего нет..</p>
                        </div>
                    )
            }
        </>
    )
}

export default PostList;