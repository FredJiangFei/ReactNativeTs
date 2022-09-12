import { SvgXml } from 'react-native-svg'

const xml = `
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.5H20" stroke="white" stroke-width="2"/>
    <path d="M0 9.5H20" stroke="white" stroke-width="2"/>
    <path d="M0 17.5H20" stroke="white" stroke-width="2"/>
</svg>
`

export default function Menu({ ...rest }) {
  return <SvgXml xml={xml} {...rest} />
}
