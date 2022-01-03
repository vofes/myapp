import React from "react";
import { NavLink } from "react-router-dom";

import LogoImage from "../logo.png";
import styled from 'styled-components';

const ImageSetting = styled.img`
  width: 9rem;
`

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Item = styled.li`
  margin-top: 10px;
`

const StylizedLink = styled(NavLink)`
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

const NavigationBar = styled.nav`
  width: 100%;
  max-width: 1000px;

  font-family: "Source Sans Pro","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
  font-size: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding-bottom: 10px;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: solid;
  border-width: 1px;
  border-color: lightgray;

  margin-bottom: 25px;
`


function Navigation() {
  return (
    <NavContainer>
      <NavigationBar>

        <StylizedLink to="/myapp">
          <ImageSetting src={LogoImage}></ImageSetting>
        </StylizedLink>

        <LinkList>
          <Item>
            <StylizedLink to="/myapp">
              Startseite
            </StylizedLink>
          </Item>

          <Item>
            <StylizedLink to="/about">
              Leistungen
            </StylizedLink>
          </Item>

          <Item>
            <StylizedLink to="gallery">
              Galerie
            </StylizedLink>
          </Item>

          <Item>
            <StylizedLink to="contact">
              Kontakt
            </StylizedLink>
          </Item>
        </LinkList>
      </NavigationBar>
    </NavContainer>
  );
}

export default Navigation;