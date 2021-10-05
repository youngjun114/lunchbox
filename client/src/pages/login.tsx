import React, { useState, useEffect } from 'react';
import Loading from '../components/login/loading';
import LoginMain from '../components/login/login_main';

const Login = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading((prev) => !prev);
  //   }, 3000);
  // }, []);

  return <>{loading ? <Loading /> : <LoginMain />}</>;
};

export default Login;
