import { getMethod } from './generic';
import { contents } from './type';

export const getName = self =>
  getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)
// @flow

// END
