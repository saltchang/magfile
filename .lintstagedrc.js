module.exports = {
  '**/*.+(js|jsx|ts|tsx|vue)': [
    'yarn eslint --fix "**/*.{js,jsx,ts,tsx,vue}"',
    'yarn format',
  ],
  '*.+(json|scss|css|html|md)': ['yarn format'],
};
