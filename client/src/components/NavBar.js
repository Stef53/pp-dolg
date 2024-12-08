import React, { useContext } from 'react'
import { Context } from '../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE } from '../utils/consts'
import { NavLink, useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'


const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useNavigate()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <NavLink 
            to={MAINPAGE_ROUTE}
            style={{ fontSize: '24px', textDecoration: 'none', color: 'white' }}
          >
            StudentJobs
          </NavLink>
          {user.isAuth ?
            <Nav className="ml-auto d-flex">
              <Button variant={'outline-light'} className='me-2' onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
              <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto">
              <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    </>
  )
})

export default NavBar