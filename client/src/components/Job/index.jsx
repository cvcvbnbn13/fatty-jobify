import React from 'react';
import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/Job';
import JobInfo from '../JobInfo';

const Job = ({
  _id,
  position,
  jobLocation,
  jobType,
  status,
  company,
  date,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let interviewDate = moment(date);
  interviewDate = interviewDate.format('MMM Do, YYYY');

  const statusStyle = status => {
    switch (status) {
      case '未錄取':
        return <div className="status declined">{status}</div>;
      case '等待中':
        return <div className="status pending">{status}</div>;
      case '尚未面試':
        return <div className="status interview">{status}</div>;
      case '錄取':
        return <div className="status offer">{status}</div>;
      default:
    }
  };

  const StatusInfo = statusStyle(status);

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={interviewDate} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          {StatusInfo}
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => setEditJob(_id)}
            >
              編輯
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(_id)}
            >
              刪除
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
