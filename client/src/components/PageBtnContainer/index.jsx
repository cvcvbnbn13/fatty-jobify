import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/PageBtnContainer';

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = 1;
    }
    changePage(newPage);
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        前一頁
      </button>
      <div className="btn-container">
        {pages.map(item => {
          return (
            <button
              type="button"
              className={item === page ? 'pageBtn active' : 'pageBtn'}
              key={item}
              onClick={() => {
                changePage(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        後一頁
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
