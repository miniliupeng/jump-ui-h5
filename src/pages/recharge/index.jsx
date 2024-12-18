import { DetailPage } from '@/components';
import { Button } from 'antd-mobile';
import { ReactComponent as CopyIcon } from '@/assets/svg/copy.svg';
import { useTranslation } from 'react-i18next';
import { QRCodeCanvas } from 'qrcode.react';
import domtoimage from 'dom-to-image';
import { useQueryCoinUserAddress } from '@/hooks/reuqest';
import { onCopy } from '@/utils/copy';
import { useRef } from 'react';
import { ToAssetRecord } from '@/common';

const Recharge = () => {
  const { t } = useTranslation();
  const imageRef = useRef();
  const closeRef = useRef();
  // const { data: coinAddress } = useQueryCoinUserAddress();
  const { data: { coinAddress } = {} } = useQueryCoinUserAddress();
  const handleClickDownLoad = async () => {
    const dataUrl = await domtoimage.toJpeg(imageRef.current, {
      filter: (node) => node !== closeRef.current,
    });
    let link = document.createElement('a');
    link.download = 'recharge-code.jpeg';
    link.href = dataUrl;
    link.click();
  };

  return (
    <DetailPage
      className={'relative'}
      backText={t('返回')}
      bodyStyle={{ marginBottom: 72, padding: 0 }}
      extra={<ToAssetRecord index={1} />}
    >
      <div ref={imageRef} className="bg-[var(--jp-background-color)] p-[16px]">
        <h1 className="field-title mb-[16px]">{t('充值 USDT')}</h1>
        <div className="jp-gradient-bg h-[308px] border border-[var(--jp-border-forth-color)] text-center px-[30px]">
          <p className="mt-[12px] text-[14px]">{t('扫描二维码进行充值')}</p>
          <div className="w-[160px]  mx-auto my-[12px]">
            <div className="flex h-[160px] bg-white">
              <QRCodeCanvas
                id="qrCode"
                value={coinAddress}
                size={150}
                className="m-auto"
              />
            </div>
          </div>
          <p className="text-[var(--jp-second-color)]">{t('充值地址')}</p>
          <p className="mt-[10px] text-[14px] font-[500] break-words">
            {coinAddress}
            <span ref={closeRef}>
              <CopyIcon
                className="ml-[16px]"
                style={{ display: 'inline-block' }}
                onClick={() => onCopy(coinAddress)}
              />
            </span>
          </p>
        </div>
        <div className="mt-[16px] text-[12px]">
          <h3>{t('提示')}</h3>
          <div className="h-[80px] mt-[8px] p-[16px] jp-gradient-bg border border-[var(--jp-border-forth-color)]">
            <div className="flex justify-between">
              <span>{t('充值网络')}</span>
              <span>BSC</span>
            </div>
            <div className="flex justify-between mt-[10px]">
              <span>{t('币种')}</span>
              <span>USDT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[16px] left-[16px] right-[16px]">
        <Button
          className="block-btn"
          block
          type="submit"
          color="primary"
          onClick={handleClickDownLoad}
        >
          {t('保存充值地址')}
        </Button>
      </div>
    </DetailPage>
  );
};

export default Recharge;
