// BEGIN (write your solution here)
// @flow
export default class SimpleCard {
  constructor(name, loss) {
    this.name = name;
    this.loss = loss;
  }

  damage() {
    return this.loss;
  }
}
// END
