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
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, []);
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