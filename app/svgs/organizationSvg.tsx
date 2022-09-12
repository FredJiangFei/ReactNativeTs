import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="11.5505" width="7.91286" height="7.91286" rx="2.86" stroke="#F7F7F7" stroke-width="2" stroke-linecap="square"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7246 1H29.9998V6.27524H24.7246V1Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="square"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7246 12.8624H29.9998V18.1377H24.7246V12.8624Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="square"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7246 24.7247H29.9998V30H24.7246V24.7247Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="square"/>
<path d="M24.7252 27.3623H16.8262V3.63757H24.7252" stroke="#F7F7F7" stroke-width="2" stroke-linecap="square"/>
<path d="M24.725 15.5H8.91309" stroke="#F7F7F7" stroke-width="2" stroke-linecap="square"/>
</svg>
`;

export default function OrganizationSvg() {
  return <SvgXml xml={xml} />;
}
