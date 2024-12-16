import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const createApplication = async (application) => {
  const {data} = await $authHost.post('api/application', application)
  return data
}

export const fetchStudentApplications = async (userId) => {
  const {data} = await $authHost.get('api/application', {params: {
    userId
  }})
  return data
}

export const fetchAdminApplications = async (vacancyId) => {
  const {data} = await $authHost.get('api/application', {params: {
    vacancyId
  }})
  return data
}

export const fetchStatuses = async () => {
  const {data} = await $host.get('api/status')
  return data
}

export const changeApplicationStatus = async (formData) => {
  const {data} = await $authHost.put('api/application', formData)
  return data
}