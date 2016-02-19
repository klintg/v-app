import React from 'react';
import marked from 'marked';

var MarkdownEditor = React.createClass({
  getInitialState() {
    return {value: 'insert all ur shit ryt here'}
  },
  handleChange() {
    this.setState({value: this.refs.textarea.value})
  },
  rawMarkup() {
    return {__html: marked(this.state.value, {sanitize: true})};
  },
  render() {
    return(
      <div className='MarkdownEditor'>
        <h2> Insert </h2>
        <textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value}/>

        <h3>output</h3>
        <div className= 'content' dangerouslySetInnerHTML={this.rawMarkup()}></div>
      </div>
    )
  }
})
export default MarkdownEditor;
// so what is happening here is that we have markdowneditor that gets the initial state
//and it also has the handle bar.we also have a raw mark up with is a function .
// now the handlehange sets the state ofthe value as teh
