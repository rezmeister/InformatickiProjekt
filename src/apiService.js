// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(page = 1, name = '') {
  try {
    const response = await axios.get(`${API_BASE_URL}/character`, {
      params: { page, name },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return { results: [], info: {} };
  }
}

export async function fetchLocations(page = 1, name = '') {
  try {
    const response = await axios.get(`${API_BASE_URL}/location`, {
      params: { page, name },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return { results: [], info: {} };
  }
}

export async function fetchEpisodes(page = 1, name = '') {
  try {
    const response = await axios.get(`${API_BASE_URL}/episode`, {
      params: { page, name },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return { results: [], info: {} };
  }
}
