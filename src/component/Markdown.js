import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.scss'
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import {marked} from '../utils'

class Markdown extends Component {
    constructor (props) {
      super(props) 
      let {article={}} = props
      this.state = {
        title: article.title || '',
        summary: article.summary || '',
        content: article.content || ''
      }
    }

    smde = null

    componentDidMount () {
      this.smde = new SimpleMDE({
        autoDownloadFontAwesome:false,
        element: document.getElementById('editor'),
        previewRender(plainText) {
          return marked(plainText); // Returns HTML from a custom parser
        },
        spellChecker:false
      })
    }

    render () {
        return (
            <div className='markdownEditor'>
              <div>
                <div className='title'>
                  <label>标题</label>
                  <input value={this.state.title} onChange={this.setTitle}/>
                </div>
                <div className='summary'>
                  <label>概述</label>
                  <input value={this.state.summary} onChange={this.setSummary}/>
                </div>
                <textarea id='editor' value={this.state.content} onChange={this.setContent}/>
              </div>  
            </div>
        )
    }

    setTitle = (e) => {
      this.setState({
        title: e.target.value
      })
    }

    setSummary = (e) => {
      this.setState({
        summary: e.target.value
      })
    }

    setContent = (e) => {
      this.setState({
        content: e.target.value
      })
    }
}

export default Markdown