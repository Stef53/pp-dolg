import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const fetchEmploymentTypes = async () => {
  const {data} = await $host.get('api/employmentType')
  return data
}

export const fetchSpecialties = async () => {
  const {data} = await $host.get('api/specialty')
  return data
}

export const fetchDistricts = async () => {
  const {data} = await $host.get('api/district')
  return data
}

export const createVacancy = async (vacancy) => {
  const {data} = await $authHost.post('api/vacancy', vacancy)
  return data
}

export const fetchVacancies = async (employmentTypeId, specialtyId, districtId) => {
  const {data} = await $host.get('api/vacancy', {params: {
    employmentTypeId, specialtyId, districtId
  }})
  return data
}

export const fetchOneVacancy = async (id) => {
  const {data} = await $host.get('api/vacancy/' + id)
  return data
}

export const deleteVacancy = async (id) => {
  const {data} = await $authHost.delete('api/vacancy/' + id)
  return data
}