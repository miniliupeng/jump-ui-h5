import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as UserIcon } from "./assets/user.svg";
import { Space } from "antd-mobile";
import "./index.less";

export const UserCard = ({ coinAddress, type, onClick }) => {
  const { t } = useTranslation();
  return (
    <div
      className="mb-[16px] h-[44px] border border-[var(--jp-border-forth-color)] jp-gradient-bg"
      onClick={onClick}
    >
      <div
        className={`w-[56px] h-[20px] float-right leading-[20px] ${
          type === 1 ? "primary-color" : "third-color"
        } text-center text-[var(--jp-button-color)] font-[600]`}
      >
        {t(type === 1 ? "当前" : "切换")}
      </div>
      <div className="h-[100%] flex items-center gap-[8px] ml-[16px]">
        <UserIcon />
        <Space direction="vertical">
          <span className="font-[500] text-[14px]">{coinAddress}</span>
        </Space>
      </div>
    </div>
  );
};
