import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const StyledFooterContainer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;

  width: 100%;
  height: auto;
  background-color: black;
  color: white;
`

const Container = styled.div`
  width: 100%;
  max-width: 1000px;

  font-family: "Source Sans Pro","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;

  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
`

const Column = styled.div`
  width: 190px;
  height: auto;
  float: left;
  box-sizing: border-box;
  list-style-type: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
`

const CenterText = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
`

const StylizedLink = styled(NavLink)`
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;
  text-decoration: none;
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
  margin-top: 15px;
`

function Footer() {
  return (
    <StyledFooterContainer>
      <Container>
        <Column>
          <LinkList>
            <Item>
              <StylizedLink to="/privacy">Datenschutz</StylizedLink>
            </Item>
            <Item>
              <StylizedLink to="/impressum">Impressum</StylizedLink>
            </Item>
          </LinkList>
        </Column>
        <br />
        <CenterText>© BELOVA NAGELSTUDIO</CenterText> <br />
        <br />
      </Container>
    </StyledFooterContainer>
  );
}

export default Footer;