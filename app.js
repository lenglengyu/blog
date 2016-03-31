import React from 'react';
import ReactDOM from 'react-dom';



const MessageBox = React.createClass({
  clickHandler(){
    alert('你点了我一下');
  },
  render () {
    return (
      <div>
        <div onClick={this.clickHandler}> 你好 世界！</div>
        <SubMessage />
      </div>
    )
  }
})


const SubMessage = React.createClass({
  render () {
    return (
      <div>
        <div>写代码也是艺术</div>
        <Footer />
      </div>
    )
  }
})


const Footer = React.createClass({
  render () {
    return (
      <div>我们用代码在创作</div>
    )
  }
})





ReactDOM.render(
  <MessageBox />,
  document.getElementById('container')
);
