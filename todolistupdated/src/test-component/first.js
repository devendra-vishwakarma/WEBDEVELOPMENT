// import React from "react";
// export default function first(){

//         let {main} = this.props;    
//     return <>
//         <p>{main}</p>
//     </>
// }

import React from "react";

export default function First(props) {
    let { main } = props;

    return (
        <>
            <p>{main}</p>
        </>
    );
}
