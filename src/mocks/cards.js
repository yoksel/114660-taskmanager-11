import {getRandomBool} from '../helpers';
import {ColorsNames, WEEKDAYS} from '../constants';
import {DESCRIPTIONS} from './constants';

const WEEK = 7;

const getRandomItem = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const getRandomDate = () => {
  const now = new Date();
  const direction = getRandomBool() ? 1 : -1;
  const offset = Math.floor(Math.random() * WEEK);

  now.setDate(now.getDate() + offset * direction);

  return now;
};

const getWeekDays = (hasChecked = true) => {
  if (!hasChecked) {
    return WEEKDAYS;
  }

  return Object.assign({}, WEEKDAYS, {mo: true});
};

const getCardsData = (quantity) => {
  const data = [];

  for (let i = 0; i < quantity; i++) {
    const isRepeat = getRandomBool();
    const isFavorite = getRandomBool();
    const isArchive = true;//getRandomBool();

    const id = String(new Date() + Math.random());
    const description = getRandomItem(DESCRIPTIONS);
    const color = getRandomItem(Object.values(ColorsNames));
    const dueDate = isRepeat ? null : getRandomDate();
    const weekDays = getWeekDays(isRepeat);
    let isDeadline = false;
    if (dueDate && dueDate < new Date()) {
      isDeadline = true;
    }

    data.push({
      id,
      description,
      dueDate,
      weekDays,
      color,
      isRepeat,
      isFavorite,
      isArchive,
      isDeadline,
    });
  }

  return data;
};

export {getCardsData};
