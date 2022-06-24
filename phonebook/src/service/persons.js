import axios from 'axios';

const url = 'http://localhost:3001/persons';

export const getPersons = () => {
    return axios.get(url);
}

export const postPersons = (person) => {
    return axios.post(url, person);
}

export const updatePerson = (person, id) => {
    return axios.put(`${url}/${id}`, person);
}

export const deletePerson = (id) => {
    return axios.delete(`${url}/${id}`);
}