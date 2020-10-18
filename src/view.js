import React,{useEffect} from 'react';
import './App.css';
import Snack from './snack';
import {connect} from 'react-redux'
import {fetchPosts} from './actions/postactions';


function View(props) {

    useEffect(() => {
        console.log(props)
       props.fetchPosts(); 
    },[props.texts.items]);

    const postItems = props.texts.map( post => <div key={post.id}><h3>{post.title}</h3>
    <p>{post.body}</p>TEXTS</div>)
  return (
   <div>
       POSTS:
       <div> HOME</div>
       <Snack theme={props.theme}/>
       <div>{postItems}</div>
   </div>
  );
}


const mapStateToProps = state => ({
    texts : state.posts.items
});


export default connect(mapStateToProps,{fetchPosts})(View);
