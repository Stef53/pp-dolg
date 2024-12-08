import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Filters from '../components/Filters'
import VacancyList from '../components/VacancyList'

const MainPage = () => {
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <Filters/>
        </Col>
        <Col md={1}>
        
        </Col>
        <Col md={8}>
          <VacancyList/>
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage