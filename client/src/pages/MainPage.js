import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Filters from '../components/Filters'
import VacancyList from '../components/VacancyList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchDistricts, fetchEmploymentTypes, fetchSpecialties, fetchVacancies } from '../http/vacancyAPI'
import { fetchStatuses } from '../http/applicationsAPI'

const MainPage = observer(() => {
  const {vacancy, application} = useContext(Context)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchEmploymentTypes().then(data => vacancy.setEmploymentTypes(data))
    fetchSpecialties().then(data => vacancy.setSpecialties(data))
    fetchDistricts().then(data => vacancy.setDistricts(data))
    fetchVacancies(null, null, null).then(data => {
      vacancy.setVacancies(data.rows)
    })
    fetchStatuses().then(data => {
      application.setStatuses(data)
    })
  },[])

  useEffect(() => {
    fetchVacancies(vacancy.selectedEmploymentType.id, vacancy.selectedSpecialty.id, vacancy.selectedDistrict.id ).then(data => {
      vacancy.setVacancies(data.rows)
    })
  },[vacancy.selectedEmploymentType, vacancy.selectedSpecialty, vacancy.selectedDistrict])

  const filterVacancies = (searchText, vacancies) => {
    if(!searchText) {
      return vacancies
    }
    return vacancies.filter(({title}) => 
      title.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  return (
    <Container>
      <Row className='mt-5'>
        <Col md={3}>
          <Filters/>
        </Col>
        <Col md={1}>
        
        </Col>
        <Col md={8}>
          <Form className='d-flex align-items-center justify-content-center'>
            <Form.Control
              className='me-2'
              placeholder='Поиск'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            >
            </Form.Control>
            <Button
              onClick={() => {
                const filteredVacancies = filterVacancies(searchTerm, vacancy.vacancies)
                vacancy.setVacancies(filteredVacancies) 
              }}
            >Найти</Button>
          </Form>
          <VacancyList/>
        </Col>
      </Row>
    </Container>
  )
})

export default MainPage