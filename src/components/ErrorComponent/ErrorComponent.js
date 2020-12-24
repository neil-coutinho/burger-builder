import React, { Component } from "react";


const errorComponent = (WrappedComponent, axios) => {
   

    return class extends Component {

        componentDidMount() {
           
            axios.interceptors.request.use((request) => {
                console.log({request});
                return request;
            });


            axios.interceptors.response.use((response) => {
                console.log({response});
               
            });


        }


        render() {
            return <WrappedComponent/>
        }
    }

  
}

export default errorComponent;