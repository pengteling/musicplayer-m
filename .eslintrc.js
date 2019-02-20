module.exports = {
    "extends": [
      "airbnb-base",
      "plugin:vue/recommended"
    ],
    "plugins":[
      "vue"
    ],
    "env":{
      "browser":true
    },
    "parserOptions":{
      "parser": "babel-eslint",
      "ecmaVersion":6,
      "sourceType":"module",
      "ecmaFeatures":{
        "jsx":true
      }
    },
    "rules":{
      "semi": 0,
      "vue/require-prop-types":"off",
      "linebreak-style":0,
      "no-console":0,
      "import/no-unresolved":0,
      "import/extensions":0,
      "vue/component-name-in-template-casing":0,
      "vue/html-self-closing":0,
      "max-len":0,
      "no-unused-vars":0,
      "radix":0,
      "no-plusplus":0,
      "object-shorthand":0,
      "import/prefer-default-export":0,
      "no-param-reassign":0
    }
};
