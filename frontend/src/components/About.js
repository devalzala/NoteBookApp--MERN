import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {  
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/about")
    }
    else{
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>About</div>
  )
}

export default About;