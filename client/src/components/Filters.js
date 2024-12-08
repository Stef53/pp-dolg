import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { ListGroup } from 'react-bootstrap'

const Filters = observer(() => {
  const {vacancy} = useContext(Context)
  return (
    <>
      <p>Тип занятости</p>
      <ListGroup className='mt-2'>
      <ListGroup.Item 
        style={{ cursor: 'pointer' }}
        active={'' === vacancy.selectedEmploymentType}
        onClick={() => vacancy.setSelectedEmploymentType('')}
      >
        Не имеет значения
      </ListGroup.Item>
        {vacancy.employmentTypes.map(employmentType =>
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            key={employmentType.id}
            active={employmentType.id === vacancy.selectedEmploymentType.id}
            onClick={() => vacancy.setSelectedEmploymentType(employmentType)}
          >
            {employmentType.name}
          </ListGroup.Item>
        )}
      </ListGroup>
      <p className='mt-2'>Специальность</p>
      <ListGroup className='mt-2'>
        <ListGroup.Item 
          style={{ cursor: 'pointer' }}
          active={'' === vacancy.selectedSpecialty}
          onClick={() => vacancy.setSelectedSpecialty('')}
        >
          Не имеет значения
        </ListGroup.Item>
        {vacancy.specialties.map(specialty =>
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            key={specialty.id}
            active={specialty.id === vacancy.selectedSpecialty.id}
            onClick={() => vacancy.setSelectedSpecialty(specialty)}
          >
            {specialty.name}
          </ListGroup.Item>
        )}
      </ListGroup>
      <p className='mt-2'>Район</p>
      <ListGroup className='mt-2'>
        <ListGroup.Item 
          style={{ cursor: 'pointer' }}
          active={'' === vacancy.selectedDistrict}
          onClick={() => vacancy.setSelectedDistrict('')}
        >
          Не имеет значения
        </ListGroup.Item>  
        {vacancy.districts.map(district =>
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            key={district.id}
            active={district.id === vacancy.selectedDistrict.id}
            onClick={() => vacancy.setSelectedDistrict(district)}
          >
            {district.name}
          </ListGroup.Item>
        )}
      </ListGroup>
    </>
  )
})

export default Filters