import React from 'react';
import Router, { HashLocation, Route } from 'react-router';
import App from 'components/App';
import IndexSite from 'components/site/IndexSite';
import ModulesSite from 'components/site/ModulesSite';
import LicenceSite from 'components/site/LicenceSite';


let routes = (
  <Route handler={ App }>
    <Route name="index" path="/" handler={ IndexSite }/>
    <Route name="modules" path="/modules" handler={ ModulesSite }/>
    <Route name="licence" path="/licence" handler={ LicenceSite }/>
  </Route>
);


Router.run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
