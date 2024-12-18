import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DetailPage } from '@/components';
import './index.less';
import { useQueryMsgLogInfo } from '@/hooks/reuqest';

const NoticeDetail = () => {
  const { t } = useTranslation();
  const { id: detailId } = useParams();
  const { data: { msgTitle, msgTime, msgPerson, msgText } = {} } =
    useQueryMsgLogInfo(detailId);
  return (
    <DetailPage className={'notice-detail__container'} backText="返回">
      <h1 className="notice-detail__title">{msgTitle}</h1>
      <p className="notice-detail__desc">
        <span>
          {t('更新于')}：{msgTime}
        </span>
        <span>
          {t('来源')}：{msgPerson}
        </span>
      </p>
      <p
        className="mt-[8px] indent-2"
        dangerouslySetInnerHTML={{
          __html: msgText,
        }}
      ></p>
    </DetailPage>
  );
};
export default NoticeDetail;
