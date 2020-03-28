// import React from "react";
import React, { Component } from "react";
import "./../css/style.css";
import Axios from "axios";

export default class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    // console.log(data);
    Axios.post("/contact", data)
      .then(res => {
        alert("Email sent to admin");
        this.setState({ name: "", email: "", message: "" });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {}
  render() {
    return (
      <div className='contact'>
        <h1 className='text-center'>Contact</h1>
        <span className='sub-title text-center'>
          Have any questions or want to work together?
        </span>
        <form
          className='mt-5 float-center container '
          onSubmit={this.handleSubmit}>
          <input
            type='Name'
            className='form'
            name='Name'
            value={this.state.name}
            placeholder='Name'
            id='name'
            required
            onChange={this.handleChangeName}
          />
          <br />
          <input
            type='Email'
            className='form'
            value={this.state.email}
            name='Email'
            placeholder='Email'
            id='email'
            required
            onChange={this.handleChangeEmail}
          />
          <br />
          <textarea
            className='textarea'
            placeholder='Message'
            value={this.state.message}
            rows='5'
            required
            onChange={this.handleChangeMessage}
            id='comment'></textarea>
          <br />
          <input
            className='btn btn-primary text-right '
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    );
  }
}
