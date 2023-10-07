import React, { useEffect, useState } from 'react';

const useToken = (email) => {
    const [token, setToken] = useState('')
    
    useEffect(()=> {
        if(email){
            fetch(`http://localhost:8000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
            if(data.accessToken){
                const token = data.accessToken;
                localStorage.setItem('accessToken', token)
                setToken(token)
            }
        })
        }

    },[email])
    
    return [token]
};

export default useToken;