import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const postWithAuthor = posts.map((post) => ({
          ...post,
          author: 'Max',
        }));
        this.setState({ posts: postWithAuthor });
      })
      .catch((error) => this.setState({ error: true }));
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let postsComponents = <p>Something went wrong!</p>;
    if (!this.state.error) {
      postsComponents = this.state.posts.map((post) => (
        <Post key={post.id} title={post.title} author={post.author} onClick={() => this.postSelectedHandler(post.id)} />
      ));
    }

    return <section className="Posts">{postsComponents}</section>;
  }
}

export default Posts;