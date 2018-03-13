import React, { Component } from 'react'
import articleService from '../api/article'
import {md2Text} from '../utils'
import './Detail.less'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.id = this.props.match.params.id
  }

  state = {
    article: {}
  }

  componentWillMount () {
    this.getDetail(this.id)
  }

  getDetail = (id) => {
    articleService.getArticleDetail(id).then(({data}) => {
      this.setState({
        article: data.article
      })
    })
  }

  goEditArticle = () => {
    this.props.history.push({
      pathname: `/blog/edit`,
      state: this.state.article
    })
  }

  render () {
    let {article} = this.state
    return (
      <div className='articleItem__content markdown-body'>
        <h1 className='articleItem__title'>{article.title}</h1>
        <div dangerouslySetInnerHTML={md2Text(article.content||'')}></div>
        <div className='editArticle' onClick={this.goEditArticle}>
            <i className="fa fa-edit"></i>
        </div>
      </div>
    )
  }
}

export default Detail