import React from 'react';
import ReactDOM from 'react-dom';



const MessageBox = React.createClass({
  getInitialState: function() {
    return {
      message: '你好 世界！(state)',
      clickCount: 0
    };
  },
  clickHandler(){
    this.setState({
      clickCount: this.state.clickCount+1
    });
  },
  render () {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <a onClick={this.clickHandler}>点我</a>
        <div>你一共点击了我{ this.state.clickCount}下</div>
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
