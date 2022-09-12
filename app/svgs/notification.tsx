import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.09 17.36V12.59C23.0845 7.84816 19.2418 4.00551 14.5 4C9.75816 4.00551 5.91551 7.84816 5.91 12.59V17.36L4 19.27V21.18H25V19.27L23.09 17.36Z" stroke="white" stroke-width="1.91"/>
        <path d="M17.19 21.1799C17.313 21.4985 17.3708 21.8386 17.36 22.1799C17.36 23.7595 16.0795 25.0399 14.5 25.0399C12.9204 25.0399 11.64 23.7595 11.64 22.1799C11.6291 21.8386 11.6869 21.4985 11.81 21.1799" stroke="white" stroke-width="1.91"/>
        <circle cx="24" cy="5" r="5" fill="#E95B5B"/>
    </svg>
`;

export default function Notification({ ...rest }) {
  return <SvgXml xml={xml} { ...rest }/>;
}
