import React, { Component } from 'react'
import MarkdownEditor from './Markdown'
import api from '../api/article'

class ArticleEdit extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    id: '',
    title: '',
    summary: '',
    content: ''
  }

  componentWillMount() {
      const article = this.props.location.state 
      if(article) {
        this.setState({
          id: article._id,
          title: article.title,
          summary: article.summary,
          content: article.content
        })
      }
  }

  mde = null

  render() {
    return (
      <div className='articlesContainer'>
        <MarkdownEditor article={this.state} ref={(mde) => { this.mde = mde }} publishArticle={this.publishArticle}/>
        <div className='editArticle' onClick={this.publishArticle}>
            <i className="fa fa-book"></i>
        </div>
      </div>
    )
  }

  publishArticle = () => {
    let article= {...this.mde.state, content: this.mde.smde.value()}
    api.updateArticle({id:this.state.id, ...article}).then(() => {
      this.props.history.push({
        pathname: `/blog/detail/${this.state.id}`
      })
    })
  }
}

export default ArticleEdit