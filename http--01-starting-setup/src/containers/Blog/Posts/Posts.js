import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false
    }

    componentDidMount() {
        // console.log(this.props);

        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Rudi Wijaya'
                    }
                })
                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                });
                // console.log(error);
            });
    }

    selectPost = (upId) => {
        // this.setState({
        //     selectedId: upId
        // });

        // this.props.history.push('/posts/' + id);

        this.props.history.push({pathname: '/posts/' + upId});
    }
    
        
    render() {

        let postList = <p style={{textAlign: "center"}}>Something went wrong!</p>;
        if (!this.state.error) {
            postList = this.state.posts.map( post => {
                return (
                        // <Link to={'/' + post.id}
                        //     key={post.id}>
                            <Post
                                key={post.id}
                                upTitle={post.title}
                                upAuthor={post.author}
                                onClickPost={ () => this.selectPost(post.id) } />
                        // </Link>
                    )
            } );
        }

        return (
            <div>
                <section className="Posts">
                    {postList}
                </section>

                <Route
                    path={this.props.match.url + '/:postId'}
                    exact
                    component={FullPost}
                    />
            </div>
        );
    }
};

export default Posts;