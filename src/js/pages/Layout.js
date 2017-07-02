import React from "react";
import { Link } from "react-router";//allow to link its look like a tag

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate (){
    this.props.history.pushState(null,"/");
  }
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "10px",
      marginLeft:"50px",
    };
        const buttonSaveStyle={
      marginLeft:"30px",
    };
    const buttonCancelStyle={
       marginLeft:"10px",
    }
    console.log("layout");
    return (
      <div>
      {this.props.children}

<Link to="settings"><button class="btn btn-success" style={buttonSaveStyle}>Save</button></Link>
<Link to="featured" class="btn btn-danger" style={buttonCancelStyle}>Cancel</Link>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
