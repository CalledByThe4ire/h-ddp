/* eslint-disable no-unused-expressions */

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import {
  cons as consList,
  l,
  random,
  head,
  reverse,
  toString as listToString,
} from 'hexlet-pairs-data'; // eslint-disable-line

// @flow
type List = (...args: any) => any | null;

const run = (player1: string, player2: string, cards: List) => {
  const iter = (health1: number, name1: string, health2: number, name2: string, order: number, log: List) => {
    // BEGIN (write your solution here)

    let player1Health: number = health1;
    let player2Health: number = health2;
    let message: string = '';
    let logInfo: List = l();

    if (player1Health <= 0 || player2Health <= 0) {
      message = `Игрок '${player1Health <= 0 ? name1 : name2}' был убит`;
      logInfo = cons(cons(player1Health, player2Health), message);
      return consList(logInfo, log);
    }

    const rand: List = random(cards);
    const cardName: string = car(rand);
    const cardDamage: number = cdr(rand)();

    order % 2 !== 0
      ? (player2Health -= cardDamage)
      : (player1Health -= cardDamage);
    message = `Игрок '${
      order % 2 !== 0 ? name1 : name2
    }' применил '${cardName}' против '${
      order % 2 !== 0 ? name2 : name1
    }' и нанес урон '${cardDamage}'`;

    logInfo = cons(cons(player1Health, player2Health), message);

    return iter(
      player1Health,
      name1,
      player2Health,
      name2,
      order + 1,
      consList(logInfo, log),
    );
    // END
  };

  const startHealth: number = 10;
  const logItem: List = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards => (name1, name2) => run(name1, name2, cards);
