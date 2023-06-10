module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            assets: "assets",
            env: ".env",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      // [
      //   "i18next-extract",
      //   {
      //     locales: ["en"],
      //     outputPath: "src/lang/{{ns}}.json",
      //     keyAsDefaultValue: ["en"],
      //     keySeparator: null,
      //     nsSeparator: null,
      //   },
      // ],
    ],
  };
};
