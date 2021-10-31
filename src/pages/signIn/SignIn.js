import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
const SignIn = () => {
  const { signIn, setUser, setLoading } = useAuth();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleSignIn = () => {
    signIn()
      .then((result) => {
        history.replace(from);
        setUser(result.user);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  };

  return (
    <section className="container mx-auto h-full mt-20 border sm:w-2/4 py-10">
      <img className="mx-auto my-5 w-80" src="https://i.pinimg.com/564x/00/0f/38/000f38d88567dfe18599fb57c2f7a2b4.jpg" alt="" />
                               
      <h1 className="text-center text-3xl my-6 font-bold">Sign in With</h1>
      <div className="flex justify-center items-center">
        <button
          onClick={handleSignIn}
          className="bg-gray-900 hover:bg-gray-400 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <img
            className="h-5 mt-1"
            src="https://img.icons8.com/color/50/000000/google-logo.png"
          />
          <span className="text-2xl">oogle </span>
        </button>
      </div>
    </section>
  );
};

export default SignIn;
