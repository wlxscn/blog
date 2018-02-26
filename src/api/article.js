import Axios from 'axios'

export default {
  createArticle (article) {
    return Axios.post('/api/create', article)
  },
  getArticles () {
    return Axios.get('/api/article')
  },
  getArticleDetail (id) {
    return Axios.get(`/api/article/detail/${id}`)
  }
}