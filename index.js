class SortedList {
  constructor() {
    (this.items = []), (this.length = this.items.length);
  }

  add(item) {
    this.items.push(item), this.item.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {}

  max() {
    if (this.length === 0) {
      throw new Error(
        "EmptyList: Cannot find the maximum value in an empty list."
      );
    }

    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items[0];
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
