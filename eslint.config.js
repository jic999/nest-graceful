// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {},
  {
    rules: {
      "ts/no-extraneous-class": "off",
    }
  }
)