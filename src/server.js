import express from "express";
import path from "path";
import serverApp from './ServerApp'
import {routes} from './route'
import { matchPath } from "react-router-dom"
import createStore from "./store"
const app = express();
app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
  const store = createStore()
  const dataRequirements = routes
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.asyncData) // check if components have data requirement
    .map(comp => store.dispatch(comp.asyncData())); // dispatch data requirement
  
  Promise.all(dataRequirements).then(() => {
    const { html = '', style = '', reduxState } = serverApp.render(req, store)
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplate(html, style, reduxState));
  })
})

app.listen(2048)

function htmlTemplate(html, style, reduxState) {
  return `
        <html>
            <head>
                <meta charset="utf-8">
                <title>博客</title>
                ${style ? `<style>${style}</style>` : ''}
                <script>
                  window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
                </script>
            </head>
            <body>
                <div id="root">${html}</div>
                <script src='/app.bundle.js'></script>
            </body>
        </html>
    `;
}