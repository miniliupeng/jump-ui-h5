import React from "react";
import md5 from "md5";
import { DetailPage } from "@/components";
import { Button, Form, Input, Toast } from "antd-mobile";
import { PasswordInput } from "@/components";
import { useTranslation } from "react-i18next";
import { login } from "@/api/user";
import { UserCard } from "./UserCard";
import { useLocalStorageState } from "ahooks";
const MultiAccount = () => {
  const [userInfo, setUserInfo] = useLocalStorageState("userInfo");
  const [otherUsersInfo, setOtherUsersInfo] = useLocalStorageState(
    "otherUserInfo",
    { defaultValue: [] }
  );

  const { t } = useTranslation();
  const onFinish = async ({ payPasswd, coinName }) => {
    if (coinName === userInfo.coinAddress) return Toast.show(t("您已登录"));
    try {
      const newUserInfo = await login({ payPasswd: md5(payPasswd), coinName });
      Toast.show({
        icon: "success",
        content: t("登录成功"),
        afterClose: () => {
          setOtherUsersInfo([userInfo, ...otherUsersInfo.filter((user) => user.coinAddress !== coinName),]);
          setUserInfo(newUserInfo);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onCheckLogin = async ({ payPasswd, coinName }) => {
    try {
      const newUserInfo = await login({ payPasswd, coinName });
      Toast.show({
        icon: "success",
        content: t("切换成功"),
        afterClose: () => {
          setOtherUsersInfo([
            userInfo,
            ...otherUsersInfo.filter((user) => user.coinAddress !== coinName),
          ]);
          setUserInfo(newUserInfo);
        },
      });
    } catch (error) {
      setOtherUsersInfo([
        ...otherUsersInfo.filter((user) => user.coinAddress !== coinName),
      ]);
    }
  };
  return (
    <DetailPage backText="返回">
      <h1 className="jp-title">{t("多账户登录")}</h1>
      <Form
        className="lp-form"
        layout="vertical"
        onFinish={onFinish}
        footer={
          <Button className="block-btn" block type="submit" color="primary">
            {t("登录")}
          </Button>
        }
      >
        <Form.Item
          name="coinName"
          label={t("邮箱")}
          required={false}
          rules={[
            {
              required: true,
              type: "email",
              message: t("请输入正确的邮箱地址"),
            },
          ]}
        >
          <Input
            className="lp-input"
            placeholder={t("请输入登录邮箱")}
            clearable
          />
        </Form.Item>
        <PasswordInput
          required={false}
          label={t("密码")}
          placeholder={t("请输入登录密码")}
          name="payPasswd"
        />
      </Form>
      <h1 className="field-title my-[16px]">{t("当前用户")}</h1>
      <UserCard coinAddress={userInfo.coinAddress} type={1} />
      <h1 className="field-title my-[16px]">{t("其他用户")}</h1>
      {otherUsersInfo.map((user) => (
        <UserCard
          key={user.coinAddress}
          coinAddress={user.coinAddress}
          type={2}
          onClick={() =>
            onCheckLogin({ payPasswd: user.payPasswd, coinName: user.coinName })
          }
        />
      ))}
    </DetailPage>
  );
};

export default MultiAccount;
