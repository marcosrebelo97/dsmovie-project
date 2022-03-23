import {ReactComponent as GithubLogo} from 'assets/img/github.svg';
import './styles.css';


function Navbar(){
    return (
        <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>MGR - Movies</h1>
            <a href="https://github.com/marcosrebelo97/dsmovie-project">
              <div className='dsmovie-contact-container'>
                <GithubLogo />
                <p className='dsmovie-contact-link'>marcosrebelo97</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;