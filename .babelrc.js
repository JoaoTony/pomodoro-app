module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        "rootPathPrefix": "@/"
      }
    ],
    ["module-resolver", {
        "root": ["."],
        "alias": {
          "@/components/*": ["components/*"],
          "@/context/*": ["context/*"],
          "@/styles/*": ["styles/*"],
          "@/screens/*": ["screens/*"],
          "@/types/*": ["types/*"],
          "@/utils/*": ["utils/*"],
          "@/tests/*": ["tests/*"],
          "@/hooks/*": ["hooks/*"],
        }
      }
    ]
  ]
}