import NotFound from "../component/sections/notFound.jsx";


const API_URL = 'https://backend.meydetour.com/';

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        console.log("success")
        if (!response.ok) {
            const errorData = await response.json(); // Lire le contenu JSON
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {

        console.log("Erreur fetchData :", error.message);
        throw error;
    }
};

export const fetchDataWithId = async (endpoint, id) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const getAllTechnologies = () => fetchData('techs');
export const getAllCertifs = () => fetchData('certifs');
export const getProjects = () => fetchData('projects');
export const getTexts = () => fetchData('texts');
export const getLastProject = () => fetchData('lastProject');
export const getMedias = () => fetchData('medias');
export const getQualities = () => fetchData('qualities');
export const getProject = (id) => fetchDataWithId('project', id);