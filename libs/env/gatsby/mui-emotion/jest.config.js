module.exports = {
  displayName: "env-gatsby-mui-emotion",
  preset: "../../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../../coverage/libs/env/gatsby/mui-emotion"
}
