import React from 'react'
import styles from './PostDetail.module.css'

const PostDetail = ({ post }) => {
    console.log(post.title, post.image, post.body, post.tags);
    return (
        <div className={styles.post_detail}>
            <div className={styles.image_container}>
                <img src={post.image} alt={post.title} />
            </div>
            <h2>{post.title}</h2>
            <p className={styles.createdby}><span>por:</span> {post.createdBy}</p>
            <div className={styles.tags}>
                {post.tags.map((tag) => (
                    <p key={tag}><span>#</span>{tag}</p>
                ))}
            </div>


        </div>
    )
}

export default PostDetail