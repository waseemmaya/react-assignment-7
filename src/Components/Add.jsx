import React, { Component } from "react";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      adImg: ""
    };
  }
  render() {
    return (
      <div className='text-center'>
        <h3 className='display-3'>Add Post</h3>
        {this.renderForm()}
      </div>
    );
  }

  renderForm = () => {
    const { description, adImg } = this.state;
    return (
      <div className="text-center mr-3 ml-3">
        {this.description()}
        {this.adImg()}
        <button
          onClick={() => this.add(description, adImg)}
          className="btn btn-sm addTask btn-primary mb-3 text-center"
        >
          Add Post
        </button>
      </div>
    );
  };

  add = (description, adImg) => {
      console.log('props',this.props);
      const {addPost} = this.props;
      
      
    this.props.addPost(description, adImg);
    this.setState({
      description: "",
      adImg: ""
    });
  };

  description() {
    return (
      <input
        value={this.state.description}
        onChange={this.handledescription}
        type="text"
        placeholder="Description"
        className="form-control mb-3"
      />
    );
  }

  adImg() {
    return (
      <input
        value={this.state.adImg}
        onChange={this.handleadImg}
        type="text"
        placeholder="Image URL"
        className="form-control mb-3"
      />
    );
  }

  handledescription = description => {
    this.setState({
      description: description.target.value
    });
  };

  handleadImg = adImg => {
    this.setState({
      adImg: adImg.target.value
    });
  };
}

export default Add;
