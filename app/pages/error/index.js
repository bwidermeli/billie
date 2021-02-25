const React = require('react');

const Error = props => (
  <div>
    <div className="content">
      <div className="circle">
        <h1 className="circle-header">
          Oops!
        </h1>
      </div>
      <div className="preamble">
        <h2 className="info-header">
          Don't freak out, keep calm, we're on it!
        </h2>
        <p className="info-text">
          You have reached to a pretty error page. This might be caused by a 404 error or maybe we just did something wrong, please try again. Cheers and sorry for the inconvenience!
        </p>
      </div>
    </div>
  </div>
);

module.exports = Error;
