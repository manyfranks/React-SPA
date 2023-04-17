import React from 'react';
import Icon1 from '../../images/hydrovactruck.png';
import Icon2 from '../../images/marineassetretrieval.png';
import Icon3 from '../../images/pipelineservices.jpeg';
import Icon4 from '../../images/firstaid.jpeg';
import Icon5 from '../../images/streetsweeper.png';
import Icon6 from '../../images/environmentaltruck.png';
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
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Hydrovac Services</ServicesH2>
                    <ServicesP>Efficiently uncover underground utilities with eco-friendly Hydrovac Services – precision and safety combined.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Marine Asset Retrieval</ServicesH2>
                    <ServicesP>Recover valuable marine assets seamlessly with our expert retrieval services – safeguarding the environment while securing your investments.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Pipeline Services</ServicesH2>
                    <ServicesP>Trust in our reliable Pipeline Services for seamless installation, maintenance, and repair – ensuring safety and peak performance.</ServicesP>
                </ServicesCard>
								<ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>First-Aid & Site Security</ServicesH2>
                    <ServicesP>Equip your team with life-saving skills through our comprehensive First-Aid Training – fostering safety and confidence in any situation.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Street Sweeping</ServicesH2>
                    <ServicesP>Achieve pristine streets with our efficient Street Sweeping Services – promoting cleanliness, safety, and community pride.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>Environmental Services</ServicesH2>
                    <ServicesP>Rapidly address environmental incidents with our expert Spill Response Services – minimizing impact and restoring balance to the ecosystem.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
