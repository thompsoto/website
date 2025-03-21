import './assets/styles.css';
import generateSubtitle from './scripts/subtitle';

// Ensure the DOM is fully loaded before the script runs
document.addEventListener('DOMContentLoaded', () => {
    // The subtitle.js file already sets up the interval to update the subtitle
    console.log('Subtitle generator initialized.');
});

function App() {
  return (
    <>
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
      <div className='content'>
        <h1 className='content-title'>Hi, I'm Mateo</h1>
        <div className='content-subtitle-container'>
          <h2 className='content-subtitle' id='content-subtitle'></h2>
          <span className='blinker'></span>
        </div>
      </div>
    </>
  );
}

export default App;
