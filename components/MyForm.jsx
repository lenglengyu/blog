import React, { PropTypes } from 'react'
import ReactDOM from "react-dom";

const MyForm = React.createClass({
  componentDidMount: function() {
    console.log(this.refs.name);
    console.log(this.refs.name.value);
  },
  render () {
    return (
      <div>
        姓名 <input ref='name' defaultValue='nasa' />
      </div>
    )
  }
})

export default MyForm
