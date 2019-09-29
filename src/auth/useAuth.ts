import { useState, useEffect } from 'react';

const useAuth = () => () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    return {isAuthenticated, user};
    // return [isAuthenticated, user];
}

export default useAuth;
