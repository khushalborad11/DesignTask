import React from 'react'
import Container from 'react-bootstrap/Container';
import './App.css';
export default function Process() {
    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className='d1'>How We Do It</h1>
                <p className='ca1'>Lorem ipsum dolor nihilincidunt enim odit rem, tempore et beatae qgnam fugit laudantium ut.</p>
            </div>
            <div className='text-center d-flex justify-content-around'>
                <div>
                    <i class="fa fa-users" style={{ fontSize: '100px' }}></i>
                    <h3>Discuss</h3>
                    <p className='ca1'>Lorem ipsum dolor nihilincidunt enim odit rem, tempore et beatae qgnam fugit laudantium ut.</p>
                </div>
                
                <div>
                    <i class="fa fa-vcard-o" style={{ fontSize: '100px' }}></i>

                    <h3>Design</h3>
                    <p className='ca1'>Lorem ipsum dolor nihilincidunt enim odit rem, tempore et beatae qgnam fugit laudantium ut.</p>
                </div>
                <div>
                    <i class="fa fa-user-plus" style={{ fontSize: '100px' }}></i>
                    <h3>Deploy</h3>
                    <p className='ca1'>Lorem ipsum dolor nihilincidunt enim odit rem, tempore et beatae qgnam fugit laudantium ut.</p>
                </div>
                <div>
                    <i class="fa fa-window-restore" style={{ fontSize: '100px' }}></i>
                    <h3>Deliver</h3>
                    <p className='ca1'>Lorem ipsum dolor nihilincidunt enim odit rem, tempore et beatae qgnam fugit laudantium ut.</p>
                </div>
            </div>
        </div>
    )
}
