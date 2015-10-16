import React from 'react';
import Router, { HashLocation, Route } from 'react-router';
import App from 'components/App';
import IndexSite from 'components/site/IndexSite';
import TeachingModuleSite from 'components/site/TeachingModuleSite';
import TeachingModuleListSite from 'components/site/TeachingModuleListSite';
import LicenceSite from 'components/site/LicenceSite';


let routes = (
  <Route handler={ App }>
    <Route name="index" path="/" handler={ IndexSite }/>
    <Route name="modules" path="/modules" handler={ TeachingModuleListSite }/>
    <Route name="teachingmodulelist" path="/teachingmodulelist" handler={ TeachingModuleListSite }/>
    <Route name="teachingmodule" path="/teachingmodule/:id" handler={ TeachingModuleSite }/>
    <Route name="licence" path="/licence" handler={ LicenceSite }/>
  </Route>
);


Router.run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
