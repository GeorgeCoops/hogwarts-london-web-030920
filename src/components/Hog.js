import React, { Component } from "react";

import hogImage from '../hog-imgs/augustus_gloop.jpg'; 

class Hog extends Component {



    hogImage = () => {
        return '../hog-imgs/augustus_gloop.jpg'
    }

    stopDisplay = () => {

    }

    render(){
        let pigImg = require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(" ","_").replace(" ","_")}.jpg`)
        return(
            <div className="ui eight wide column" className="ui card" className="hog-card">
                <div className="image" >
                    <img onClick={() => {this.props.showDetail(this.props.hog)} } src={pigImg} />
                </div>
                <div className="content">
                    <a className="header">{this.props.hog.name}</a>
                    <button onClick={() => {this.props.renderWithoutHidden(this.props.hog)}}>Hide Pig</button> 
                </div>

            </div>
        )
    }
}

export default Hog