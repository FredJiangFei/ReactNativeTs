import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.64" cy="8.64" r="7.64" stroke="white" stroke-width="1.91"/>
        <path d="M22.0001 21.9999L13.8901 13.8899" stroke="white" stroke-width="1.91"/>
    </svg>
`;

export default function Search({ ...rest }) {
  return <SvgXml xml={xml} { ...rest }/>;
}
