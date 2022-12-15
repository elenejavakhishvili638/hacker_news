import './App.css';
import News from './components/News';
import Pages from './components/Pages';
import SearchForm from './components/SearchForm';
import {useNewsContext} from "./context/NewsContext"
import Load from './components/Load';

function App() {
  
  const {load} = useNewsContext()

  return (
    <div className="App">
      <div className='app-wrapper'>
        <SearchForm />
        <Pages />
        {load ? <Load /> : <News />}
      </div>
    </div>
  );
}

export default App;
