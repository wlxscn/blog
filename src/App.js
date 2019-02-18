import React from 'react';

import AppProvider from './AppProvider';

import AppContent from './AppContent';
const CssContext = { insertCss: () => '' };
class App extends React.PureComponent {
  render() {
    return (
      <AppProvider context={CssContext}>
        <AppContent />
      </AppProvider>
    )
  }
}

export default App
