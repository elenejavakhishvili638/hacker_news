import './App.css';
import News from './components/News';
import Pages from './components/Pages';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
        <SearchForm />
        <Pages />
        <News />
      </div>
    </div>
  );
}

export default App;
