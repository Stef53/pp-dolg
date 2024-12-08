import React, { useContext } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../../index'

const СreateVacancy = ({show, onHide}) => {
  const {vacancy} = useContext(Context)

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
            <Dropdown.Toggle>Выберите тип занятости</Dropdown.Toggle>
            <Dropdown.Menu>
              {vacancy.employmentTypes.map(employmentType => 
                <Dropdown.Item key={employmentType.id}>{employmentType.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className=' m-2'>
            <Dropdown.Toggle>Выберите специальность</Dropdown.Toggle>
            <Dropdown.Menu>
              {vacancy.specialties.map(specialty => 
                <Dropdown.Item key={specialty.id}>{specialty.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className=' m-2'>
            <Dropdown.Toggle>Выберите район</Dropdown.Toggle>
            <Dropdown.Menu>
              {vacancy.districts.map(district => 
                <Dropdown.Item key={district.id}>{district.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className=' mt-2' placeholder='Введите заголовок вакансии'></Form.Control>
          <Form.Control className=' mt-2' placeholder='Введите описание вакансии'></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default СreateVacancy