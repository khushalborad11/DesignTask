import React from 'react'
import Button from 'react-bootstrap/Button';
import './App.css';
import Image from './images.jpg';
export default function Poster() {
    return (
        <>
            <section>
                
                <div className='row'>
                    {/* <div className='col-lg-2'></div> */}
                    <div className='col-lg-6 d-flex justify-content-center text-center'>
                        <div className='w-50'>
                            <h1 className='s1'>Graphic Design</h1>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed<span className='s1'>blanditiis</span> , placeat libero dolore autem iure culpa amet similique <span className='s1'>harum a exercitationem</span> tenetur nostrum voluptates repudiandae aliquid,Lorem ipsum dolor sit amet consectetur adipisicing at facere dolorum.</p>
                            <button className='va1'>
                                 QUOTE
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-6 vd1'>
                        <img className='img-fluid' src={Image} />
                    </div>
                </div>
            </section>
        </>
    )
}
