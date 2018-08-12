import { map } from 'hexlet-pairs-data';
import { getAttribute, getName } from './tags';

// BEGIN (write your solution here)
// @flow
const mapping = {
  img: t => getAttribute('src', t),
  a: t => getAttribute('href', t),
  link: t => getAttribute('href', t),

};
export default tags => map(tag => mapping[getName(tag)](tag), tags);
// END
