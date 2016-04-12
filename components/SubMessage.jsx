import React, { PropTypes } from 'react'

const SubMessage = React.createClass({
  getDefaultProps: function() {
    return {
      message:"人间四月芳菲尽"
    };
  },
  render () {
    return (
        <div>{ this.props.message }</div>
    )
  }
})

export default SubMessage
