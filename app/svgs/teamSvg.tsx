import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19L14.5 17L17 19" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<path d="M14.5 15V17" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 6C16.433 6 18 7.65863 18 9.70466V11H11V9.70466C11 7.65863 12.567 6 14.5 6V6Z" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<circle cx="14.5" cy="3.5" r="2.5" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5061 23C26.4357 23 28 24.6586 28 26.7047V28H21V26.7047C21 25.7199 21.3698 24.7756 22.0277 24.0805C22.6855 23.3854 23.5774 22.9966 24.5061 23V23Z" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<circle cx="24.5" cy="20.5" r="2.5" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 23C5.42826 23 6.3185 23.3903 6.97487 24.0851C7.63125 24.7798 8 25.7221 8 26.7047V28H1V26.7047C1 24.6586 2.567 23 4.5 23Z" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
<circle cx="4.5" cy="20.5" r="2.5" stroke="white" stroke-width="1.91" stroke-linecap="square"/>
</svg>
`;

export default function TeamSvg() {
  return <SvgXml xml={xml} />;
}
