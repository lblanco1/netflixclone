import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Usuário"/>
                
                { /* <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/> */ }
                </a>
            </div>
        </header>
    );
}