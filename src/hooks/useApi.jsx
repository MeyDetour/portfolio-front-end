import { useState, useEffect } from 'react';
import {

    getProject,
} from '../api/api.js';


export const useProject = (id) => {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await getProject(id);
                setProject(data);
                console.log(data);

            } catch (err) {
                console.error("Erreur API :", err.message);
                if (err.message === "unvisible project") {
                    // Traitez ce cas de manière spécifique
                    setError("Ce projet est invisible.");
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);
    return { project, loading, error };
};

export const useFetch = (fetchFunction) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchFunction();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [fetchFunction]);

    return { data, loading, error };
};