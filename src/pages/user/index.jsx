import { ReactComponent as PhotoIcon } from "@/assets/svg/photo.svg";
import { ReactComponent as PwdIcon } from "./assets/pwd.svg";
import { ReactComponent as AddressIcon } from "./assets/address.svg";
import { ReactComponent as ThemeIcon } from "./assets/theme.svg";
import { ReactComponent as CopyIcon } from "./assets/copy.svg";
import { ReactComponent as AccountIcon } from "./assets/account.svg";
import arrowSrc from "./assets/arrow.svg";
import { Button, Image, Space } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MyLocalStorage, formatEmail } from "@/utils";
import { useQueryCoinUser } from "@/hooks/reuqest";
import { onCopy } from "@/utils/copy";
import { PageLayout } from "@/common";
import { useTheme } from "@/hooks/useTheme";

const User = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: { coinAddress, incomeAddress } = {} } = useQueryCoinUser();
  const loginOut = () => {
    MyLocalStorage.localstorage.removeItem("userInfo");
    navigate("/login");
  };
  const { theme } = useTheme();
  return (
    <PageLayout bodyStyle={{ display: "flex", flexDirection: "column" }}>
      <div className="flex gap-[12px]">
        <PhotoIcon />
        <Space direction="vertical" style={{ "--gap": "6px" }}>
          <span className="text-[14px] font-[600]">{t("我的地址")}</span>
          <div className="flex gap-[16px]" onClick={() => onCopy(coinAddress)}>
            {/* <span>{formatEmail(coinAddress)}</span> */}
            <span>{coinAddress}</span>
            <CopyIcon />
          </div>
        </Space>
      </div>
      <div className="pt-[8px]">
        {/* <div
          className="flex items-center mt-[24px]"
          onClick={() => navigate('/kyc')}
        >
          <Image src={kycSrc} width={24} />
          <span className="flex-1 pl-[8px]">{t('KYC')}</span>
          <Image src={arrowSrc} width={16} />
        </div> */}
        <div
          className="flex items-center mt-[24px]"
          onClick={() => navigate("/update-password")}
        >
          <PwdIcon />
          <span className="flex-1 pl-[8px]">{t("修改密码")}</span>
          <Image src={arrowSrc} width={16} />
        </div>
        <div
          className="flex items-center mt-[24px]"
          onClick={() =>
            incomeAddress ? navigate("/address-result") : navigate("/address")
          }
        >
          <AddressIcon />
          <span className="flex-1 pl-[8px]">{t("地址绑定")}</span>
          <Image src={arrowSrc} width={16} />
        </div>
        <div
          className="flex items-center mt-[24px]"
          onClick={() => navigate("/theme")}
        >
          <ThemeIcon />
          <span className="flex-1 pl-[8px]">{t("主题模式")}</span>
          <span className="text-[var(--jp-second-color)] pr-[4px]">
            {t(theme === "light" ? "日间" : "夜间")}
          </span>
          <Image src={arrowSrc} width={16} />
        </div>
        <div
          className="flex items-center mt-[24px]"
          onClick={() => navigate("/multi-account")}
        >
          <AccountIcon />
          <span className="flex-1 pl-[8px]">{t("多账户登录")}</span>
          <Image src={arrowSrc} width={16} />
        </div>
      </div>
      <Button
        className="block-btn mt-[auto!important]"
        block
        type="submit"
        onClick={loginOut}
      >
        {t("退出登录")}
      </Button>
    </PageLayout>
  );
};

export default User;
