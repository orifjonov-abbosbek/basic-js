const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  addLink(value) {
    if (value === undefined) {
      this.chain.push("(  )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.chain.length ||
      this.chain[position - 1] === undefined
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  finishChain() {
    let finalArray = this.chain.join("~~");
    this.chain = [];
    return finalArray;
  },
};

module.exports = {
  chainMaker,
};
