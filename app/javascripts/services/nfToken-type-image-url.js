const TOKEN_TYPE_IMAGE_URLS = [
  '/images/token-images/icons-token--1024-1024.png',
  '/images/token-images/icons-badge--1024-1024.png'
]

const TOKEN_TYPE_IMAGE_URLS_SMALL = [
  '/images/token-images/icons-token--128-128.png',
  '/images/token-images/icons-badge--128-128.png'
]

export default function (tokenType, size) {
  switch (size) {
    case 'small':
      return TOKEN_TYPE_IMAGE_URLS_SMALL[tokenType]
    default:
      return TOKEN_TYPE_IMAGE_URLS[tokenType]
  }
}
