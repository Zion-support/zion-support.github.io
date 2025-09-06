 setIsLoading (false) 
}, [session, status]);
const register = async (name: string, email: string, password: string) => {
  try {
  const response = await fetch ("/api/auth/register", {
  method: "POST", headers: {
  "Content-Type": "application/json" 
};
}