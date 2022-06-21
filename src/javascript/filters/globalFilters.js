const initFilters = (VueInstance) => {
  VueInstance.filter('trim', (text) => {
    return text.trim();
  })
  VueInstance.filter('capitalize', (text) => {
    return text[0].toUpperCase() + text.slice(1);
  })
  VueInstance.filter('punctuate', (text) => {
    if (text[text.length - 1] !== '.') 
      return text + '.';
    return text;
  })
}

export default initFilters