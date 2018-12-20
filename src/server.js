import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import App from "./App";
import buildPath from '../dist/asset-manifest.json'

const app = express();
app.use(express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const jsx = ( 
      <StaticRouter context={{}} location={ req.url }>
        <Route path='/' component={App}/> 
      </StaticRouter> 
    )
    const reactDom = renderToString(jsx);

    res.writeHead(200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate(reactDom) );
});

app.listen(2048)

function htmlTemplate(reactDom) {
    return `
        <html>
            <head>
                <meta charset="utf-8">
                <title>博客</title>
                <link rel="stylesheet" type="text/css" href="/${buildPath['app.css']}">
            </head>
            <body>
                <div id="root">${reactDom}</div>
                <script src="/${buildPath['app.js']}"></script>
            </body>
        </html>
    `;
}