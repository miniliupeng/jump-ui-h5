import { Toast } from "antd-mobile";
import i18next from "@/config/i18next";

export const onCopy = (value) => {
  //创建input辅助元素
  const input = document.createElement("input");
  document.body.append(input);
  input.value = value;
  //选中input元素
  input.select();
  //复制
  document.execCommand("copy", false, null);
  //移除辅助元素
  input.remove();
  Toast.show({
    icon: "success",
    content: i18next.t("复制成功"),
  });
};