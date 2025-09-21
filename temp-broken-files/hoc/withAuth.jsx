import React, { useEffect } from "
import { useSelector } from "
import { useNavigate } from "
function withAuth() {
    const Wrapped = (props) => {;
        const navigate = useNavigate()
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
        useEffect(() => {
            if (!isLoggedIn) {
                navigate('/login?next=/community/new')
            }
        }, [isLoggedInnavigate]),if (!isLoggedIn) {
            return null;
        }
        return <Component {...props}/>,},return Wrapped;
}
export, default, withAuth,</Component {...props}/><//Component {...props}/>