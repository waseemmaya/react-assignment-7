import React, { Component } from "react";
import { database } from "firebase";

class Post2 extends Component {
  constructor() {
    super();
    this.state = {
      like: "https://image.flaticon.com/icons/svg/126/126473.svg",
      like2: "https://image.flaticon.com/icons/png/512/880/880605.png",
      like3: "https://image.flaticon.com/icons/svg/179/179655.svg",
      comment: "https://image.flaticon.com/icons/svg/15/15504.svg",
      share: "https://image.flaticon.com/icons/svg/149/149179.svg"
    };
  }
  render() {
    console.log("propsFromPost", this.props);

    return (
      <div>
        <h1>Post 2</h1>
        {this.post()}
      </div>
    );
  }

  post = () => {
    const { post, val,like,like2,like3,comment,share } = this.props;
    return (
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.description}</p>
          <p class="card-text"><small class="text-muted">{post.date}</small></p>
        </div>
        <img class="card-img-bottom" src={post.adImg} alt="Card image cap"/>
      </div>
    );
  };
}

export default Post2;
