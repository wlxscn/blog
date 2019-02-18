import AboutMe from '../component/AboutMe'                
import Articles from '../component/Articles'
// import ArticleEdit from '../component/ArticleEdit'
// import Detail from '../component/Detail'

export const routes = [
  {
    path: '/',
    component: Articles
  },
  {
    path: '/aboutMe',
    component: AboutMe
  }
]