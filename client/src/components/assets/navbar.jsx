// import React, { useState } from "react";
import React, { Component } from "react";

export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTop: false,
      home: false,
      skill: false,
      about: false,
      project: false,
      contact: false,
      navToogle: {
        navbarState: false,
        navbarClass: "collapse navbar-collapse",
      },
    };
  }
  // for menu toogler
  myToogler = () => {
    if (this.state.navToogle.navbarState) {
      this.setState({
        navToogle: {
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        },
      });
    } else {
      this.setState({
        navToogle: {
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        },
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      const position = window.scrollY;
      if (position > 620) {
        this.setState({ navTop: true });
      } else {
        this.setState({ navTop: false });
      }
      if (position >= 0 && position < 652) {
        this.setState({ home: true });
      } else {
        this.setState({ home: false });
      }
      if (position > 652 && position < 1072) {
        this.setState({ about: true });
      } else {
        this.setState({ about: false });
      }
      if (position > 1072 && position < 1472) {
        this.setState({ skill: true });
      } else {
        this.setState({ skill: false });
      }
      if (position > 1472 && position < 1746.4000244140625) {
        this.setState({ project: true });
      } else {
        this.setState({ project: false });
      }
      if (position >= 1746.4000244140625) {
        this.setState({ contact: true });
      } else {
        this.setState({ contact: false });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <nav
        className={
          this.state.navTop
            ? "Nav navbar position navbar-expand-md"
            : "Nav navbar navbar-expand-md"
        }
        id=' navbar'>
        <span className='navbar-brand'>
          <b>BIBEK SHRESTHA</b>
        </span>
        <button
          className='navbar-toggler b text-left '
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
          onClick={this.myToogler}>
          <span
            style={{
              color: "white",
            }}>
            &#9776;
          </span>
        </button>

        <div
          className={this.state.navToogle.navbarClass}
          id='collapsibleNavbar'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <span
                onClick={() => window.scrollTo(0, 0)}
                id={this.state.home ? "active" : ""}
                className='nav-item'>
                HOME
              </span>
            </li>
            <li className='nav-item'>
              <span
                onClick={() => window.scrollTo(0, 652)}
                id={this.state.about ? "active" : ""}
                className='nav-item'>
                ABOUT
              </span>
            </li>
            <li className='nav-item'>
              {" "}
              <span
                onClick={() => window.scrollTo(0, 1072)}
                id={this.state.skill ? "active" : ""}
                className='nav-item'>
                SKILLS
              </span>
            </li>
            <li className='nav-item'>
              {" "}
              <span
                onClick={() => window.scrollTo(0, 1472)}
                id={this.state.project ? "active" : ""}
                className='nav-item'>
                PROJECTS
              </span>
            </li>

            <li className='nav-item'>
              <span
                onClick={() => window.scrollTo(0, 1746.4000244140625)}
                id={this.state.contact ? "active" : ""}
                className='nav-item'>
                CONTACT
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
