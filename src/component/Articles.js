import React, { Component } from 'react'
import List from './List'
// import MarkdownEditor from './Markdown'
// import { md2Text } from '../utils'
import { connect } from "react-redux"
import { fetchData } from "../store"
import articleService from '../api/article'
import styles from './Articles.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
@withStyles(styles)
class Articles extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    isEdit: false,
    showIcon: false
  }

  componentDidMount() {
    this.props.fetchData()
    setTimeout(() => {
      this.setState({
        showIcon: true
      })
    }, 2000)
  }

  mde = null

  render() {
    let { articles } = this.props
    return (
      <div className='articlesContainer'>
        {
          !this.state.isEdit ?
            <List data={articles || []} renderItem={this.renderItem} /> : null
          // <MarkdownEditor ref={(mde) => {this.mde= mde}}/>
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
      <i className='fa fa-close' onClick={(e) => { this.deleteActicle(e, index) }}></i>
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
    if (this.state.isEdit) {
      let article = {
        content: this.mde.smde.value(),
        title: this.mde.state.title,
        summary: this.mde.state.summary
      }
      if (!article.content) {
        return
      }
      articleService.createArticle(article).then((resp) => {
        this.getArticles()
      })
    }
  }

  getArticles = () => {
    return new Promise((resolve, reject) => {
      articleService.getArticles().then(({ data }) => {
        this.setState({
          articles: data.articleArr
        })
        resolve()
      }).catch((err) => {
        reject(err)
        console.log('err:', err)
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
    await articleService.deleteArticle(this.state.articles[index]._id)
    this.getArticles()
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state
  }
}

const mapDispatchToProps = {
  fetchData
}

Articles.asyncData = fetchData


export default connect(mapStateToProps, mapDispatchToProps)(Articles)
