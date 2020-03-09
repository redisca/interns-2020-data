declare global {
  const inputArray: Array<Item>;

  interface Item {
    id: number;
    name: string;
    image: string;
    parent?: number
  }
}

export {};
