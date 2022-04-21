import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import ErrorWrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <ErrorWrapper className="full-page">
      <div>
        <img src={img} alt="" />
        <h3>欸，你走錯了啦!!</h3>
        <p>這邊沒有任何你想要的資訊</p>
        <Link to="/">回到首頁</Link>
      </div>
    </ErrorWrapper>
  );
};

export default Error;
