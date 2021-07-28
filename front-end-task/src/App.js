import './App.css';
import routes from './routes';
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      {
        routes.map((route, idx) => {
          return(
            <Route key={idx} {...route} />
          )
        })
      }
    </Switch>
  );
}

export default App;
