import styled from "styled-components";
import { Form, Checkbox } from "semantic-ui-react";

export const FormInputWrapper = styled(Form.Field)`
  &&&& {
    position: relative;
    margin-bottom: 3.6em;
    flex: 1;
    &:after {
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background-image: linear-gradient(85deg, #1671ff 10%, #00b7ff 80%);
      content: "";
      transform: scale(0);
      transform-origin: center;
      transition: transform 0.45s cubic-bezier(0.565, 0, 0, 1);
    }
    &:focus-within {
      &:after {
        transform: scale(1);
        transition: transform 0.45s cubic-bezier(0.565, 0, 0, 1);
      }
    }
    .dropdown {
      margin-right: 0 !important;
    }
    .client-region-select {
      width: 100% !important;
      .menu {
        top: 2.9em !important;
      }
    }
    .rule-field-select {
      width: 100% !important;
    }
    .multiple {
      width: 100% !important;
      padding-right: 0;
      input {
        margin-left: 0 !important;
        margin-bottom: 0 !important;
      }
    }
  }
`;

export const FormInput = styled.input`
  &&&& {
    background: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #000;
    overflow: visible;
    transition: 0.6s all;
    outline: none;
    color: ${({ color }) => (color ? color : `#000`)};
    &:focus {
      border-radius: 0;
      background: white;
      & ~ label {
        top: -17px;
        font-size: 11px;
      }
    }
    &:valid ~ label {
      top: -17px;
      font-size: 11px;
    }
  }
`;

export const FormInputRule = styled.input`
  &&&& {
    top: -1.3em;
    position: absolute;
    background: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #000;
    overflow: visible;
    transition: 0.6s all;
    outline: none;
    color: ${({ color }) => (color ? color : `#000`)};
    &:focus {
      border-radius: 0;
      background: white;
      & ~ label {
        top: -17px;
        font-size: 11px;
      }
    }
    &:valid ~ label {
      top: -17px;
      font-size: 11px;
    }
    &::placeholder {
      font-size: 10px;
      color: #000;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  transform: scale(0.5) !important;
`;

export const FormInputLabel = styled.label`
  &&&& {
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    position: absolute;
    top: 0;
    cursor: text;
    pointer-events: none;
    transition: 0.2s ease all;
    color: ${({ color }) => (color ? color : "#000")};
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
`;
