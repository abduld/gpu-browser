import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';

var licence = require("html!markdown!./CreativeCommons.md?gfm=false");

export default React.createClass({

  displayName: 'LicenceSite',

  render() {
    return (
      <div className="ui licence">
        <div dangerouslySetInnerHTML={{__html: licence}} />
      </div>
    );
  }

});
