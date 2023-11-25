import React from 'react'
import Home from './routers/home/Home'
import { Route, Routes } from 'react-router'
import Admin from './routers/admin/Admin'
import Cart from './routers/cart/Cart'
import Login from './routers/login/Login'
import { Auth } from './routers/login/Auth'

function Router() {
    return (
        <div className='router'>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route element={<Auth />}>
                    <Route index path='/' element={<Home />} />
                    <Route path='admin' element={<Admin />} />
                    <Route path='cart' element={<Cart />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Router
