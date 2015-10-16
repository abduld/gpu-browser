import $ from 'jquery';
// Assure it's available globally.
window.jQuery = $;
window.$ = $;
require('imports?$=jquery!../../../semantic/dist/semantic');
import React from 'react';
import { Link, RouteHandler } from 'react-router';

export default React.createClass({

  displayName: 'App',

  componentDidMount() {
    this.adjustHeightForBeauty();
  },

  render() {
    console.log($.tab);
    return (
      <div className="site ui header">
        <div className="ui inverted menu">
          <Link to="index" className="item">
            <i className="home icon"></i>Index
          </Link>
          <Link to="teachingmodulelist" className="item">
            <i className="teachingmodulelist icon"></i>Modules
          </Link>
          <Link to="licence" className="item">
            <i className="licence icon"></i>Licence
          </Link>
          <div className="right menu">
            <div className="item uiuc-colors">
              UIUC and NVIDIA GPU Teaching Kit
            </div>
          </div>
        </div>
        <div className="main container" ref="main">
          <RouteHandler/>
        </div>
      </div>
    );
  },

  adjustHeightForBeauty() {
    let mainSectionHeight = $(window).height();
    $(React.findDOMNode(this.refs.main)).css('min-height', mainSectionHeight);
  }

});
