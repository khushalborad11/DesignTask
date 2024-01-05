import React from 'react';

export default function Footer() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-3'>
                    <div className='form-control'>
                        <h2>Get In Touch</h2>
                        <label htmlFor="Name">First name*:</label><br />
                        <input className='form-control' type="text" id="Name" name="Name" value="" /><br />
                        <label htmlFor="email">Email*:</label><br />
                        <input className='form-control' type="email" id="email" name="email" value="" /><br /><br />
                        <textarea className='form-control' cols={20} rows={4}>Messages:</textarea><br /><br />
                        <input className='va1' type="submit" value="Submit"/>                    </div>
                </div>

                <div className='col-lg-3'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4291854622625!2d72.79617587431038!3d21.175102982738014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053f775a9f343%3A0xb013e673cd67f96b!2sResolute%20Solutions!5e0!3m2!1sen!2sin!4v1704371558581!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className='col-lg-3'></div>
            </div>
        </div>
    )
}
