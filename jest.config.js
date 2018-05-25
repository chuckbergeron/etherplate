module.exports = {
  "verbose": true,
  "setupFiles": [
    "./jest-setup.js"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "testRegex": "(/spec/.*|\\.(test|spec))\\.(js)$",
  "globals": {
    "window": true
  },
  "moduleDirectories": ["node_modules"],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
  }
}
