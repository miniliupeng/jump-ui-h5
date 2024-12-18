import { Image } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

export const Notice = ({ id, msgTime, msgFile, msgTitle }) => {
  const navigate = useNavigate();
  return (
    <div
      className="notice__container"
      onClick={() => navigate(`/notice-detail/${id}`)}
    >
      <div className="notice__content">
        <div className="notice__title">
          {msgTitle}
        </div>
        <div className="notice__time">{msgTime}</div>
      </div>
      <Image className="notice__img" src={msgFile}></Image>
    </div>
  );
};
