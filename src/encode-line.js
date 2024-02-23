const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const nameCount = {};
  const result = [];

  for (const name of names) {
    if (nameCount[name] === undefined) {
      result.push(name);
      nameCount[name] = 1;
    } else {
      const newName = `${name}(${nameCount[name]++})`;
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};
