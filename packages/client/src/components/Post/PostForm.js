import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { css } from 'glamor'

class PostForm extends Component {

  state = {
    author: "",
    title: "",
    body: "",
    category: ""
  }

  componentDidMount() {
    if( this.props.post !== undefined ) {
      this.setState({
        author: this.props.post.author,
        title: this.props.post.title,
        body: this.props.post.body,
        category: this.props.post.category
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.post !== undefined ) {
      this.setState({
        author: nextProps.post.author,
        title: nextProps.post.title,
        body: nextProps.post.body,
        category: nextProps.post.category
      })
    }
  }

  selectCategory = (e) => {
    this.setState({ 
      category: e.target.value 
    })
  }

  cancelPostAdd = (e) => {
    e.preventDefault()

    if ( this.props.history.action === 'PUSH')
      this.props.history.goBack()
    else
      this.props.history.push("/")
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
    const { onFormSubmit, formTitle } = this.props
    const { categories } = this.props.categories

    return (
      <form onSubmit={onFormSubmit}>
        <div>
          <h4 {...styles.title}>{formTitle}</h4>
        </div>
        <div>
          <div>
            <label {...styles.label}>Name: </label>
            <input  
              {...styles.nameInput}
              type="text" 
              name="author" 
              placeholder="Name" 
              value={this.state.author}
              onChange={e => this.handleInputChange(e)}
              required />
          </div>
          <div>
            <label {...styles.label}>Title: </label>
            <input 
              {...styles.titleInput}
              type="text" 
              name="title" 
              value={this.state.title}
              placeholder="Post title" 
              onChange={e => this.handleInputChange(e)}
              required />
          </div>
          <div>
            <textarea 
              {...styles.messageInput}
              name="body"
              rows="3"
              value={this.state.body}
              placeholder="Type your message here"
              onChange={e => this.handleInputChange(e)}
              required
            ></textarea>
          </div>
          <div>
            <label {...styles.label}>Select Category: </label>
            <div {...styles.categoryInputContainer} data-toggle="buttons">
              {categories 
                && categories.map(category => (
                  <label 
                    key={category.path}
                    onClick={this.selectCategory}
                  >
                    <input 
                      {...styles.categoryInput}
                      type="radio" 
                      name="category" 
                      value={category.name} 
                    /> 
                    {category.name}
                  </label>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button {...styles.cancelBtn} onClick={this.cancelPostAdd}>
            Cancel
          </button>
          <button {...styles.submitBtn} disabled={!this.state.category}>
            Submit
          </button>
        </div>
      </form>
    )
  }
}

const styles = {
  container: css({
    maxWidth: '75%',
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.14)'
  }),
  title: css({
    fontFamily: 'monospace',
    fontSize: 25
  }),
  label: css({
    fontFamily: 'monospace',
    fontSize: 20
  }),
  nameInput: css({
    padding: 10,
    margin: 10,
    width: 250,
  }),
  titleInput: css({
    padding: 10,
    marginTop: 0,
    marginLeft: -2,
    width: 250,
  }),
  messageInput: css({
    padding: 10,
    margin: 10,
    width: 550,
    height: 250
  }),
  categoryInputContainer: css({
    display: 'inline',
    fontFamily: 'monospace',
    padding: 10
  }),
  categoryInput: css({
    width: 5,
    marginLeft: 17,
    marginRight: 7,
    padding: 12,
    height: 11,
    display: 'inline-block',    
    verticalAlign: 'middle'
  }),
  cancelBtn: css({
    position: 'relative',
    fontFamily: 'monospace',
    textDecoration: 'none',
    backgroundColor: '#777777',
    color: 'white',
    padding: 10,
    fontSize: 'x-large',
  }),
  submitBtn: css({
    position: 'relative',
    margin: 10,
    fontFamily: 'monospace',
    textDecoration: 'none',
    backgroundColor: '#c13838',
    color: 'white',
    padding: 10,
    fontSize: 'x-large',
  }),
}

const mapStateToProps  = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(PostForm))