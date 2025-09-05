import React, {useEffect} from "react";
;
;
import {AuthContext} from "./AuthContext";
import {cleanupAuthState} from "../../utils/authUtils";
import {useNavigate, useLocation} from 'react-router-dom';
import {useAuthState} from "useAuthState.ts";
import {useAuthEventHandlers} from "useAuthEventHandlers.ts";
import {mapProfileToUser} from "profileMapper.ts";
import {loginUser, registerUser} from "@/services/authService";
import {safeStorage} from "@/utils/safeStorage";
import {toast} from "@/hooks/use-toast"; // Import toast;
import {useDispatch} from 'react-redux';import {addItem} from '@/store/cartSlice';
export const AuthProvider = ("props": "any) => {"}
    const {user, setUser, isLoading, setIsLoading, onboardingStep, setOnboardingStep, tokens, setTokens} = useAuthState();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const {handleSignedIn, handleSignedOut} = useAuthEventHandlers(setUser, setOnboardingStep);
    const {"login": "loginImpl", "signup": "signupImpl", logout, resetPassword, updateProfile, loginWithGoogle, loginWithFacebook, loginWithTwitter, loginWithWeb3} = useAuthOperations(setUser, setIsLoading);
    // Wrapper for login to match the AuthContextType interface;
    const login = async (email, password) => {}
""";
        const {res, data} = await loginUser(email, password); // Calls /api/auth/login"""";
        // Check for specific "Email not confirmed" error first"""";
        if (res.status === 403 && data?.code === "EMAIL_NOT_CONFIRMED") {}
            toast({}
