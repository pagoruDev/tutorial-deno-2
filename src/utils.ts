export const getFirstCharacterFromString = (str: string): string | undefined =>
  str?.length ? str.split("")[0] : undefined;
