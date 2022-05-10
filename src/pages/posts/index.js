import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { produce } from "immer";
import { getPosts } from "../../store/actions";

const Post = (props) => {
  useEffect(() => {
    if (!props.posts) {
      props.getPosts();
    }
  }, []); 

  return (<div>
    <ul>
      {props.posts ? props.posts.map(post => {
        return (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.description}</div>
          </li>
        )
      }) : null}
    </ul>
  </div>)
}

const mapStateToProps = produce((state) => {
  return {
    posts: state.index.posts,
  };
});
Post.loadData = (store) => {
  return store.dispatch(getPosts())
}

export default connect(mapStateToProps, {getPosts})(Post);
