import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import ApplicationItem from './ApplicationItem'
import { observer } from 'mobx-react-lite'

const ApplicationList = observer(() => {
  const {application} = useContext(Context)
  const applications = application.applications
  const statuses = application.statuses
  return (
    <Row className='d-flex mt-2'>
      {applications.map(application =>
        <ApplicationItem key={application.id} application={application} statuses={statuses}/>
      )}
    </Row>
  )
})

export default ApplicationList