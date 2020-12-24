import React from "react";


const errorComponent = (WrappedComponent) => {
    console.log({WrappedComponent});

    return () => <WrappedComponent/>;
}

export default errorComponent;