import React, { useState, useEffect } from 'react';
import './fetchData.css';

export const FetchData = (params) => {
    // let { data, id, styles } = params.data;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setUsers(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>STATUS</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {
                            users.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{ item.completed ? 'True' : 'False' }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

