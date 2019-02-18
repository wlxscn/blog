// ./src/server/bundle.tsx

import React from 'react';
import { StaticRouter, Route } from "react-router-dom";
import { renderToString } from 'react-dom/server';
import AppProvider from './AppProvider'
import AppContent from './AppContent'
import { Provider as ReduxProvider } from "react-redux"

export default {
  render(req, store) {
    const css = []
    const context = {}
    const CssContext = { 
      insertCss: (...styles) => styles.forEach((s) => css.push(s._getCss())) 
    }
    const reduxState = store.getState();
    const html = renderToString(
      <ReduxProvider store={ store }>
        <StaticRouter context={context} location={ req.url }>
          <AppProvider context={CssContext}>
            <AppContent />
          </AppProvider>
        </StaticRouter>
      </ReduxProvider> 
    )
    const style = css.join('');
    return {
      html,
      style,
      reduxState
    }
  }
};
