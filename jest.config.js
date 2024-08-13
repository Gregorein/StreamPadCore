export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}
