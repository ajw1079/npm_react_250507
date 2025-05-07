import logo from './logo.svg';
import './App.css';
import LinkCp from './components/LinkCp';
import ListCp from './components/ListCp';

function App() {
  const menuArr = ['intro', 'skill', 'portfoilo', 'contact'];

  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          {/* <a href='/'>LOGO</a> */}
          <LinkCp hrefPr='/' textPr='LOGO' />
        </div>

        <nav>
          <ul>
            {menuArr.map((v) => (
              <ListCp hrefPr={`/${v}`} textPr={v} />

            ))}
            
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
