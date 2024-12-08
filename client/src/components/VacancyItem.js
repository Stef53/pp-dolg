import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import '../index.css'
import { useNavigate } from "react-router-dom"
import { VACANCY_ROUTE } from '../utils/consts'

const VacancyItem = ({vacancy}) => {
  const history  = useNavigate()
  return (
    <Container className='mt-3'>
      <Card
        style={{ cursor: 'pointer', borderRadius: 15 }}
        className='p-4 hover-shadow'
        onClick={() => history(VACANCY_ROUTE + '/' + vacancy.id)}
      >
        <Card.Title className=' fw-bold'>{vacancy.title}</Card.Title>
        <Card.Text>{vacancy.description}</Card.Text>
        <Card.Text className='mt-2'>{vacancy.company}</Card.Text>
        <Button className=' align-self-baseline mt-3'>Откликнуться</Button>
      </Card>
    </Container>
  )
}

export default VacancyItem