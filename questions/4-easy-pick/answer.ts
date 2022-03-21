type MyPick<T extends Record<any, any>, K extends keyof T> = {
  [P in K]: T[P];
};