import { makeQueryParams } from "../uri";

describe("uri test", () => {
  test("uri normal test", () => {
    const search = "?width=50&height=50";
    expect(makeQueryParams(search)).toEqual({ width: "50", height: "50" });
  });
  test("uri empty test", () => {
    const search = "";
    expect(makeQueryParams(search, { width: 50, height: 50 })).toEqual({
      width: 50,
      height: 50
    });
  });
});
