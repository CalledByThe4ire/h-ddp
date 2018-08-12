import { map } from 'hexlet-pairs-data';
import { getAttribute, getName } from './tags';

// BEGIN (write your solution here)
// @flow
export default list =>
  map((element) => {
    const tagName = getName(element);
    const attrName = tagName === 'a' || tagName === 'link' ? 'href' : 'src';
    return getAttribute(attrName, element);
  }, list);
// END
