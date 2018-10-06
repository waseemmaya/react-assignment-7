import React, { Component } from "react";
import Post2 from "./Components/Post2";

class Main2 extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          adImg:
            "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/af2c4b90657541dea4cd8df7816b2489",
          date: "Tue Oct 02 2018",
          isLiked: false,
          comment: 6,
          share: 22,
          totalLike: 9,
          description: "Desc 1",
          postedBy: "Waseem Maya",
          profilePic: "https://image.flaticon.com/icons/svg/149/149071.svg"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Main 2</h1>
        <div>{this.renderPost()}</div>
      </div>
    );
  }

  renderPost = () => {
    console.log("rend");

    const { posts } = this.state;
    return posts.map((post, i) => {
      return <Post2 key={i} post={post} val={i} />;
    });
  };
}

export default Main2;
