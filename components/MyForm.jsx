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
  render () {
    return (
      <div>

        姓名 <input ref='name' defaultValue={this.props.params.name} />

    <br />

    <a href="javascript:;" onClick={this.goBack}>go back</a>
      </div>
    )
  }
})

export default MyForm
