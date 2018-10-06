import React, { Component } from "react";

class Post extends Component {
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
    const { data, val } = this.props;
    // console.log("postProps", data);

    const { like, comment, share, like2, like3 } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <img
            alt="as"
            className="rounded-circle avatar"
            src={data.profilePic}
          />
          <h5 className="card-title display-4">{data.postedBy}</h5>
          <p className="card-text card-text1">
            <small className="text-muted">{data.date}</small>
          </p>
          <p className="card-text card-text2">{data.description}</p>
        </div>

        <img alt="as" src={data.adImg} className="card-img-top" />

        <div className="card-footer2">
          <small className="like">
            {data.isLiked && <img alt="as" src={like3} className="icon" />}
            {data.isLiked ? `Liked by ${this.props.name}` : ""}
          </small>
          <small className="comment">{data.comment} Comments</small>
          <small className="share">{data.share} Shares</small>
        </div>
        <div className="card-footer">
          <small className="badge" onClick={() => this.props.like(val)}>
            <img alt="as" src={data.isLiked ? like2 : like} className="icon" />
            Like
          </small>
          <small className="badge">
            <img alt="as" src={comment} className="icon" />
            Comment
          </small>
          <small className="badge">
            <img alt="as" src={share} className="icon" />
            Share
          </small>
        </div>
      </div>
    );
  }
}

export default Post;
