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
            "@api": "./src/api",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@contexts": "./src/contexts",
            "@/features": "./src/features",
            "@/product": "./src/features/product",
            "@hooks": "./src/hooks",
            "@store": "./src/store",
            "@screens": "./src/screens",
            "@services": "./src/services",
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
