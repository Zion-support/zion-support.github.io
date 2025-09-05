 CredentialsProvider ({
  name: "credentials", credentials: {
  email: {
  label: "Email", type: "email" 
};
password: {
  label: "Password", type: "password" 
}
};
const isPasswordValid = await bcrypt.compare (credentials.password;
user.password);
