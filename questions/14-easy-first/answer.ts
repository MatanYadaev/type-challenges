type First<T extends any[]> = T extends [infer K, ...any] ? K : never
