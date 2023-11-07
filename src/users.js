import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://651f806044a3a8aa4769bbce.mockapi.io/v1/example");
            const data = await response.json();
            setUsers(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.length === 0 ? (
                    <p>No se encontraron datos.</p>
                ) : (
                    users.map((user) => (
                        <div>
                            <li key={user.id}>User #{user.id} {user.name}</li>
                            <img src={user.avatar} alt={user.name} />
                            {/* <p>Profile picture</p> */}
                        </div>


                    ))
                )}
            </ul>
        </div>
    );
}

export default UserList;
