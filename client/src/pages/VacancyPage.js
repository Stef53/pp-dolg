import React from 'react'
import { Card, Container } from 'react-bootstrap'

const VacancyPage = () => {
  const vacancy = {
    id: 1, title: "Frontend-разработчик в Сбер", description: 'IT-хаб финтеха ищет опытных frontend-разработчиков. ВЫГОДЫ Получайте внушительную зарплату - обговорим на интервью. Работайте из дома или в хабе: выбирайте сами. Стремительно растите вместе с компанией. Получайте новые знания и ценный опыт от руководителей.', company: 'Сбер' }
  return (
    <Container>
      <Card
        style={{ borderRadius: 15 }}
        className='p-4'
      >
        <Card.Title className=' fw-bold'>{vacancy.title}</Card.Title>
        <Card.Text>{vacancy.description}</Card.Text>
        <Card.Text className='mt-2'>{vacancy.company}</Card.Text>
      </Card>
    </Container>
  )
}

export default VacancyPage