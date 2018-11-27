import theme from 'mdx-deck/themes'
import cb from 'react-syntax-highlighter/styles/prism/cb'

export default {
  ...theme,
  font: 'Menlo',
  fontSizes: ['24px', '28px', '36px', '48px'],
  prism: {
    style: cb
  }
}
