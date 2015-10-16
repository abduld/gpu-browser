import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';

export default React.createClass({

  displayName: 'licenceite',

  getInitialState() {
    return getStoreState();
  },

  render() {
    return (
      <div className="ui minimal licence">
        <h3 className="ui dividing header">Licence</h3>
        { _.map(this.state.licence, (licence) => (
          <div className="licence" key={ licence.id }>
            <a className="avatar">
              <img src={ licence.user.avatar } />
            </a>
            <div className="content">
              <a className="author">{ licence.user.name }</a>
              <div className="metadata">
                <span className="date">
                  { licence.createdAt }
                </span>
              </div>
              <div className="text">
              { licence.content }
              </div>
            </div>
          </div>
        )) }
        <form className="ui reply form">
          <div className="field">
            <textarea name="content" ref="newlicence"></textarea>
          </div>
          <div className="ui blue labeled submit icon button"
              onClick={ this.onCreatelicence }>
            <i className="icon edit"></i> Add Reply
          </div>
        </form>
      </div>
    );
  }

});
