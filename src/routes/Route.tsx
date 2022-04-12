import React from 'react';
import {
  Redirect,
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
} from 'react-router-dom';

import { useAuth } from '~/hooks/auth';
import { BlankLayout } from '~/pages/_layouts/blank';
// import { DefaultLayout } from '~/pages/_layouts/default';

interface RouteProps extends ReactDomRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) => {
  const { user } = useAuth();

  // const Layout = user ? BlankLayout : DefaultLayout;

  let redirectPath = isPrivate ? '/' : '/dashboard';

  if (user && isPrivate) {
    redirectPath = '/forbidden';
  }

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <BlankLayout>
            <Component />
          </BlankLayout>
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
