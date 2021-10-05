import Login from './pages/login';
import SignUp from './pages/signup';
import Main from './pages/main';
import MyOrder from './pages/my_order';
import Order from './pages/order';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Login}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/main' component={Main}></Route>
        <Route path='/myorder' component={MyOrder}></Route>
        <Route path='/order' component={Order}></Route>
      </Switch>
    </>
  );
};

export default App;
