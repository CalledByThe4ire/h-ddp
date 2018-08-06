import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  // @flow
  let virtualTable = methods;
  while (car(head(virtualTable)) !== typeTag(obj) && car(cdr(head(virtualTable))) !== methodName) {
    virtualTable = tail(virtualTable);
  }
  return cdr(cdr(head(virtualTable)));
  // END
};

export const definer = type => (methodName, f) => {
  methods = consList(attach(type, cons(methodName, f)), methods);
};
