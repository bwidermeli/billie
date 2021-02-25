const React = require('react');
const ReactDOM = require('react-dom');
const { AppContainer } = require('react-hot-loader');

exports.render = (Component) => {
  const pageRender = (ComponentToRender) => {
    ReactDOM.hydrate(
      <AppContainer>
        <ComponentToRender { ...window.__PRELOADED_STATE__ } />
      </AppContainer>,
      document.getElementById('root')
    );
  };

  pageRender(Component);

  if (module.hot) {
    module.hot.accept(Component, () => {
      pageRender(Component);
    });
  }
};
