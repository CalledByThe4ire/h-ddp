// BEGIN (write your solution here)
// @flow
const make = (name, loss) => (message, health) => {
  switch (message) {
    case 'getName':
      return name;
    case 'damage':
      return loss;
    default:
      return 'undefined method';
  }
};

export default make;
// END
