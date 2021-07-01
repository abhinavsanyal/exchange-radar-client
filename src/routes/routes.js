//------------------------------Start----------------------------------------//
import React from "react";

//------------------------------Routing--------------------------------------//
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


//------------------------------Routes---------------------------------------//
import { routes } from "./routeConstants";

//------------------------------End------------------------------------------//

const Routes = ({ user }) => {

  return (
    <Router basename="/exchange-radar">
      <>
        <Switch>
          {routes.map((routeItem, index) => {
            return (
              <Route
                path={routeItem.path}
                render={(props) => routeItem.render(props)}
                key={index}
              />
            );
          })}
          <Route render={() => <Redirect to="/login" />} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;
