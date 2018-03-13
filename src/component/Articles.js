import React, { Component } from 'react'
import List from './List'
import './Articles.less'
import MarkdownEditor from './Markdown'
import {md2Text} from '../utils'
import articleService from '../api/article'

class Articles extends Component {
    constructor (props) {
        super(props)
    }

    state = {
        isEdit: false,
        articles: [],
        showIcon: false
    }

    componentWillMount () {
      this.getArticles()
    }

    componentDidMount () {
      setTimeout(() => {
        this.setState({
          showIcon: true
        })
      }, 2000)
    }

    mde = null

    render () {
        return (
            <div className='articlesContainer'>
               {  
                  !this.state.isEdit ?
                  <List data={this.state.articles} renderItem={this.renderItem}/>: 
                  <MarkdownEditor ref={(mde) => {this.mde= mde}}/>
               }
               {
                  this.state.showIcon &&
                  <div className='addArticle' onClick={this.changeIsEdit}>
                      {!this.state.isEdit ? <i className="fa fa-plus"></i> : <i className="fa fa-book"></i>}
                  </div>
               }
            </div>
        )
    }

    renderItem = (item, index) => (
        <div className='articleItem' key={index} onClick={this.showContent.bind(this, item)}> 
            <i className='fa fa-close' onClick={(e) => {this.deleteActicle(e,index)}}></i> 
            <h1 className='articleItem__title'>{item.title}</h1>
            <h3 className='articleItem__author'>
              {item.summary}
              <span className='continueIcon'>继续阅读...</span>
            </h3>
        </div>
    )

    changeIsEdit = () => {
      this.setState({
        isEdit: !this.state.isEdit
      })
      if(this.state.isEdit) {
        let article = {
            content: this.mde.smde.value(),
            title: this.mde.state.title,
            summary: this.mde.state.summary
        }  
        if(!article.content) {
          return
        }
        articleService.createArticle(article).then((resp) => {
          this.getArticles()
        })
      }
    }

    getArticles = () => {
      return articleService.getArticles().then(({data}) => {
        this.setState({
          articles: data.articleArr
        })
      })
    }

    showContent = (item) => {
      this.props.history.push({
        pathname: `/blog/detail/${item._id}`
      })
    }

    deleteActicle = async (e, index) => {
      e.stopPropagation()
      const result = await articleService.deleteArticle(this.state.articles[index]._id)
      this.getArticles()
    }
}

export default Articles
