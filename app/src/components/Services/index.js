import React from 'react';
import Link from 'next/link';
import servicesData from '../../lib/servicesData';
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
                {servicesData.map((service) => (
                    <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <ServicesCard>
                            <ServicesIcon src="/images/svg-1.svg" />
                            <ServicesH2>{service.title}</ServicesH2>
                            <ServicesP>{service.shortDescription}</ServicesP>
                        </ServicesCard>
                    </Link>
                ))}
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
