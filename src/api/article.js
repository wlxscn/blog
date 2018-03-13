import Axios from 'axios'

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