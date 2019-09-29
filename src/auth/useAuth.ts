import { useState, useEffect } from 'react';

const useAuth = () => (auth: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    return [isAuthenticated, user];
}

export default useAuth;
