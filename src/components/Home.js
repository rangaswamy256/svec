import React from 'react'
import {BrowserRouter,Route, Routes,Link} from 'react-router-dom'
import FormRendering from './FormRendering'
import ListRendering from './ListRendering'
import StatesinFunctionalComponent from './StatesinFunctionalComponent'
import StateinClassComponent from './StateinClassComponent'
import UnionBank from './UnionBank'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main />}> </Route>
                <Route path="/login" element={<FormRendering />}> </Route>
                <Route path="/3" element={<ListRendering />}> </Route>
                <Route path="/4" element={<  StatesinFunctionalComponent/>}> </Route>
                <Route path="/5" element={<  UnionBank />}> </Route>
                <Route path="/6" element={<  AndhraBank />}> </Route>
                <Route path="/7" element={< CorporationBank />}> </Route>
                </Routes>
                </BrowserRouter>


        </div>
    )
}


function Main(){
    return (
        <>
        <h1>::Home page::</h1>
         <Link to='/login'>Login</Link>
         
        </>
    )
}