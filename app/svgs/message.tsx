import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 14.5C24 9.25329 19.7467 5 14.5 5C9.25329 5 5 9.25329 5 14.5C5 19.7467 9.25329 24 14.5 24H24L21.34 21.08C23.0497 19.3168 24.004 16.956 24 14.5Z" stroke="white" stroke-width="1.9"/>
        <path d="M17.3496 14.5H19.2496" stroke="white" stroke-width="1.9"/>
        <path d="M13.5498 14.5H15.4498" stroke="white" stroke-width="1.9"/>
        <path d="M9.75 14.5H11.65" stroke="white" stroke-width="1.9"/>
    </svg>
`;

export default function Message({ ...rest }) {
  return <SvgXml xml={xml} { ...rest }/>;
}
