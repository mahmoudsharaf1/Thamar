module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@/features": "./src/features",
            "@store": "./src/store",
            "@screens": "./src/screens",
            "@styles": "./src/styles",
            "@theme": "./src/theme",
            "@/types": "./src/types",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
