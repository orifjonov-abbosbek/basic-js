const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log(Object.prototype.toString.call(date));

  try {
    if (date === undefined) {
      return "invalid data and time";
    }

    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("invalid date!");
    }

    const month = date.getMonth();

    if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    } else {
      return 'winter';
    }

  } catch (err) {
    throw new Error("invalid date!");
  }
}



getSeason();
module.exports = {
  getSeason,
};
