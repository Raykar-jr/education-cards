import React from 'react';
import './App.css';
import {Error404} from "../common/components/Error404/Error404";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "../features/Profile/Profile";
import {Login} from "../features/Login/Login";
import {Registration} from "../features/Registration/Registration";
import {CreateNewPassword} from "../features/Password/CreateNewPassword/CreateNewPassword";
import {RecoveryPassword} from "../features/Password/RecoveryPassword/RecoveryPassword";
import {PATH} from "../common/path/path";
import {Test} from "../common/components/Test/Test";


export const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<h1>Hello from hello</h1>}/>
            <Route path={PATH.PROFILE.PROFILE} element={<Profile />} />
            <Route path={PATH.LOGIN.LOGIN} element={<Login />} />
            <Route path={PATH.LOGIN.REGISTRATION} element={<Registration />} />
            <Route path={PATH.LOGIN.CREATE_NEW_PASSWORD} element={<CreateNewPassword />} />
            <Route path={PATH.LOGIN.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
            <Route path={PATH.COMMON.ERROR404} element={<Error404 />} />
            <Route path={'*'} element={<Navigate to={PATH.COMMON.ERROR404} />} />
            <Route path='/test' element={<Test />}/>
        </Routes>
        <NavLink to={'test'}> Show test page</NavLink>
    </div>
  );
}

