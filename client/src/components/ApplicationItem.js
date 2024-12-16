import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Dropdown } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { changeApplicationStatus } from '../http/applicationsAPI';
import { Context } from '..';

const ApplicationItem = observer(({ application, statuses }) => {
  const {user} = useContext(Context)
  const [currentStatus, setCurrentStatus] = useState(null);

  useEffect(() => {
    const foundStatus = statuses.find(status => application.statusId === status.id);
    setCurrentStatus(foundStatus);
  }, []);

  const changeApplication = (status) => {
    const formData = new FormData();
    formData.append('id', application.id);
    formData.append('statusId', status.id);

    changeApplicationStatus(formData).then(data => {
      application = data;
    });
  };

  return (
    <Container className='mt-3 mb-3 w-75'>
      <Card style={{ borderRadius: 15 }} className='p-4'>
        <div className="d-flex justify-content-between">
          <Card.Title className='fw-bold'>Сопроводительное письмо</Card.Title>
          {}
          <span className='fw-bold'>Статус отклика: {currentStatus ? currentStatus.name : 'Не установлен'}</span>
          {user.user.role === "ADMIN" &&
            <Dropdown className=''>
            <Dropdown.Toggle>{currentStatus ? currentStatus.name : 'Выберите статус'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {statuses.map(status =>
                <Dropdown.Item
                  key={status.id}
                  onClick={() => {
                    setCurrentStatus(status)
                    changeApplication(status)
                  }}
                >
                  {status.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          }
        </div>
        <Card.Text>{application.coverLetter}</Card.Text>
        <a
          href={process.env.REACT_APP_API_URL + application.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Скачать резюме
        </a>
      </Card>
    </Container>
  );
});

export default ApplicationItem;