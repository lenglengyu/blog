import React from 'react';
import ReactDOM from 'react-dom';



const MessageBox = React.createClass({
  getInitialState: function() {
    return {
      message: '你好 世界！(state)',
      isVisible: true
    };
  },
  clickHandler(){
    this.setState({
      isVisible: !this.state.isVisible
    });
  },
  render () {
    let styleObj = {
      display: this.state.isVisible?"block":"none"
    }
    return (
      <div>
        <h1 style={ styleObj }> {this.state.message}</h1>
        <a onClick={this.clickHandler}>点我</a>
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
