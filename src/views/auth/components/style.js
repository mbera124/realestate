import styled from "styled-components";
import { Button, Input, Select } from "antd";
import "./css/font.css";

const { Option } = Select;

export const ContainerLogIn = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
  }
`;

export const WrapButton = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
`;

export const StyledButton = styled(Button)`
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #e0e0e0;
  width: 100%;
  height: 41.5px;
  border-radius: 25px;
  background: #333333;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    top: 0;
    left: 0;
    background: #005bea;
    background: -webkit-linear-gradient(left, #005bea, #00c6fb);
    background: -o-linear-gradient(left, #005bea, #00c6fb);
    background: -moz-linear-gradient(left, #005bea, #00c6fb);
    background: linear-gradient(to left, #005bea, #00c6fb);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    opacity: 0;
  }
  &:hover {
    background: transparent;
    color: #fff;
  }
  &:hover:before {
    opacity: 1;
  }
`;

export const WrapInput = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
`;
export const WrapLogin = styled.div`
  width: 420px;
  border-radius: 10px;
  box-shadow: 5px 8px 22px -4px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 5px 8px 22px -4px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 5px 8px 22px -4px rgba(0, 0, 0, 0.34);
`;
export const WrapLoginForm = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 13px 35px 35px 35px;
`;

export const StyledAvatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
`;

export const FormTitle = styled.span`
  font-family: Montserrat-ExtraBold;
  font-size: 24px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
  padding-top: 5px;
  padding-bottom: 35px;
`;
export const FocusInput = styled.span`
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(0, 91, 234, 0.6);
`;
export const SymbolInput = styled.span`
  font-size: 15px;
  color: #999999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  pointer-events: none;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;

export const StyledInput = styled(Input)`
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.2;
  color: #333333;
  display: block;
  width: 100%;
  background: #fff;
  height: 41.5px;
  border-radius: 25px;
  padding: 0 30px 0 53px;
`;

export const StyledSelect = styled(Select)`
  .ant-select-selection,
  .ant-select-selection:active,
  .ant-select-selection:focus {
    border: none !important;
    border-radius: 0 30px 30px 0;
  }

  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.2;
  color: #333333;
  display: block;
  width: 100%;
  background: #fff;
  border-radius: 25px;
  padding: 0 0px 0 53px;
`;
export const StyledPassword = styled(Input.Password)`
  .ant-input {
    border: none;
  }
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.2;
  color: #333333;
  display: block;
  width: 100%;
  background: #fff;
  height: 41.5px;
  border-radius: 25px;
  padding: 0 30px 0 53px;
`;

export const StyledLink = styled.div`
  &:hover {
    color: #4aabff; // <Thing> when hovered
  }
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #cccccc;
  line-height: 1.4;
  cursor: pointer;
`;
export const StyledText = styled.div`
  font-family: Montserrat-Regular;
  font-size: 14px;
  color: #cccccc;
  line-height: 1.4;
  cursor: pointer;
`;
export const MainDiv = styled.div`
  height: 100%;
  font-family: Montserrat-Regular, sans-serif;
  width: 100%;
  margin: 0 auto;
`;
