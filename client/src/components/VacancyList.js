import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row } from 'react-bootstrap'
import VacancyItem from './VacancyItem'

const VacancyList = observer(() => {
  const {vacancy} = useContext(Context)
  return (
    <Row className='d-flex'>
      {vacancy.vacancies.map(vacancy =>
        <VacancyItem key={vacancy.id} vacancy={vacancy}/>
      )}
    </Row>
  )
})

export default VacancyList