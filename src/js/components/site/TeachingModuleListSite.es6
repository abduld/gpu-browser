import React from 'react';
import JetPack from 'fs-jetpack';

var App = require('remote').require('app');

export default React.createClass({

  displayName: 'TeachingModuleListSite',

  render() {
    var dirs = JetPack.cwd(App.getAppPath()).inspectTree("./content/Teaching Kit - Course Content");
    var numModules = 0;
    for (var idx in dirs.children) {
      var child = dirs.children[idx];
      if (child.name.lastIndexOf("Module", 0) == 0 &&
          child.name.lastIndexOf("Modules Support", 0) != 0) {
        numModules++;
      }
    }
    return (
      <div>
        <div className="ui text container">
          <h1 className="ui dividing header">Teaching Kit Modules</h1>
          <div className="ui grid">
            <div className="four wide column">
              <div className="ui vertical attached tabular menu">
                <a className="item active" data-tab="1">Module 1</a>
                {[...Array(numModules - 1)].map((x, i) =>
                  <a className="item" data-tab={i + 2} key={i+2}>Module {i + 2}</a>
                )}
              </div>
            </div>
            <div className="ui right attached tab segment" data-tab="1">
              foo
            </div>
          </div>

        </div>

      </div>
    );
  }

});
