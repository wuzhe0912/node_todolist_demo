import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/NavBar';
import Photos from 'views/Photos';
import Movie from 'views/Movie';
import Todos from 'views/Todos';
import NotFound from 'views/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Photos}></Route>
        <Route path='/movie' component={Movie}></Route>
        <Route path='/todos' component={Todos}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
