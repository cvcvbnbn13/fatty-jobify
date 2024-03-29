import React from 'react';
import { FormRowSelect } from '../index';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = e => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>面試搜尋</h4>
        <div className="form-center">
          {/* search by status */}
          <FormRowSelect
            labelText="面試結果"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['不限', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="職缺類型"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['不限', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            labelText="排序"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-danger btn-block"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
