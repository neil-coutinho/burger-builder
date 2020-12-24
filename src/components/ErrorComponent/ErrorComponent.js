import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Aux from "../../Aux";


const errorComponent = (WrappedComponent, axios) => {
   

    return class extends Component {

        state = {
            showModal: false,
        }

        componentDidMount() {
           
            axios.interceptors.request.use((request) => {
                console.log({request});
                this.setState({showModal: false});
                return request;
            });


            axios.interceptors.response.use(null,(response) => {
                console.log({response});
                this.setState({showModal: true});
               
            });


        }

        dismiss() {
            this.setState({showModal: false});
        }

        render() {
            return (
            <Aux>
                <Modal show={this.state.showModal} dismiss={this.dismiss.bind(this)}>
                    Something went wrong.
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>)}
    }

  
}

export default errorComponent;