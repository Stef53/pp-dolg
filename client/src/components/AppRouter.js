import React, { useContext } from 'react'
import {Route, Navigate, Routes} from 'react-router-dom'
import { MAINPAGE_ROUTE } from '../utils/consts'
import { authRoutes, publicRoutes } from '../routes'
import { Context } from '../index'

const AppRouter = () => {
  const {user} = useContext(Context)

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component/>} exact />
      )}
        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component/>} exact />
        )}
         <Route path="*" element={<Navigate to={MAINPAGE_ROUTE} />}/>
      </Routes>
  )
}

export default AppRouter