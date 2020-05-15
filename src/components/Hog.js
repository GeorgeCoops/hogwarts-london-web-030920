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
            <div className="ui eight wide column">
                <h2>{this.props.hog.name}</h2>
                <img onClick={() => {this.props.showDetail(this.props.hog)} } src={pigImg} />
                <button onClick={() => {this.props.renderWithoutHidden(this.props.hog)}}>Hide Pig</button> 
            </div>
        )
    }
}

export default Hog