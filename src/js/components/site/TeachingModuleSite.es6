import React from 'react';
import JetPack from 'fs-jetpack';

var App = require('remote').require('app');

export default React.createClass({

  displayName: 'TeachingModuleSite',

  render() {
    var dirs = JetPack.cwd(App.getAppPath()).inspectTree("./content/");;
    return (
      <div>
        <h1>Modules</h1>
      </div>
    );
  }

});
