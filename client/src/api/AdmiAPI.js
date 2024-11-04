import axios from "axios";

// Делаем базовые настройки
const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET запрос
export const fetchData = async () => {
  try {
    const response = await apiClient.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// POST запрос
export const postData = async (data) => {
  try {
    const response = await apiClient.post('/data', data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// PUT запрос
export const putData = async (id, data) => { // Передаем id и новые данные
  try {
    const response = await apiClient.put(`/data/${id}`, data); // PUT запрос для обновления
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// DELETE запрос
export const deleteData = async (id) => {
  try {
    const response = await apiClient.delete(`/data/${id}`); // DELETE запрос
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
