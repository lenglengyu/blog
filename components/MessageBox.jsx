import React, { PropTypes } from 'react'

import SubMessage from "./SubMessage.jsx";

const MessageBox = React.createClass({
  goForm(){
    global.hashHistory.push('/form/白居易?title=大林寺桃花')
  },
  getDefaultProps: function() {
    console.log('0-getDefaultProps');
    return {

    };
  },
  getInitialState: function() {
    console.log('1-getInitialState');
    return {
      messages:[
        '大林寺桃花',
        '白居易',
        '人间四月芳菲尽，山寺桃花始盛开。',
        '长恨春归无觅处，不知转入此中来。'
      ]
    };
  },
  componentWillMount() {
    console.log('2-componentWillMount');
  },
  componentDidMount() {
    console.log('4-componentDidMount');
  },
  renderMessages(){
    let i = 0
    return this.state.messages.map((item) => {
      i ++
      return <SubMessage key={i} message={ item }/>
    })
  },
  componentWillUnmount(){
    console.log('5-componentWillUnmount');
  },
  render () {
    console.log('3-render');
    return (
      <div>
        { this.renderMessages() }
        <br />
        <a href="javascript:;" onClick={this.goForm}>go form</a>
      </div>
    )
  }
})

export default MessageBox
