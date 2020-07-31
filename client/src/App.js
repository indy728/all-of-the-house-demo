import React, { Component } from 'react';
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from 'pages';
import Layout from 'hoc/Layout/Layout';
import theme from 'themes';
import GlobalStyle from 'themes/GlobalStyle';

class App extends Component {
  componentDidMount() {
  }

  render() {
    const routeComponents = [
      {
        name: 'Home', component: Home, path: '/', exact: true,
      },
    ];

    const routes = (
      <Switch>
        {routeComponents.map((routeComponent) => {
          const RouteElement = routeComponent.component;
          return (
            <Route
              key={routeComponent.name}
              path={routeComponent.path}
              exact={routeComponent.exact}
              render={() => <RouteElement routeComponents={routeComponents} />}
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    );
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          {routes}
        </Layout>
      </ThemeProvider>
    );
  }
}

export default withRouter((App));
