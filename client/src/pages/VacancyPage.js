import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import {useNavigate, useParams} from 'react-router-dom'
import { deleteVacancy, fetchOneVacancy } from '../http/vacancyAPI'
import { Context } from '..';
import ApplicationList from '../components/ApplicationList';
import CreateApplication from '../components/modals/CreateApplication'
import { fetchAdminApplications, fetchStatuses } from '../http/applicationsAPI';
import { MAINPAGE_ROUTE } from '../utils/consts';

const VacancyPage = () => {
  const [applicationVisible, setApplicationVisible] = useState(false)
  const {user, application} = useContext(Context)
  const [vacancy, setVacancy] = useState({})
  const {id} = useParams()
  const history = useNavigate()
  useEffect(() => {
    fetchOneVacancy(id).then(data => {
      setVacancy(data)
    })
    if (user.user.role === "ADMIN") {
      fetchAdminApplications(id).then(data => {
        application.setApplications(data)
      })
      fetchStatuses().then(data => {
        application.setStatuses(data)
      })
    }
  }, []);

  return (
    <Container className='mt-3'>
      <h1 className='text-center'>Вакансия</h1>
      <Card style={{ borderRadius: 15 }} className='p-4 mt-4'>
        <Card.Title className='fw-bold'>{vacancy.title}</Card.Title>
        <Card.Text>{vacancy.description}</Card.Text>
        {user.isAuth &&
          <Button 
            className='mt-2 align-self-baseline'
            onClick={() => setApplicationVisible(true)}
          >
            Откликнуться
          </Button>
        }
      </Card>
      {user.user.role === "ADMIN" &&
        <div>
          <Button 
            className=' bg-danger mt-2'
            onClick={() => {
              deleteVacancy(id)
              history(MAINPAGE_ROUTE)
              alert("Вакансия успешно удалена")
            }}
          >
            Удалить вакансию
          </Button>
          <h2 className='mt-4 text-center'>Отклики на вакансию</h2>
          <ApplicationList />
        </div>
      }
      <CreateApplication show={applicationVisible} onHide={() => setApplicationVisible(false)}/>
    </Container>
  );
};

export default VacancyPage;