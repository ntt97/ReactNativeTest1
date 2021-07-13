import initials from 'initials';

export function getInitialName(name: string) {
  return name
    ? name.split(' ').length == 1
      ? initials(name.toLowerCase()).toString().toUpperCase()
      : charSymbol(name)
    : '';
}

const charSymbol = (name: string) => {
  const nameSplit = name.replace(/[^\w\s]/gi, '');
  let initials: any = nameSplit.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return initials;
};
export const NOOP = () => {};
