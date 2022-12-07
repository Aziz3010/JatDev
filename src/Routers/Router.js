import React from 'react';
import {Routes, Route} from "react-router-dom";
import Files from '../Pages/Files/Files';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/files' element={<Files />}/>
        <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default Router;