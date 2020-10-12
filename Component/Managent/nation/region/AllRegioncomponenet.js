import React  from "react"
import {
    BrowserRouter ,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import Region from "./region"
  function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();
  
    return (
        <div>
           <Switch>
          <Route exact path={path} render={() => {
          
          return <Region></Region>}} />
          
           
          <Route path={`${path}/my`}>
           <div>usrhkbgtyhtyhty</div>
          </Route>
        </Switch>
      </div>
    );
  }
  export default Region;