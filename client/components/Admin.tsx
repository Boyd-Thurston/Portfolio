// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { USER_LOG_OFF, logIn, saveUser, newUserLogIn } from '../actions'
import { isAuthenticated } from '../utils/lib'
import { getUserDetails } from '../apis'

// define class component 
export class Admin extends React.Component {

  render(){
    return(
      <>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}


export default connect(mapStateToProps)(Admin)