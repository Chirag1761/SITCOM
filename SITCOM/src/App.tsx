import React from 'react'
import './globals.css'
import SignInform from './auth/forms/SignInform';
import SignUpform from './auth/forms/SignUpform';
import Home from './root/pages/Home';
import AuthLayout from './auth/AuthLayout'

import { Routes, Route } from 'react-router-dom';
import RootLayout from './root/pages/RootLayout';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
          {/* {public routes} */}
          <Route element={<AuthLayout/>}>
            <Route path="/sign-in" element={<SignInform />}/>
            <Route path="/sign-up" element={<SignUpform />}/>
          </Route>

           {/* {private routes} */}
           <Route element={<RootLayout/>}>
            <Route index element={<Home />}/>
           </Route>

        </Routes>

    </main>
  )
}

export default App