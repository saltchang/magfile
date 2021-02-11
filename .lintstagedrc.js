module.exports = {
  '**/*.+(js|jsx|ts|tsx)': [
    'yarn eslint --fix "**/*.{js,jsx,ts,tsx}"',
    'yarn format',
  ],
  '*.+(json|scss|css|html|md)': ['yarn format'],
};
