import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './Services.styles';
import { ReactComponent as Icon1} from '../../images/svg-1.svg'
import { ReactComponent as Icon2} from '../../images/svg-2.svg'
import { ReactComponent as Icon3} from '../../images/svg-3.svg'

function Services() {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>

            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon>
                        <Icon1 width='160px' height='160px'/>
                    </ServicesIcon>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We Help reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon>
                        <Icon2 width='160px' height='160px'/>
                    </ServicesIcon>
                    <ServicesH2>Premium Benefits expenses</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon>
                        <Icon3 width='160px' height='160px'/>
                    </ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
