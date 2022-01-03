import React from "react";
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ContentContainer = styled.div`
  width: 90%;
  max-width: 1000px;

  font-family: "Source Sans Pro","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;

  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;

  font-size: 32px;
`

function About() {
  return (
    <PageContainer>
      <ContentContainer>
        <h2>Leistungen</h2>
        <h3>Schöne und gepflegte Hände</h3>
        Maniküre ohne Lack 25€ <br />
        Maniküre mit Lack 30€ <br />
        Maniküre mit Gel (Shellac) 40€ <br />
        Neue Modellage mit Gel oder Akrylgel 50€ <br />
        Auffüllen mit Gel oder Akrylgel 40€ <br />
        Naturnagel verstärken mit Akryl 5€ <br />
        Naturnagel verstärken mit Gel 10€ <br />
        Reparatur pro Nagel 5€ <br />
        Handmassage – Gratis <br />
        <br />
        <h3>Schöne, gesunde und gepflegte Füße</h3>
        Pediküre ohne Lack 35€ <br />
        Pediküre mit Lack 40€ <br />
        Pediküre mit Gel (Shellac) 50€ <br />
        Fußmassage – Gratis <br />
        <br />
        <h3>Design</h3>
        French 5€ <br />
        Art pro Nagel 1€ <br />
        Strassstein, Stempel, usw. 1 – 5€ <br />
        <br />
      </ContentContainer>
    </PageContainer>

  );
}

export default About;