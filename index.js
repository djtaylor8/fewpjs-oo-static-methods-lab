class Formatter {

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(str) {
    let arr = [];
    let exclude = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']

    arr = str.split(' ');
    return arr.map((word, i) => {
      return exclude.includes(word) && i != 0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }


}