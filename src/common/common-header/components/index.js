import React from "react";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_USER } from "../queries";
import anyfinLogoSrc from "../../../assets/anyfin_logo_white.png";

import {
  HeaderWrapper,
  AnyfinLogo,
  UserAccountContainer,
  LogoContainer,
  ProjectName
} from "./index.styled";

const Header = (props) => {
  const history = useHistory();
  const [userFullName, setUserFullName] = React.useState("");
  const { data } = useQuery(GET_USER,{fetchPolicy: "no-cache"});

  React.useEffect(()=>{
    if(data){
      setUserFullName(data.user.name);
    }
  },[data])

  const handleLogout = async () => {
   localStorage.removeItem('token');
   history.push("/login");
  };
  return (
    <HeaderWrapper>
      <LogoContainer>
        {" "}
        <AnyfinLogo onClick={() => history.push("/dashboard")} src={anyfinLogoSrc} />{" "}
         <ProjectName>Anyfin Exchange Radar</ProjectName> 
      </LogoContainer>

      <UserAccountContainer>
        <Menu.Menu position="left">
          <Menu.Item className="border">
            <Icon name="address book" />
            <Dropdown text={`${userFullName ? userFullName: "anonymous"}`}>
              <Dropdown.Menu>
                <Dropdown.Item text="Sign out" onClick={handleLogout} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </UserAccountContainer>
    </HeaderWrapper>
  );
};

export default Header;
