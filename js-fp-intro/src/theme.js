import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/dist/styles/prism/okaidia'
import codeTheme from "./codeTheme"

export default {
  ...theme,
  codeSurfer: {
    ...codeTheme,
    showNumbers: false
  },
  prism: {
    style: okaidia
  }
}

