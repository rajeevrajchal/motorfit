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
          },
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
