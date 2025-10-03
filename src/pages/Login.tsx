import React from "react";

const Login: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Login</h1>
      <form className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 mb-4 rounded-lg bg-zion-blue-dark border border-zion-blue text-white placeholder-zion-blue-light focus:outline-none focus:border-zion-blue-light"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 mb-4 rounded-lg bg-zion-blue-dark border border-zion-blue text-white placeholder-zion-blue-light focus:outline-none focus:border-zion-blue-light"
        />
        <button className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Sign in</button>
      </form>
    </section>
  );
};

export default Component;