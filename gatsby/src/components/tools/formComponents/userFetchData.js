import React, { useState } from 'react';
import './userFetchData.css';

export const UserFetchData = (params) => {
    // let { data, id, styles } = params.data;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [users, setUsers] = useState([]);

    function getUsers(e) {
        console.log('Button Clicked');
        setUsers([]);
        fetch("https://jsonplaceholder.typicode.com/posts/")
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
    }

    function displayUsers(e) {
        console.log('Button Clicked For Display Users');
        setIsVisible(true);
    }

    function hideUsers(e) {
        console.log('Button Clicked For Hide Users');
        setIsVisible(false);
    }

    return (
        <div>
            <button onClick={getUsers}>ClickToFetchData</button>
            <button onClick={displayUsers}>SetFetchedDataToTable</button>
            <button onClick={hideUsers}>SetFetchedDataToTable</button>
            { ( isVisible && isLoaded ) ? 
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
                </table> : ''
            }
        </div>
    )
}

