import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from '../components/2.Form Validation/Welcome'
import Loingpage from '../components/2.Form Validation/Loingpage'

function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Loingpage />} />
                <Route path='/welcome' element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent