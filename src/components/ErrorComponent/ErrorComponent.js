import React, { Component } from "react";


const errorComponent = (WrappedComponent, axios) => {
    console.log({WrappedComponent, axios});

    return class extends Component {
        render() {
            return <WrappedComponent/>
        }
    }

  
}

export default errorComponent;