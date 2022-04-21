import React, { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import Loading from '../Loading';
import Job from '../Job';
import Wrapper from '../../assets/wrappers/JobsContainer';
import PageBtnContainer from '../PageBtnContainer';

const JobsContainer = () => {
  const {
    getAllJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchType,
    searchStatus,
    sort,
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, [search, searchType, searchStatus, sort, page]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>無任何面試排程...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>總共有{totalJobs}個面試排程</h5>
      <div className="jobs">
        {jobs.map(job => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
