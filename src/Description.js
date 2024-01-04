import React from 'react';
import Content1 from './content1.jpg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Description() {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae delectus neque distinctio iure harum veniam rerum adipisci obcaecati, tenetur esse, eius quisquam, fugiat aliquid libero molestias asperiores dolorem. Quasi, quam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consectetur, reprehenderit autem accusantium culpa eum sunt fuga aperiam? Vitae atque vero sequi ipsum asperiores perferendis rem quo delectus mollitia harum.</p>
                    <img className=' img-fluid' src={Content1} alt="Content 1" />
                </Col>
                <Col lg={4}>
                    <img className='fs1 img-fluid' src={Content1} alt="Content 2" />
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero officiis accusamus veritatis, magnam dolor hic dicta fugit ea deserunt, ab delectus beatae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi omnis expedita ab assumenda veritatis quod quibusdam ipsa quae quos voluptatibus fugit hic quidem enim, nobis, nulla veniam saepe placeat. voluptates est rerum minima. Alias, suscipit tenetur.</p>
                </Col>
                <Col lg={4}>
                    <p className='text-center'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos beatae impedit nisi aperiam assumenda voluptate ipsam dolor ea tempora delectus corrupti perferendis ab eum reiciendis, sequi a! Atque, deserunt possimus!culpa neque eaque facilis sequi sed a. dolor sit amet consectetur adipisicing elit. Eos officiis repudiandae tempore quam libero optio? Dolorum error minus similique recusandae enim ea voluptas nostrum iste sequi corrupti! Adipisci, doloribus eveniet?</p>
                    <img className='img-fluid ' src={Content1} alt="Content 3" />
                </Col>
                <Col lg={4}>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae delectus neque distinctio iure harum veniam rerum adipisci obcaecati, tenetur esse, eius quisquam, fugiat aliquid libero molestias asperiores dolorem. Quasi, quam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consectetur, reprehenderit autem accusantium culpa eum sunt fuga aperiam? Vitae atque vero sequi ipsum asperiores perferendis rem quo delectus mollitia harum.</p>
                    <img className=' img-fluid' src={Content1} alt="Content 1" />
                </Col>
                <Col lg={4}>
                    <img className='fs1 img-fluid' src={Content1} alt="Content 2" />
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero officiis accusamus veritatis, magnam dolor hic dicta fugit ea deserunt, ab delectus beatae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi omnis expedita ab assumenda veritatis quod quibusdam ipsa quae quos voluptatibus fugit hic quidem enim, nobis, nulla veniam saepe placeat. voluptates est rerum minima. Alias, suscipit tenetur.</p>
                </Col>
                <Col lg={4}>
                    <p className='text-center'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos beatae impedit nisi aperiam assumenda voluptate ipsam dolor ea tempora delectus corrupti perferendis ab eum reiciendis, sequi a! Atque, deserunt possimus!culpa neque eaque facilis sequi sed a. dolor sit amet consectetur adipisicing elit. Eos officiis repudiandae tempore quam libero optio? Dolorum error minus similique recusandae enim ea voluptas nostrum iste sequi corrupti! Adipisci, doloribus eveniet?</p>
                    <img className='img-fluid ' src={Content1} alt="Content 3" />
                </Col>
            </Row>
        </Container>
    )
}
