import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './Project'

export default function RouterContainer() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Project />} />
            </Routes>
        </BrowserRouter>
    )
}
