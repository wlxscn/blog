const ArticleModel = require('../model/article')
const article = async (router) => {
  router.post('/create', (ctx) => {
    console.log(ctx)
    const {content, title, summary} = ctx.request.body
    ArticleModel.save({content, title, summary})
    ctx.body = 'success'
  })
  .get('/article', async (ctx) => {
    console.log('article122')
    let articleArr = await ArticleModel.get()
    ctx.body = {
      status: 'success',
      articleArr
    }
  })
  .get('/article/detail/:id', async (ctx) => {
    let article = await ArticleModel.getDetail(ctx.params.id)
    ctx.body = {
      status: 'success',
      article
    }
  })
}

module.exports = article
