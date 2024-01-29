export const getLocalstore = <T>(key: string): T | undefined => {
  const local = localStorage.getItem(key);

  if (!local) return undefined;

  return JSON.parse(local) as T;
};

export const setLocalstore = (key: string, value: any) => {
  const local = JSON.stringify(value);

  localStorage.setItem(key, local);
};

export const removeLocalstore = (key: string) => {
  localStorage.removeItem(key);
};
