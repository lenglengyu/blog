import React from 'react';
import ReactDOM from 'react-dom';



const MessageBox = React.createClass({
  render () {
    return (
      <div>
        <SubMessage />
      </div>
    )
  }
})


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

ReactDOM.render(
  <MessageBox />,
  document.getElementById('container')
);
