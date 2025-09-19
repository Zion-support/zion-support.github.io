import { useCallback } from 'react', interface User { "id": 'string, "email": "string, displayName?: string, avatar?: string, role?: string, isEmailVerified?: boolean, createdAt?: string,' "} updatedAt?: "string"} export const useAuthEventHandlers = ( "setUser": "("user": Use r | null) => void","setOnboardingStep": "("step": number) => void ) => {, const handleSignedIn = useCallback(("user": Use r) => {, setUser(user), setOnboardingStep(1)"},[setUser,setOnboardingStep]), const handleSignedOut = useCallback(() => {, setUser(null), setOnboardingStep(0)},[setUser,setOnboardingStep]), return { handleSignedIn,handleSignedOut }};
import { useCallback  } from 'react';
interface User {,
  "id": string;
  email: string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string}
export const useAuthEventHandlers = (,
  "setUser": (user: Use r | null)  => void;
  "setOnboardingStep": (step: number)  => void,
) => {;
  const handleSignedIn = useCallback((user: Use r)  => {;
    setUser(user);
    setOnboardingStep(1), // Start onboarding process,
  }, [setUser, setOnboardingStep]);
  const handleSignedOut = useCallback(() => {;
    setUser(null);
    setOnboardingStep(0), // Reset onboarding,
  }, [setUser, setOnboardingStep]);
  return {,
    handleSignedIn;
    handleSignedOut,
  }},',;
import { useCallback } from 'react', interface User { id: 'string, email: string, displayName?: string, avatar?: string, role?: string, isEmailVerified?: boolean, createdAt?: string,' } updatedAt?: string} export const useAuthEventHandlers = ( setUser: (user: Use r | null) => void,setOnboardingStep: (step: number) => void ) => {, const handleSignedIn = useCallback((user: Use r) => {, setUser(user), setOnboardingStep(1)},[setUser,setOnboardingStep]), const handleSignedOut = useCallback(() => {, setUser(null), setOnboardingStep(0)},[setUser,setOnboardingStep]), return { handleSignedIn,handleSignedOut }};
  }},;
import { useCallback } from 'react', interface User { id: string, email: string, displayName?: string, avatar?: string, role?: string, isEmailVerified?: boolean, createdAt?: string, updatedAt?: string} export const useAuthEventHandlers = ( setUser: (user: Use r | null) => void,setOnboardingStep: (step: number) => void ) => {, const handleSignedIn = useCallback((user: Use r) => {, setUser(user), setOnboardingStep(1)},[setUser,setOnboardingStep]), const handleSignedOut = useCallback(() => {, setUser(null), setOnboardingStep(0)},[setUser,setOnboardingStep]), return { handleSignedIn,handleSignedOut }},',';