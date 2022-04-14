import React from 'react';
import {
  Redirect,
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
} from 'react-router-dom';

import { useAuth } from '~/hooks/auth';
import { BlankLayout } from '~/pages/_layouts/blank';
import { DefaultLayout } from '~/pages/_layouts/default';
import { LoginFormLayout } from '~/pages/_layouts/loginForm';

interface RouteProps extends ReactDomRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
  useBlankLayout?: boolean;
  useLoginFormLayout?: boolean;
  useDefaultLayout?: boolean;
}

const Route = ({
  isPrivate = false,
  useBlankLayout = false,
  useLoginFormLayout = false,
  useDefaultLayout = false,
  component: Component,
  ...rest
}: RouteProps) => {
  const { user } = useAuth();

  if (!user && isPrivate) {
    return <ReactDomRoute render={() => <Redirect to="/" />} />;
  }

  let Layout = useBlankLayout ? BlankLayout : LoginFormLayout;
  Layout = useDefaultLayout ? DefaultLayout : Layout;

  return (
    <ReactDomRoute
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
