export const camelize = (str, opts) => {
  const conf = {
    divider: null,
    pascal: false,
  };
  
  if (opts && typeof opts === 'object') {
    Object.assign(conf, opts);
  }

  return str.split(/[\s|\-|_|\.]/g).reduce((output, word, i) => {
    // Strip non-alpha
    word = word.replace(/[^a-z]+/gi, '');

    // Only alter words which are not initialisms
    if (/[a-z]+/g.test(word)) {
      word =
        (i > (!conf.pascal ? 0 : -1)
          ? word.charAt(0).toUpperCase()
          : word.charAt(0).toLowerCase()) + word.substr(1).toLowerCase();
    }

    if (!conf.divider) {
      return output + word;
    } else {
      if (i > 0 && word) {
        return output + conf.divider + word;
      } else {
        return output + word;
      }
    }
  }, '');
};
