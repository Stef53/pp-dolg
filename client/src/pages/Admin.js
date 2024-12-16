import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateVacancy from '../components/modals/сreateVacancy'
import { observer } from 'mobx-react-lite'


const Admin = observer(() => {
  const [vacancyVisible, setVacancyVicible] = useState(false)

  return (
    <Container className='d-flex flex-column'>
      <Button variant={'outline-dark'} className='mt-3 p-2' onClick={() => setVacancyVicible(true)}>Добавить вакансию</Button>
      <CreateVacancy show={vacancyVisible} onHide={() => setVacancyVicible(false)}/>
    </Container>
  )
})

export default Admin