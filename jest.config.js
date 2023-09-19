module.exports = {
  preset: "ts-jest",
  // 此处默认是'node'，如果要进行vue组件测试需要改为‘jsdom'
  testEnvironment: "jsdom",
  transform: {
    // .vue文件用 vue-jest 处理
    "^.+\\.vue$": "@vue/vue3-jest",
    // .js或者.jsx用 babel-jest处理
    "^.+\\.jsx?$": "babel-jest",
    // .ts文件用ts-jest处理
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec).[jt]s?(x)"],
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
