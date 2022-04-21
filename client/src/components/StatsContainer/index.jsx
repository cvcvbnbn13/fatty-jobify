import React from 'react';
import StatsItem from '../StatsItem';
import {
  FaUndoAlt,
  FaCalendarCheck,
  FaSkull,
  FaThumbsUp,
} from 'react-icons/fa';

import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/StatsContainer';

const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: '等待中',
      count: stats['等待中'] || 0,
      icon: <FaUndoAlt />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: '尚未面試',
      count: stats['尚未面試'] || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: '未錄取',
      count: stats['未錄取'] || 0,
      icon: <FaSkull />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
    {
      title: '錄取',
      count: stats['錄取'] || 0,
      icon: <FaThumbsUp />,
      color: '#2d9954',
      bcg: '#d4fce3',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map(item => {
        return <StatsItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
