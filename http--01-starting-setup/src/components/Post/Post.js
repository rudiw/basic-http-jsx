import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.onClickPost}>
        <h1>{props.upTitle}</h1>
        <div className="Info">
            <div className="Author">{props.upAuthor}</div>
        </div>
    </article>
);

export default post;