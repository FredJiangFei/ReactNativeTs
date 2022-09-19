import { SvgXml } from 'react-native-svg'
import colors from '../config/colors'

const xml = `
<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H23V7Z"/>
</svg>
`

export default function GoBack({ ...rest }) {
  return <SvgXml xml={xml} fill={colors.white} {...rest}/>
}
