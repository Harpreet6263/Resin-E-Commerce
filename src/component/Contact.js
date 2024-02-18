import React, { useState } from 'react';
import axios from 'axios';

import contactimg from './gallery/contact.png';
import insta from './gallery/instagram.png';
import linkdin from './gallery/linkedin.png';
export default function Contact() {
    const [fname, setUserfname] = useState('');
    const [lname, setUserlname] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const sendQuery = async () => {
        if (!fname || !lname || !email || !query) {
          setError('Please fill in all required fields');
          return;
        }
        try {
          const response = await axios.post('http://localhost:5001/query', {
            fname,
            lname,
            email,
            query
          });
          setSuccessMessage(response.data.message);
          setError('');

        } catch (error) {
          if (error.response) {
            setError(error.response.data.error);
          } else {
            setError('An error occurred during sending Query');
          }
          setSuccessMessage('');
        }
      };

    return (
        <div className='contactContainer'>
            <div className="contactChild">
                <img src={contactimg} alt="" />
                <div className="aboutus">
                    <h2 style={{color:'rgba(255, 0, 0, 0.625)'}}><b>Welcome to The Resin Room</b></h2>
                    <p id='journey'>Our journey began with a love for creativity and a fascination with resin's endless possibilities. As avid artisans ourselves, we understand the joy that comes from crafting unique resin pieces. Inspired by this passion, we set out to curate a collection of high-quality resin supplies and showcase the work of talented artisans from around the world.</p>
                    <p id="contactus">
                        <b>Get in Touch</b><br /> Have questions or feedback? We'd love to hear from you! Contact our friendly customer support team here and let us know how we can assist you.
                    </p>
                    <div className='contactname'>
                        <div className="contactnameinner">
                            <div className="fname">
                                <label htmlFor="text">First name:</label><br />
                                <input id='fname' type="text" value={fname} onChange={(e) => setUserfname(e.target.value)} />
                            </div>
                            <div className="lname">
                                <label htmlFor="text">Last name:</label><br />
                                <input id='lname' type="text" value={lname} onChange={(e) => setUserlname(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="emailcontact">
                        <div className='emailinner'>
                            <label htmlFor="email">Email:</label><br />
                            <input id='emailtext' type="text"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="query">
                        <div className="queryinner">
                            <label htmlFor="email">Query:</label><br />
                            <textarea id='querytext' type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={sendQuery} id='contactsubmit'>Submit</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                </div>
                <p id="chat">
                  <a href='https://www.instagram.com/the_resin_.room/?hl=en'> <img id='instapic' src={insta} alt="" /></a> Wanna chat with customer service?<a href='https://www.linkedin.com/in/harpreet-singh-kang-2ba9b1230/'><img id='linkdin' src={linkdin} alt="" /></a><br/>
                    Call: +91 9592505443 / +91 7658026462
                </p>
            </div>
        </div>
    )
}
