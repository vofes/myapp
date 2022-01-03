import React from "react";
import styled from 'styled-components';
import Gallery from './Gallery';
import instagramLogo from "../insta_logo.png";

const InstagramLink = "https://www.instagram.com/belova_nagelstudio_munchen/";
const GoogleMapLink = "https://goo.gl/maps/Phuon7mwDZsZxH1Z9";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  width: 90%;
  max-width: 1000px;

  font-family: "Source Sans Pro","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;

  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;

  font-size: 32px;
`

const IconSetting = styled.img`
  width: 2em;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
`


function Home() {
  return (
    <Container>
      <HomeContainer>
        Ihre schönen, gesunden und gepflegten Hände und Füße im BELOVA Nagelstudio <br />
        <br />
        <Link href={GoogleMapLink}>Blutenburgstraße 122, 80634 München</Link><br />
        <br />
        Termine unter : <br />
        0 162 374 9339 <br />
        <br />
        <a href={InstagramLink}><IconSetting src={instagramLogo} /></a>
        <Link href={InstagramLink}>Instagram</Link>
        <br />

        <Gallery />
        <br />

        Im BELOVA Nagelstudio erhalten Sie verschiedene Arten von Maniküren und Pediküren sowie erstklassige Nagel-
        und Zehenneumodellagen mit dem Shellac System. <br />
        <br />
        Somit versprechen wir die bestmöglichen Ergebnisse für Sie. <br />
        <br />
        Außerdem bekommen Sie auf alle Neumodellagen und auf das Auffüllen zwei Wochen Garantie. <br />
        <br />
      </HomeContainer>
    </Container>
  );
}

export default Home;