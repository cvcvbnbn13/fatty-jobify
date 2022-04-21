import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../../components';
import RegisterWrapper from '../../assets/wrappers/RegisterPage';
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: '登入成功，跳轉中...',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: '註冊新帳戶成功，跳轉中...',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2500);
    }
  }, [user, navigate]);

  return (
    <RegisterWrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? '登入' : '註冊新帳戶'}</h3>
        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/*email input*/}
        <FormRow
          type="text"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*password input*/}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          送出
        </button>
        <p>
          {values.isMember ? '新朋友 ? ' : '已經有帳號了嗎 ? '}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? '註冊' : '登入'}
          </button>
        </p>
      </form>
    </RegisterWrapper>
  );
};

export default Register;
