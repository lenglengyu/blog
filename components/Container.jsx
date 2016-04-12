import React, { PropTypes } from 'react'

import MyForm from "./MyForm.jsx";

const Container = React.createClass({
  componentDidMount() {
    console.log(this.refs.form)
    console.log(this.refs.form.props)
    console.log(this.refs.form.getName())
  },
  render () {
    return (
      <MyForm ref='form'/>
    )
  }
})

export default Container
