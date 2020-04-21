import React from 'react';
import './app.css';
import ContactList from '../data/contacts';
import renderer from './../index';

let contactIndex = 0;

const contactDetails = (contact) => (
    <div className="content">
        <div className="info">
            <div className="col">
                <span className="avatar">&#9787;</span>
            </div>
            <div className="col">
                <span className="name">{contact.firstName}</span>
                <span className="name">{contact.lastName}</span>
            </div>
        </div>
        <div className="info">
            <span className="info-line">&phone; {contact.phone}</span>
            <span className="info-line">&#9993; {contact.email}</span>
        </div>
    </div>
);

const selectDetailsContent = (index) => {
    contactIndex = index;
    renderer(App(), document.getElementById('root'));
};

const showContact = (data, currentIndex) => (
    <div className="contact" data-id="id" key={data.email}
         onClick={(event => selectDetailsContent(currentIndex, event))}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{data.firstName} {data.lastName}</span>
    </div>
);

const renderList = () => {
    const allContactsList = [];
    for (let contact of ContactList) {
        allContactsList.push(showContact(contact, allContactsList.length));
    }
    return allContactsList;
};

function App() {
    return (
        <div className="container">
            <header>&#9993; Contact Book</header>
            <div id="book">
                <div id="list">
                    <h1>Contacts</h1>
                    <div className="content">

                        {renderList()}

                    </div>
                </div>
                <div id="details">
                    <h1>Details</h1>

                    {contactDetails(ContactList[contactIndex])}

                </div>
            </div>
            <footer>Contact Book SPA &copy; 2017</footer>
        </div>
    );
}

export default App;
