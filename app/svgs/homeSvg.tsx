import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.455 10.2125V26.6376H4.5459V10.2125" stroke="white" stroke-width="2"/>
<path d="M27 12.559L14 2L1 12.559" stroke="white" stroke-width="2"/>
</svg>
`;

export default function HomeSvg() {
  return <SvgXml xml={xml} />;
}
