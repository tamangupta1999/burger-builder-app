import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilders/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

// const Checkout = React.lazy(() => import("./containers/Checkout/Checkout"))

// const Orders = React.lazy(() => {
//   return ('./containers/Orders/Orders');
// });

// const Auth = React.lazy(() => {
//   return ('./containers/Auth/Auth');
// });

const app = props=> {

  useEffect(() => {
    props.onTryAutoSignup();
  },[])

    let routes = (
      <Switch>
        <Route path="/auth"  component={Auth}  /* render={() => <Auth />} *//>
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout"  component={Checkout} /* render={() => <Checkout />} *//>
          <Route path="/orders"  component={Orders} /* render={() => <Orders />} *//>
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={Auth}  /* render={() => <Auth />} *//>
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
         <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense> 
        </Layout>
      </div>
    );

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
