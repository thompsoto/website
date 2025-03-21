import './assets/styles.css';

function App() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <img src={require('./assets/icon.png')} alt='icon' className='icon'/>
        <ul className='navbar-menu'>
          <li className='navbar-menu-item'>Projects</li>
          <li className='navbar-menu-item'>Resume</li>
          <li className='navbar-menu-item'>Contact</li>
        </ul>

      </div>
    </div>
  );
}

export default App;
