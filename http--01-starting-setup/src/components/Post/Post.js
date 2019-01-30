import React from 'react';
// import {withRouter} from 'react-router-dom'

import './Post.css';

const post = (props) => {
    // console.log(props);

    return (
        <article className="Post" onClick={props.onClickPost}>
            <h1>{props.upTitle}</h1>
            <div className="Info">
                <div className="Author">{props.upAuthor}</div>
            </div>
        </article>
    )
};

// export default withRouter( post );
export default post;