import $ from 'jquery';
import React from 'react';
import JetPack from 'fs-jetpack';

var App = require('remote').require('app');

export default React.createClass({

  displayName: 'TeachingModuleListSite',

  componentDidMount() {
      $('.tabular.menu .item').first().addClass('active');
      $('.ui.segment.tab').first().addClass('active');
      $('.tabular.menu .item').tab();

  },
  render() {
    var dirs = JetPack.cwd(App.getAppPath()).inspectTree("./content/Teaching Kit - Course Content");
    var numModules = 0;
    for (var idx in dirs.children) {
      var child = dirs.children[idx];
      if (child.name.lastIndexOf("Module", 0) == 0 &&
          child.name.lastIndexOf("Module Support", 0) != 0) {
        numModules++;
      }
    }
    var children = Array(numModules + 1);
    for (var idx in dirs.children) {
      var child = dirs.children[idx];
      if (child.name.lastIndexOf("Module", 0) == 0 &&
          child.name.lastIndexOf("Module Support", 0) != 0) {
        var numstr = child.name.replace("Module ", "");
        var n = parseInt(numstr);
        children[n] = child;
      }
    }
    console.log(children);
    return (
      <div>
        <div className="ui text container">
          <h1 className="ui dividing header">Teaching Kit Modules</h1>
          <div className="ui grid">
            <div className="four wide column">
              <div className="ui vertical attached tabular menu">
                {[...Array(numModules - 1)].map((x, i) =>
                  <a className="item" data-tab={i + 1} key={i + 1}>Module {i + 1}</a>
                )}
              </div>
            </div>
            <div className="ui twelve wide stretched column">
              <div className="ui segment tab" data-tab="1" key="1">
                <div className="ui twelve wide segment raised stretched column">
                  <h3 className="ui header">
                    <i className="ui small file powerpoint outline icon">Lectures</i>
                  </h3>
                  <div className="ui items">
                      <div className="ui item"> 1.1: Overview </div>
                      <div className="ui item"> 1.2: Heterogenous Computing </div>
                      <div className="ui item"> 1.3: Portability and Scalability </div>
                  </div>
                </div>
                <div className="ui twelve wide segment raised stretched column">
                  <h3 className="ui header">
                    <i className="ui small file video outline icon">Videos</i>
                  </h3>
                  <div className="ui items">
                      <div className="ui item"> 1.1: Overview </div>
                      <div className="ui item"> 1.2: Heterogenous Computing </div>
                      <div className="ui item"> 1.3: Portability and Scalability </div>
                  </div>
                </div>
                <div className="ui twelve wide segment raised stretched column">
                  <h3 className="ui header">
                    <i className="ui small file code outline icon">Labs</i>
                  </h3>
                  <div className="ui items">
                  </div>
                </div>
              </div>
            </div>
            <div className="ui twelve wide stretched column">
            {[...Array(numModules - 1)].map((x, i) =>
              <div className="ui segment tab" data-tab={i + 1} key={i + 1}>
                <h2 className="ui dividing header">{ children[i + 1].name }</h2>
              </div>
            )}
            </div>
          </div>

        </div>

      </div>
    );
  }

});
