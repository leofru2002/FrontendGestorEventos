import axios from 'axios';

const API_BASE_URL = 'https://3h9gvbz1ee.execute-api.us-east-1.amazonaws.com';

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const createEvent = async (event) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/events`, event);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const updateEvent = async (id, event) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/events/${id}`, event);
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};