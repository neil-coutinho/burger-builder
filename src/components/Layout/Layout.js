import React from "react";
import Aux from "../../Aux";
const layout = (props) => {

    return (
        // <div className="Layout"> => wrapping el to allow ajacent JSX
        <Aux>
            <div>Toolbar, Sidebar</div>
            <main>{props.children}</main>
        </Aux>
            
        // </div>
        
    );
};

export default layout;