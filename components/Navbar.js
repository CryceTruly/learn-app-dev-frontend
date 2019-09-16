import React from 'react';
import Link from 'next/link'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
       
          <a className="navbar-brand" href="/">
            <img src="../static/img/logo.png" width={30} /> makethatapp
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               <Link href='/'>
                 <a  className='nav-link text-dark'>Home</a>
               </Link>
              </li>
              <li className="nav-item">
               <Link href='/lessons' >
                 <a className='nav-link text-dark'>Lessons
                 </a>
               </Link>
              </li>
            </ul>
       
        </div>
      </nav>
    );
  }
}