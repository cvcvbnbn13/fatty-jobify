import React, { useState } from 'react';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [englishName, setEnglishName] = useState(user?.englishName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !englishName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, location, englishName });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>個人檔案</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            labelText="中文姓名"
            type="text"
            name="name"
            value={name}
            handleChange={e => setName(e.target.value)}
          />
          <FormRow
            labelText="英文名"
            type="text"
            name="englishName"
            value={englishName}
            handleChange={e => setEnglishName(e.target.value)}
          />
          <FormRow
            labelText="電子信箱"
            type="email"
            name="email"
            value={email}
            handleChange={e => setEmail(e.target.value)}
          />
          <FormRow
            labelText="所在地"
            type="text"
            name="location"
            value={location}
            handleChange={e => setLocation(e.target.value)}
          />
          <button
            className="btn btn-storage"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? '請稍等一下' : '儲存'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
