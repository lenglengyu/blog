import React from 'react';
import ReactDOM from 'react-dom';



const MessageBox = React.createClass({
  render () {
    return (
      <div> 你好 世界！</div>
    )
  }
})

ReactDOM.render(
  <MessageBox />,
  document.getElementById('container')
);
