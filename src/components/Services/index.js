import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP 
        } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Card Section</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Card One</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Card Two</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Card Three</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
