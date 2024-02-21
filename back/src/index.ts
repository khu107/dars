let obj: {
  name: string;
  surname: string;
  age: number;
  isActive: boolean;
  a: number;
  b: number;
} = {
  name: "Khusan",
  surname: "Butaev",
  age: 20,
  isActive: false,
  a: 5,
  b: 5,
};

const cacl = (a: number, b: number): number => {
  return a + b;
};

console.log(cacl(obj.a, obj.b));
