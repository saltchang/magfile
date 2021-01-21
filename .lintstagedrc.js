module.exports = {
  '*.+(js|jsx|ts|tsx|vue)': ['yarn lint --fix', 'yarn format'],
  '*.+(json|scss|css|html|md)': ['yarn format'],
};
