import React, { useEffect, useState } from "react";
import IMG1 from "../../../assets/image/learningportal.svg";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../features/auth/authApi";
import Error from "../../ui/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/student/coursePlayer");
    }
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    login({
      email,
      password,
    });
  };

  return (
    <div>
      <section class="py-6 bg-primary h-screen grid place-items-center">
        <div class="mx-auto max-w-md px-5 lg:px-0">
          <div>
            <img alt="" class="h-12 mx-auto" src={IMG1} />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-100">
              Sign in to Student Account
            </h2>
          </div>
          <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="login-input rounded-t-md"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="login-input rounded-b-md"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div class="flex items-center justify-end">
              <div class="text-sm">
                <Link
                  to="/student/registration"
                  class="font-medium text-violet-600 hover:text-violet-500"
                >
                  Create New Account
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                disabled={isLoading}
              >
                Sign in
              </button>
            </div>

            {error !== "" && <Error message={error} />}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
