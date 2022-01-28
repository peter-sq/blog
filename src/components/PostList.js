import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component{
    componentDidCatch(){
        this.props.fetchPost();
        
        
    }
    renderList(){
        return this.props.post.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>

            );
        })
    }

    render() {
        return <div className="ui relaxed divided list ">{ this.renderList() }</div>

    }
}

const MapStateToProps = (state) => {
   return {post: state.post};
}

export default connect(
    MapStateToProps, 
    {fetchPost}
    )(PostList);