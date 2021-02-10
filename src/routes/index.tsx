import { Route, Switch } from 'react-router-dom';

import DashBoard from '../pages/DashBoard';
import LogIn from '../pages/LogIn';
import PrivateRoutes from './PrivateRoutes';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={LogIn}/>
      <PrivateRoutes path="/dashboard" exact component={DashBoard} />
    </Switch>
  );
}

export default Routes;