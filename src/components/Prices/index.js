import React from 'react';

import {
	PricesContainer,
	PricesH1,
	PricesWrapper,
	PricesCard,
	PricesIcon,
	PricesH2,
	PricesP,
} from './PricesElements';

const Prices = () => {
	return (
		<PricesContainer id='prices'>
			<PricesH1>Our Prices</PricesH1>
			<PricesWrapper>
				<PricesCard>
					<PricesIcon src={Icon1} />
					<PricesH2>Reduce Expenses</PricesH2>
					<PricesP>
						We help reduce your fees and increase your overall revenue.
					</PricesP>
				</PricesCard>
				<PricesCard>
					<PricesIcon src={Icon2} />
					<PricesH2>Virtual Offices</PricesH2>
					<PricesP>
						You can access our platform online anywhere in the world.
					</PricesP>
				</PricesCard>
				<PricesCard>
					<PricesIcon src={Icon3} />
					<PricesH2>Premium Benefits</PricesH2>
					<PricesP>
						Unlock our special membership card that returns 2% cash back.
					</PricesP>
				</PricesCard>
			</PricesWrapper>
		</PricesContainer>
	);
};

export default Prices;
