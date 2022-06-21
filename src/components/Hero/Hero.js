import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I'm Will! Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        This web application shows the progression of the projects that I've completed as well as skills and achievements that I've obtained. I am always expanding my tool kit and experience with every project I try!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;