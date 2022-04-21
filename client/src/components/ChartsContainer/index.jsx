import React, { useState } from 'react';
import AreaChartComponent from '../AreaChart';
import BarChartComponent from '../BarChart';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/ChartsContainer';

const ChartsContainer = () => {
  const { monthlyApplications: data } = useAppContext();
  const [barChart, setBarChart] = useState(false);

  return (
    <Wrapper>
      <h4>每月統計-{barChart ? '長條圖' : '折線圖'}</h4>
      <button
        type="button"
        className="toggle-btn"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? '觀看折線圖' : '觀看長條圖'}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
