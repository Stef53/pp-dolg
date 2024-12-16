import React, { useContext, useEffect, useState } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../../index'
import { createVacancy, fetchDistricts, fetchEmploymentTypes, fetchSpecialties } from '../../http/vacancyAPI';
import { observer } from 'mobx-react-lite';

const СreateVacancy = observer(({show, onHide}) => {
  const {vacancy} = useContext(Context)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchEmploymentTypes().then(data => vacancy.setEmploymentTypes(data))
    fetchSpecialties().then(data => vacancy.setSpecialties(data))
    fetchDistricts().then(data => vacancy.setDistricts(data))
  },[])

  const addVacancy = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      
      if (vacancy.selectedEmploymentType.id) {
        formData.append('employmentTypeId', vacancy.selectedEmploymentType.id);
      }
      if (vacancy.selectedSpecialty.id) {
        formData.append('specialtyId', vacancy.selectedSpecialty.id);
      }
      if (vacancy.selectedDistrict.id) {
        formData.append('districtId', vacancy.selectedDistrict.id);
      }
  
      const data = await createVacancy(formData);
      onHide();
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        alert(e.response.data.message);
      } else {
        alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
      }
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить вакансию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className=''>
          <Dropdown className=' m-2'>
            <Dropdown.Toggle>{vacancy.selectedEmploymentType.name || 'Выберите тип занятости'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {vacancy.employmentTypes.map(employmentType => 
                <Dropdown.Item 
                  key={employmentType.id}
                  onClick={() => {
                    vacancy.setSelectedEmploymentType(employmentType)
                  }}
                >
                  {employmentType.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className=' m-2'>
            <Dropdown.Toggle>{vacancy.selectedSpecialty.name || 'Выберите специальность'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {vacancy.specialties.map(specialty => 
                <Dropdown.Item 
                  key={specialty.id}
                  onClick={() => vacancy.setSelectedSpecialty(specialty)}
                >
                  {specialty.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className=' m-2'>
            <Dropdown.Toggle>{vacancy.selectedDistrict.name || 'Выберите район'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {vacancy.districts.map(district => 
                <Dropdown.Item 
                  key={district.id}
                  onClick={() => vacancy.setSelectedDistrict(district)}
                >
                  {district.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control 
            className=' mt-2' 
            placeholder='Введите заголовок вакансии'
            value={title}
            onChange={e => setTitle(e.target.value)}
          >
          </Form.Control>
          <Form.Control
            as="textarea"
            rows={5}
            className=' mt-2' 
            placeholder='Введите описание вакансии'
            value={description}
            onChange={e => setDescription(e.target.value)}
          >
          </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={addVacancy}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
})


export default СreateVacancy