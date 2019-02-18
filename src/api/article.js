import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost:3005'

export default {
  createArticle (article) {
    return Axios.post('/api/article/create', article)
  },
  updateArticle (article) {
    return Axios.put('/api/article/update', article)
  },
  getArticles () {
    return Axios.get('/api/article')
  },
  getArticleDetail (id) {
    return Axios.get(`/api/article/detail/${id}`)
  },
  deleteArticle (id) {
    return Axios.delete(`/api/article/${id}`)
  }
}