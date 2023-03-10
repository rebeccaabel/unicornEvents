import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);
export const GlobalProvider = ({ children }) => {

    // useState for all variables
    const [auth, setAuth] = useState({loggedIn:false})
    const [isLoading, setIsLoading] = useState(true)
    const [concerts, setConcerts] = useState([])
    const [artistInfo, setArtistInfo] = useState([])
    const [chosenSeats, setChosenSeats] = useState([])
    const [standingTickets, setStandingTickets] = useState([])
    const [wishlists, setWishlists] = useState([])

    // useEffect to run methods upon load
    useEffect(() => {
        void checkAuth()
        void loadConcerts()
    }, []);

    // methods, could be for on load, or just called from elsewhere

    const checkAuth = async () => {
        setIsLoading(true)
        const response = await fetch("/rest/login")
        console.log('loading auth')
        const result = await response.json()
        console.log('auth state: ', result)
        setAuth(result)
        setIsLoading(false)
    }

    const getPassword = async(id,email,password) => {
        setIsLoading(true)
        const response = await fetch("/rest/users/password", {
            method: "put",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id, email, password})
        })
        const result = await response.json()
        console.log(result)
        setIsLoading(false)
    }
    const register = async(email,password) => {
        setIsLoading(true)
        const response = await fetch("/rest/users", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        })
        const result = await response.json()
        console.log(result)
        setIsLoading(false)
    }

    const submitLogin = async (email, password) => {
        setIsLoading(true)
        const response = await fetch("/rest/login", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        })
        const result = await response.json()
        console.log(result)
        setIsLoading(false)
        void checkAuth()
    }

    const logout= async () => {
        setIsLoading(true)
        const response = await fetch("/rest/login", {
            method: "delete"
        })
        const result = await response.json()
        console.log(result)
        setIsLoading(false)
        setAuth({loggedIn:false})
    }


    const loadConcerts = async () => {
        setIsLoading(true)
        const response = await fetch("/rest/concerts")
        const result = await response.json()
        console.log(result)
        setConcerts(result)
        setIsLoading(false)
    }


    return (
        <GlobalContext.Provider
            value={{
                auth,
                concerts,
                isLoading,
                submitLogin,
                logout,
                standingTickets,
                setStandingTickets,
                chosenSeats,
                setChosenSeats,
				register,
                getPassword,
                wishlists,
                setWishlists,
                artistInfo,
                setArtistInfo
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
