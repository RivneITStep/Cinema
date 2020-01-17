import React, { Component } from 'react'

import { connect } from "react-redux";

class userprofile extends Component {
    state = {}
  render() {
    const {  user } = this.props.auth;
    return (
     <div>
             <p>{user.name}</p>
     </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
}
    export default connect(mapStateToProps)(userprofile);