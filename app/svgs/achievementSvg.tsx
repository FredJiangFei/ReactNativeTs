import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.62916 6.23902C5.23404 11.1908 9.53328 14.8524 14.5182 14.6615C19.5031 14.4706 23.5097 10.4908 23.734 5.50732V2.40488C23.734 2.03228 23.586 1.67494 23.3226 1.41148C23.0591 1.14801 22.7018 1 22.3292 1H5.49989C5.49989 1 4.3877 1.13902 4.3877 2.73415" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9097 30.2683C20.9097 26.5384 17.8859 23.5146 14.156 23.5146C10.4261 23.5146 7.40234 26.5384 7.40234 30.2683H16.4243" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0125 16.2342C18.0125 17.1111 17.3016 17.822 16.4247 17.822H11.8661C10.9892 17.822 10.2783 17.1111 10.2783 16.2342C10.2783 15.3572 10.9892 14.6464 11.8661 14.6464H14.1417" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.568 23.5512V17.8146" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.7344 2.74146C25.6021 2.74947 27.1142 4.26156 27.1222 6.12926C27.1061 7.43202 26.3474 8.61118 25.1685 9.16585" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.3878 2.74146C2.5201 2.74947 1.00802 4.26156 1 6.12926C1.01613 7.43202 1.77477 8.61118 2.95366 9.16585" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="15.5247" cy="20.6829" r="0.731707" fill="#F7F7F7"/>
<circle cx="18.7434" cy="30.2683" r="0.731707" fill="#F7F7F7"/>
</svg>
`;

export default function AchievementSvg() {
  return <SvgXml xml={xml} />;
}
