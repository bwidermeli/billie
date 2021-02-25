const React = require('react');
const PropTypes = require('prop-types');
const Head = require('react-declarative-head');

const Layout = (props) => {
  const pageTitle = props.layout.pageTitle || 'Billie mission 2120';
  // eslint-disable-next-line max-len
  const pageDescription = props.layout.pageDescription || 'Once upon a time in the year 2120... Humans finally met extraterrestrial civilizations. Spaceships are now able to travel to galaxies far away. Isaac Asimov can finally be proud of us.';

  return (
    <div className="App">
      <Head>
        <title>{pageTitle}</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={pageDescription} />
      </Head>
      <div id="root">
        {'{{children}}'}
      </div>
    </div>
  );
};


/**
 * Prop Types
 */
Layout.propTypes = {
  layout: PropTypes.shape({
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.string,
  }),
};

/**
 * Default Props
 */

Layout.defaultProps = {
  layout: {
    pageTitle: '',
    pageDescription: '',
  },
};

module.exports = Layout;
