module.exports = {
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../../__tests__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/../../__tests__/fileMock.js',
  },
};
