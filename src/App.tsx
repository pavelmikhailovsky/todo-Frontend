import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

// @ts-ignore
function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Route path='/content' component={Content}/>
      <Route path='/login' component={Login}/>
      <Route path='/registration' component={Registration}/>
    </div>
  );
}

export default App;
