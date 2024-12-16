import React, { useContext, useEffect, useState } from 'react';
import { Container, Button, Row, Col, Card} from 'react-bootstrap';
import ChangeProfile from '../components/modals/ChangeProfile';
import { fetchProfile } from '../http/userAPI';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { data, useParams } from 'react-router-dom';
import ApplicationList from '../components/ApplicationList';
import { fetchStatuses, fetchStudentApplications } from '../http/applicationsAPI';

const Profile = observer(() => {
  const {user} = useContext(Context)
  const {profile, application} = useContext(Context)
  const [profileVisible, setProfileVisible] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    fetchProfile(id).then(data => {
      profile.setStudentProfile(data);
    });
    fetchStudentApplications(id).then(data => {
      application.setApplications(data)
    })
    fetchStatuses().then(data => {
      application.setStatuses(data)
    })
  }, []);

  return (
    <Container className="mt-5">
      <h2 className='text-center'>Профиль студента</h2>
      <Card className="mb-4 w-50 mx-auto mt-5">
        <Card.Body>
          <Row>
            <Col sm="3">
              <Card.Text>Фамилия</Card.Text>
            </Col>
            <Col sm="5">
              <Card.Text className="text-muted">{profile.studentProfile.surname}</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="3">
              <Card.Text>Имя</Card.Text>
            </Col>
            <Col sm="9">
              <Card.Text className="text-muted">{profile.studentProfile.name}</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="3">
              <Card.Text>Отчество</Card.Text>
            </Col>
            <Col sm="9">
              <Card.Text className="text-muted">{profile.studentProfile.patronimyc}</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="3">
              <Card.Text>Пол</Card.Text>
            </Col>
            <Col sm="9">
              <Card.Text className="text-muted">{profile.studentProfile.gender}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className=" text-center">
        <Button onClick={() => setProfileVisible(true)}>
          Редактировать
        </Button>
      </div>
      <ChangeProfile 
        show={profileVisible} 
        onHide={() => setProfileVisible(false)}
        id={id}
      />
      {user.isAuth &&
        <div>
          <h2 className='mt-4 text-center'>Ваши отклики</h2>
          <ApplicationList />
        </div>
      }
    </Container>
  );
});

export default Profile;