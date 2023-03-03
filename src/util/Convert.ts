import dayjs from 'dayjs';

export class Convert {
  dateToTime(time: Date | string) {
    return dayjs(time).format('DD-MM-YY hh:mm:ss A');
  }

  stringToSlug = (text: string) => {
    return text.replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  slugToString = (slug: string) => {
    return slug
      .split('-')
      .map((word) => word.charAt(0) + word.slice(1))
      .join(' ');
  };

  spaceToDash = (text: string) => {
    return text.replace(/ /g, '-');
  };
}
