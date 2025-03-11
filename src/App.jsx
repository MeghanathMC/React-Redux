import React from 'react'
import { connect } from 'react-redux'
import { DecAction, IncAction } from './action'


const App = ({local_variable,IncAction,DecAction}) => {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1>
        <br />
        <button onClick={IncAction}>Increment</button>
        <button onClick={DecAction}>Decrement</button>
      </center>
    </div>
  )
}

const mapStateToProps= state =>({
  local_variable:state
}) 

export default connect(mapStateToProps,{IncAction,DecAction})(App);