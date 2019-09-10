import React from "react";
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/main.css';

export class Layout extends React.Component {
    render() {
        const {children} = this.props
        return (
            <React.Fragment>
                <NavBar/>
                {children}
            </React.Fragment>
        );
    }
}