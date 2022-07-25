import React from 'react';
import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    company,
    position,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    date,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!company || !position || !jobLocation || !date) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? '編輯面試' : '新增面試'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/*position*/}
          <FormRow
            type="text"
            name="position"
            value={position}
            labelText="職稱"
            handleChange={handleInput}
          />
          {/*company*/}
          <FormRow
            type="text"
            name="company"
            value={company}
            labelText="公司名稱"
            handleChange={handleInput}
          />
          {/*position*/}
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            labelText="地區"
            handleChange={handleInput}
          />

          {/*jobtype*/}
          <FormRowSelect
            name="jobType"
            value={jobType}
            handleChange={handleInput}
            labelText="工作類型"
            list={jobTypeOptions}
          />

          {/*interviewDate*/}
          <FormRow
            type="date"
            name="date"
            value={date}
            labelText="面試日期"
            handleChange={handleInput}
          />

          {/*interviewStatus*/}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleInput}
            labelText="面試結果"
            list={statusOptions}
          />

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              送出
            </button>
            <button
              className="btn btn-block submit-btn clear-btn"
              onClick={e => {
                e.preventDefault();
                clearValues();
              }}
            >
              清除
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
