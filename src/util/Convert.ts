import dayjs from 'dayjs';

export class Convert {
  dateToTime(time: Date | string) {
    const t = time.toLocaleString('en-US', {
      timeZone: 'Asia/Dhaka',
    });
    return dayjs(t).format('DD-MM-YY hh:mm:ss A');
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
