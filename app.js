import React from 'react';
import ReactDOM from 'react-dom';



const MessageBox = React.createClass({
  getInitialState: function() {
    return {
      messages:[
        '大林寺桃花',
        '白居易',
        '人间四月芳菲尽，山寺桃花始盛开。',
        '长恨春归无觅处，不知转入此中来。'
      ]
    };
  },
  renderMessages(){
    let i = 0
    return this.state.messages.map((item) => {
      i ++
      return <SubMessage key={i} message={ item }/>
    })
  },
  render () {
    return (
      <div>
        { this.renderMessages() }
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
