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

function Contact() {
  return (
    <PageContainer>
      <ContentContainer>
        <h2>Kontakt</h2>
        0 162 374 9339 <br />
        Blutenburgstraße 122, 80634 München <br />
        Sie haben eine Frage oder ein Anliegen? <br />
        Dann nutzen Sie unser Kontaktformular. Wir kümmern uns schnellstmöglich um Ihr Anliegen. <br />
      </ContentContainer>
    </PageContainer>

  );
}

export default Contact;