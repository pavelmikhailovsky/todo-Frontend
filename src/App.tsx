import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

// @ts-ignore
function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Content />
    </div>
  );
}

export default App;
