import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        this.setState({
            selectedId: upId
        });
    }

    render () {
        let postList = <p style={{textAlign: "center"}}>Something went wrong!</p>;
        if (!this.state.error) {
            postList = this.state.posts.map( post => {
                return <Post
                    key={post.id}
                    upTitle={post.title}
                    upAuthor={post.author}
                    onClickPost={ () => this.selectPost(post.id) } />;
            } );
        }

        return (
            <div>
                <section className="Posts">
                    {postList}
                </section>
                <section>
                    <FullPost upId={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;