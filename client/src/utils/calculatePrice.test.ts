import calculatePrice from "./calculatePrice";

describe("constructor price calculator", () => {
  it("should return price of single ingredient as float number", () => {
    const firstArray = [
      {
        name: "Test",
        id: "test",
        inStock: true,
        literPrice: 100,
        amount: 500,
        multiple: 1,
      },
    ];

    const resultWithSingleIngredient = calculatePrice(firstArray);

    expect(resultWithSingleIngredient).toEqual(50.0);
  });

  it("should return sum of all ingredients as float number, rounded up", () => {
    const firstArray = [
      {
        name: "Test",
        id: "test",
        inStock: true,
        literPrice: 8,
        amount: 333.33,
        multiple: 1,
      },
      {
        name: "Test2",
        id: "test2",
        inStock: true,
        literPrice: 10,
        amount: 333.33,
        multiple: 1,
      },
      {
        name: "Test3",
        id: "test3",
        inStock: true,
        literPrice: 15,
        amount: 333.33,
        multiple: 1,
      },
    ];

    const resultWithSingleIngredient = calculatePrice(firstArray);

    expect(resultWithSingleIngredient).toEqual(11.0);
  });

  it("should return 0, cause ingredient array is empty", () => {
    const firstArray: never[] = [];

    const resultWithSingleIngredient = calculatePrice(firstArray);

    expect(resultWithSingleIngredient).toEqual(0);
  });
});
