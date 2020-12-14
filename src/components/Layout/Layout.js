import React, { Component } from "react";
import Aux from "../../Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidebar from "../Navigation/Sidebar/Sidebar";
import sidebar from "../Navigation/Sidebar/Sidebar";




class Layout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showSidebar: false
        }
    }

    toggleSidebar() {
       let sidebarStatus = this.state.showSidebar;

       this.setState({showSidebar: !sidebarStatus});
    }
    
    render () {
        return (
            // <div className="Layout"> => wrapping el to allow ajacent JSX
            <Aux>
               <Toolbar toggleSidebar={this.toggleSidebar.bind(this)}/>
               <Sidebar  showSidebar={this.state.showSidebar}/>
                <main className={styles.main}>
                    <BurgerBuilder/>
                </main>
            </Aux>
                
            // </div>
            
        );
    }
}

export default Layout;