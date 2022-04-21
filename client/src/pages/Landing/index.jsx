import React from 'react';
import { Logo } from '../../components';
import main from '../../assets/images/main.svg';
import Wrapper from '../../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            找工作，從<span>管好面試</span>開始
          </h1>
          <p>面試時程一目了然</p>
          <Link to="/register" className="btn btn-hero">
            登入/立即註冊
          </Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
