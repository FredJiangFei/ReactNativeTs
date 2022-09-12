import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 8.3407L1 8.3407V2.39374L27 2.39374V8.3407Z" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<path d="M21.0946 0V4.76256" stroke="white" stroke-width="1.91"/>
<path d="M6.90616 0V4.76256" stroke="white" stroke-width="1.91"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 14.2877V8.3407H1V27.3785H27V14.2877Z" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<path d="M10.459 13.0908H12.8237" stroke="white" stroke-width="1.91"/>
<path d="M15.1758 13.0908H17.5405" stroke="white" stroke-width="1.91"/>
<path d="M19.9053 13.0908H22.27" stroke="white" stroke-width="1.91"/>
<path d="M10.459 17.8534H12.8237" stroke="white" stroke-width="1.91"/>
<path d="M5.72949 17.8534H8.09425" stroke="white" stroke-width="1.91"/>
<path d="M15.1758 17.8534H17.5405" stroke="white" stroke-width="1.91"/>
<path d="M19.9053 17.8534H22.27" stroke="white" stroke-width="1.91"/>
<path d="M10.459 22.6159H12.8237" stroke="white" stroke-width="1.91"/>
<path d="M5.72949 22.6159H8.09425" stroke="white" stroke-width="1.91"/>
<path d="M15.1758 22.6159H17.5405" stroke="white" stroke-width="1.91"/>
</svg>
`;

export default function CalendarSvg() {
  return <SvgXml xml={xml} />;
}
