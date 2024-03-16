import React from 'react'

function C() {
    const {value1} = this.props;
    console.log(value1);
    return <>
        <div>userList</div>
        <h1>{value1.name}</h1>
    </>


}

export default C