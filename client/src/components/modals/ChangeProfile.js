import React, { useContext, useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { Context } from '../../index'
import { observer } from 'mobx-react-lite';
import { changeProfile, fetchProfile } from '../../http/userAPI';

const ChangeProfile = observer(({show, onHide, id}) => {
  const {profile} = useContext(Context)
  const [surname, setSurname] = useState(profile.studentProfile.surname)
  const [name, setName] = useState(profile.studentProfile.name)
  const [patronimyc, setPatronimyc] = useState(profile.studentProfile.patronimyc)
  const [gender, setGender] = useState(profile.studentProfile.gender)

  const addProfile = async () => {
    const studentProfile = {
      name: name, 
      surname: surname,
      patronimyc: patronimyc,
      gender: gender,
    };

    try {
      await changeProfile(id, studentProfile); // Сначала меняем профиль на сервере

      // Получим обновленные данные после изменения
      const updatedProfile = await fetchProfile(id);
      profile.setStudentProfile(updatedProfile); // Обновляем глобальное состояние
      onHide(); // Закрываем модальное окно
    } catch (error) {
      console.error('Ошибка при изменении профиля:', error);
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
        Редактирование
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form className=''>
        <Form.Control 
          className=' mt-2' 
          placeholder='Введите фамилию'
          value={surname}
          onChange={e => setSurname(e.target.value)}
        >
        </Form.Control>
        <Form.Control 
          className=' mt-2' 
          placeholder='Введите имя'
          value={name}
          onChange={e => setName(e.target.value)}
        >
        </Form.Control>
        <Form.Control 
          className=' mt-2' 
          placeholder='Введите отчество'
          value={patronimyc}
          onChange={e => setPatronimyc(e.target.value)}
        >
        </Form.Control>
        <Form.Control 
          className=' mt-2' 
          placeholder='Введите пол'
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
        </Form.Control>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
      <Button variant={'outline-success'} onClick={addProfile}>Сохранить</Button>
    </Modal.Footer>
  </Modal>
  );
});


export default ChangeProfile