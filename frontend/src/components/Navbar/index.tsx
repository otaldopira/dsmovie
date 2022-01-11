import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';

import './style.css';

function Navbar(){

    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
            <h1 className="dsmovie-content-h1">DSMovie</h1>
            <a href="https://github.com/otaldopira">
                <div className="dsmovie-content-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/otaldopira</p>
                </div>
            </a>
            </div>
        </nav>
        </header>
    );

}

export default Navbar;