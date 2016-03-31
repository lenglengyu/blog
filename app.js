import React from 'react';
import ReactDOM from 'react-dom';



const MessageBox = React.createClass({
  clickHandler(){
    alert('你点了我一下');
  },
  render () {
    return (
      <div onClick={this.clickHandler}> 你好 世界！</div>
    )
  }
})

ReactDOM.render(
  <MessageBox />,
  document.getElementById('container')
);
