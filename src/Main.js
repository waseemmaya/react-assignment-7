import React, { Component } from "react";
import Post from "./Components/Post";
import Add from "./Components/Add";

// import fire from "./fire";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

import swal from "sweetalert";

class Main extends Component {
  constructor() {
    swal("Write Your Name:", "Required*", "success", {
      icon: "success",
      buttons: true,
      content: "input"
    }).then(value => {
      if (value === null) {
        this.setState({
          loaded: false
        });
      } else {
        // console.log("val", value);
        if (value.length < 1) {
          swal("Name Required, Now Reload Again", "", "warning");
        } else {
          localStorage.setItem("username", value);
          this.setState({
            name: value,
            loaded: true
          });
        }
      }
    });

    super();
    this.state = {
      name: "",
      showForm: false,
      loaded: false,
      post: [
        {
          adImg: img1,
          date: "Tue Oct 02 2018",
          isLiked: false,
          comment: 6,
          share: 22,
          totalLike: 9,
          description:
            "There are many variations of passages of Lorem Ipsum available",
          postedBy: "Waseem Maya",
          profilePic: "https://image.flaticon.com/icons/svg/149/149071.svg"
        },
        {
          adImg: img2,
          date: "Tue Oct 02 2018",
          isLiked: false,
          comment: 32,
          share: 12,
          totalLike: 66,
          description:
            "45 BC. This book is a treatise on the theory of ethics, very popular ",
          postedBy: "Iqra Naaz",
          profilePic: "https://image.flaticon.com/icons/svg/149/149070.svg"
        },
        {
          adImg: img3,
          date: "Sat Jan 18 2018",
          isLiked: true,
          comment: 3,
          share: 5,
          totalLike: 1,
          description:
            "reproduced below for those interested. Sections 1.10.32 and ",
          postedBy: "Kashif Sulaiman",
          profilePic: "https://image.flaticon.com/icons/svg/149/149071.svg"
        },
        {
          adImg: img4,
          date: "Tue Sep 02 2018",
          isLiked: false,
          comment: 31,
          share: 9,
          totalLike: 8,
          description:
            "during the Renaissance. The first line of Lorem Ipsum, Lorem ",
          postedBy: "Papa Ki Pari",
          profilePic: "https://image.flaticon.com/icons/svg/149/149070.svg"
        },
        {
          adImg: img5,
          date: "Mon Oct 02 2018",
          isLiked: true,
          comment: 0,
          share: 11,
          totalLike: 2,
          description: "Desc 1",
          postedBy: "Arif Shehzad",
          profilePic: "https://image.flaticon.com/icons/svg/149/149071.svg"
        },
        {
          adImg: img6,
          date: "Wed Aug 22 2018",
          isLiked: false,
          comment: 8,
          share: 2,
          totalLike: 12,
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
          postedBy: "Talha Aziz",
          profilePic: "https://image.flaticon.com/icons/svg/149/149071.svg"
        }
      ]
    };
  }
  render() {
    const { loaded, showForm } = this.state;
    return (
      <div>
        {this.state.name.length > 1 && (
          <div className="text-center">{this.renderNav()}</div>
        )}
        {showForm && <Add addPost={this.addPost} />}
        {loaded && (
          <div>
            <div className="text-center">
              <h3 className="display-3 mt-3">Works best on Mobile</h3>
            </div>
            <div className="card-columns container-fluid">
              {this.renderPost()}
            </div>
          </div>
        )}
      </div>
    );
  }

  addPost = (description, adImg) => {
    var { post, name } = this.state;
    console.log("data", description, adImg);

    post.push({
      adImg: adImg,
      date: "Sun Dec 28 2018",
      isLiked: false,
      comment: 3,
      share: 1,
      totalLike: 2,
      description: description,
      postedBy: name,
      profilePic: "https://image.flaticon.com/icons/svg/149/149071.svg"
    });

    this.setState({
      post,
      loaded: true,
      showForm: false
    });
    console.log("sta");
  };

  like = val => {
    var { post } = this.state;

    post[val].isLiked
      ? (post[val].isLiked = false)
      : (post[val].isLiked = true);
    this.setState({
      post
    });
  };

  renderPost = () => {
    const { post, name } = this.state;
    return post.map((data, i) => {
      return <Post name={name} like={this.like} val={i} key={i} data={data} />;
    });
  };

  renderNav = () => {
    const { loaded, showForm } = this.state;
    return (
      <nav className="navbar navbar-expand-sm bg-dark text-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            {loaded && (
              <button className="btn btn-dark" onClick={this.adPost}>
                Add Post
              </button>
            )}
            {showForm && (
              <button className="btn btn-dark" onClick={this.viewPosts}>
                View Posts
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  };

  adPost = () => {
    this.setState({
      loaded: false,
      showForm: true
    });
  };

  viewPosts = () => {
    this.setState({
      loaded: true,
      showForm: false
    });
  };

  // componentDidMount() {
  //   var { post } = this.state;
  //   var database = fire.database();
  //   var fetchAds = database.ref("Ads");
  //   fetchAds.on("child_added", data => {
  //     post.push(data.val());
  //     this.setState({
  //       post,
  //       loaded: true
  //     })
  //   });

  // }
}

export default Main;
