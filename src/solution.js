/* eslint-disable no-nested-ternary */

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line

import {
  cons as consList,
  l,
  random,
  head,
  reverse,
  toString as listToString,
} from 'hexlet-pairs-data'; // eslint-disable-line

import {
  getName as getSimpleCardName,
  damage as simpleCardDamage,
} from './simpleCard';

import {
  getName as getPercentCardName,
  damage as percentCardDamage,
} from './percentCard';

import { typeTag } from './type';

// @flow
const isSimpleCard = card => typeTag(card) === 'SimpleCard';
const isPercentCard = card => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0 || health2 <= 0) {
      const message = `Игрок '${health1 <= 0 ? name1 : name2}' был убит`;
      const logInfo = cons(cons(health1, health2), message);
      return consList(logInfo, log);
    }

    const card = customRandom(cards);
    const cardName = isSimpleCard(card)
      ? getSimpleCardName(card)
      : getPercentCardName(card);

    const cardDamage = isPercentCard(card)
      ? order % 2 !== 0
        ? percentCardDamage(card, health2)
        : percentCardDamage(card, health1)
      : simpleCardDamage(card);

    const player1Health = order % 2 === 0 ? health1 - cardDamage : health1;
    const player2Health = order % 2 !== 0 ? health2 - cardDamage : health2;

    const message = `Игрок '${
      order % 2 !== 0 ? name1 : name2
    }' применил '${cardName}' против '${
      order % 2 !== 0 ? name2 : name1
    }' и нанес урон '${cardDamage}'`;

    const logInfo = cons(cons(player1Health, player2Health), message);

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

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => (name1, name2) =>
  run(name1, name2, cards, customRandom);
