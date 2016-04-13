import React, { PropTypes } from 'react'
import ReactDOM from "react-dom";

const MyForm = React.createClass({
  goBack(){
    global.hashHistory.goBack()
  },
  getName(){
    return this.refs.name.value
  },
  getDefaultProps: function() {
    // console.log('MyForm-getDefaultProps');
    return {
      show: true
    };
  },
  componentWillMount() {
      console.log(this.props.location.query.title)
  },
  componentDidMount: function() {
    // console.log(this.refs.name);
    // console.log(this.refs.name.value);
  },

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  },
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  },
  render () {
    return (
      <div>

        姓名 <input ref='name' defaultValue={this.props.params.name} />

    <br />
    <div>{this.props.params.name}</div>
    <br />

    <a href="javascript:;" onClick={this.goBack}>go back</a>
      </div>
    )
  }
})

export default MyForm
