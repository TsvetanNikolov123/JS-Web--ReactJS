import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function renderApp() {
    ReactDOM.render(
        <Header/>,
        document.getElementById('root')
    );
}

let logoText = 'Logo Placeholder';

const handleNavLink = (event) => {
    event.preventDefault();
    const content = event.target.innerHTML;
    logoText = content;
    renderApp();
};

const Logo = () => {
    return (
        <div>
            <h1>{logoText}</h1>
        </div>
    );
};

const Navigation = () => {
    const className = 'site-nav';
    const linkClassName = `${className}-link`;

    return (
        <nav className={className}>
            <ul>
                <li><a className={linkClassName} href="/" onClick={handleNavLink}>Home</a></li>
                <li><a className={linkClassName} href="/contact" onClick={handleNavLink}>Contact</a></li>
                <li><a className={linkClassName} href="/about" onClick={handleNavLink}>About</a></li>
            </ul>
        </nav>
    )
};

const Header = () => {
    return (
        <header>
            <Logo/>
            <Navigation/>
        </header>
    );
};

renderApp();
