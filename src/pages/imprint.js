/*
 * @akoenig/website
 *
 * Copyright(c) 2017 André König <andre.koenig@gmail.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@gmail.com>
 *
 */

import React from "react";
import Link from "gatsby-link";

import styled from "styled-components";

import { Email } from "../shared/Email";

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  text-align: left;
  max-width: 740px;
  padding: 0.5rem;
`;

const Title = styled.h1`
  margin: 2rem 0;
`;
const Address = styled.section``;
const AddressTitle = styled.h2``;
const Contact = styled.section`
  margin: 2rem 0;
`;
const Vat = styled.p`
  margin: 1rem 0;
`;
const ContactTitle = styled.h2``;

const Disclaimer = styled.section``;
const DisclaimerTitle = styled.h2``;
const DisclaimerSubtitle = styled.h3``;
const DisclaimerContent = styled.p``;

const PrivacyPolicy = styled.section``;
const PrivacyPolicyTitle = styled.h2``;
const PrivacyPolicyParagraph = styled.p``;

const Imprint = () => (
  <Wrapper>
    <Title>Impressum</Title>
    <Address>
      <AddressTitle>Angaben gemäß § 5 TMG:</AddressTitle>
      André König<br />
      Kielmannseggstraße 67<br />
      22043 Hamburg
      <Vat>USt-IdNr.: DE309947639</Vat>
    </Address>
    <Contact>
      <ContactTitle>Kontakt:</ContactTitle>
      Telefon: +49 157 3011 4911 <br />
      E-Mail: <Email>hello (at) andrekoenig.de</Email>
    </Contact>
    <Disclaimer>
      <DisclaimerTitle>Haftungsausschluss (Disclaimer)</DisclaimerTitle>
      <DisclaimerSubtitle>Haftung für Inhalte</DisclaimerSubtitle>
      <DisclaimerContent>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </DisclaimerContent>

      <DisclaimerSubtitle>Haftung für Links</DisclaimerSubtitle>
      <DisclaimerContent>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </DisclaimerContent>

      <DisclaimerSubtitle>Urheberrecht</DisclaimerSubtitle>
      <DisclaimerContent>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </DisclaimerContent>
    </Disclaimer>
    <PrivacyPolicy>
      <PrivacyPolicyTitle>Datenschutzerklärung:</PrivacyPolicyTitle>
      <PrivacyPolicyParagraph>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </PrivacyPolicyParagraph>
      <PrivacyPolicyParagraph>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben.
      </PrivacyPolicyParagraph>
      <PrivacyPolicyParagraph>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </PrivacyPolicyParagraph>
    </PrivacyPolicy>
  </Wrapper>
);

export default Imprint;
