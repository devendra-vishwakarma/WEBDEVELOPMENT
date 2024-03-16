import React from 'react'
import C from './C';

function B() {
  const {value1} = this.props;
  console.log("B:"+value1)

  return <>
  <div>UserInfo</div>

  <h2>{value1}</h2>

  <C value1 = {value1}/>
  </>
    
}

export default B