import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { Context } from '../../index'
import { observer } from 'mobx-react-lite';
import { createApplication } from '../../http/applicationsAPI';
import { useParams } from 'react-router-dom';

const СreateApplication = observer(({show, onHide}) => {
  const {user} = useContext(Context)
  const {id} = useParams()
  const [coverLetter, setCoverLetter] = useState('')
  const [file, setFile] = useState(null)

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addApplication = async () => {
    try {
      const formData = new FormData();
      formData.append('coverLetter', coverLetter);
      formData.append('resume', file);
      formData.append('vacancyId', id);
      formData.append('userId', user.user.id);
      
      const data = await createApplication(formData);
      onHide();
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        alert(e.response.data.message);
      } else {
        alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
      }
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Создать отклик
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className=''>
          <Form.Control 
            as="textarea"
            rows={5}
            className='mt-2' 
            placeholder='Введите текст сопроводительного письма'
            value={coverLetter}
            onChange={e => setCoverLetter(e.target.value)}
          >
          </Form.Control>
          <Form.Control
            className='mt-3'
            type='file'
            onChange={selectFile}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={addApplication}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
})


export default СreateApplication