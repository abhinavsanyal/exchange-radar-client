import styled from "styled-components";
import { Image } from "semantic-ui-react";

export const HeaderWrapper = styled.div`
  max-height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 30px;
  background: #10B56F;
`;

export const AnyfinLogo = styled(Image)`
  height: 24px;
  max-height: 36px;
  cursor: pointer;
  margin-right: 5px;
`;
export const UserAccountContainer = styled.div`
  flex: 1;
  justify-content: flex-end;
  color: white;
  text-align: end;

  .menu {
    .item {
      .icon {
        font-size: 0.8em;
      }
      .dropdown {
        .text {
          font-size: 13px;
        }
        .menu {
          border: none;
          height: 2em;
          width: 8em;
          left: -1.5em;
          .item {
            background: #fff;
            box-shadow: 1px 2px 0px 0px #000 !important;
            border-radius: 0 0 5px 5px;
            height: 2em;
            width: 8em;
            padding: 0.3em 0.5em !important;
            span {
              color: #000;
              font-size: 13px;
              margin-left: 2em;
            }
          }
        }
      }
    }
  }
`;
export const UrlContainer = styled.div`
  flex: 0.15;
  font-size: 14px;
  justify-content: flex-start;
  color: white;
`;
export const LogoContainer = styled.div`
  justify-content: flex-start;
  flex: 1;
  display: flex;
  color: white;
  font-size: 13px;
`;
export const ProjectName = styled.div`
  margin-top: 0.1em;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
