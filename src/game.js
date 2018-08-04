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
  const iter = (
    health1: number,
    name1: string,
    health2: number,
    name2: string,
    order: number,
    log: List,
  ) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card: List = random(cards);
    const cardName: string = car(card);
    const damage: number = cdr(card)();
    const newHealth: number = health2 - damage;

    const message: string = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    let stats: List;
    // В логе игроки всегда должны быть на своих местах. Первый игрок слева, второй - справа
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    // Хитрость решения учителя состоит в том, что данные игроков всегда меняются местами. Это видно
    // по вызову ниже. Параметры первого игрока становятся параметрами второго и наоборот.
    // Такой подход позволяет упростить логику и всегда считать что атакует игрок номер 1.
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    // END
  };

  const startHealth: number = 10;
  const logItem: List = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards => (name1, name2) => run(name1, name2, cards);
