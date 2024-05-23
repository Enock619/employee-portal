import React, { createContext, useContext, useState } from 'react';

// Creating an authentication context
const AuthContext = createContext(null);


// Auth provider component that wraps your app components
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(null);

    const login = async (username, password) => {
        try {
            //setMessage("");
            console.log(message)
            //console.log(password)
            const response = await fetch(`${import.meta.env.VITE_EMPLOYEES_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            console.log("DATA", {data})
            if (data._id) {
                setUser({
                    username,
                    _id : data._id, // Storing the _id returned from the server
                    employee_id: data.employee_id,
                    manager_id: data.manager_id
                });
            } else {
                //console.log("error")
                setMessage("Wrong username or password");
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        setUser(null); // In real scenarios, you might want to invalidate the session on the server as well
    };

    return (
        <AuthContext.Provider value={{ user, message, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use authentication
export const useAuth = () => useContext(AuthContext);