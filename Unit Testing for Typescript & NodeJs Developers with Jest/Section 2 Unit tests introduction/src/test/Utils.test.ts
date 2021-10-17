import { error } from "console";
import { Utils } from "../app/Utils";

describe("Utils test suite", () => {

  beforeEach(() => {
    console.log('before each')
  })

  beforeAll(() => {
    console.log('before all')
  })

  test("first test", () => {
    const result = Utils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  test("parse simple Url", () => {
    const parsedUrl = Utils.parseUrl("http://localhost:3000/");
    expect(parsedUrl.href).toBe("http://localhost:3000/");
    expect(parsedUrl.port).toBe("3000");
    expect(parsedUrl.protocol).toBe("http:");
    expect(parsedUrl.query).toEqual({});
  });
  test("Parse URL with query", () => {
    const parsedUrl = Utils.parseUrl(
      "http://localhost:3000/login?user=user&password=pass"
    );
    const expectedQuery = {
      user: "user",
      password: "pass",
    };
    expect(parsedUrl.query).toEqual(expectedQuery);
  });
  test('test invalid URL', ()=> {
    expect(() => {
      Utils.parseUrl("");
    }).toThrowError("Empty URL");
  })

  test('test invalid URL with try catch', ()=> {
    try {
      Utils.parseUrl("");
    }catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty("message", "Empty URL");
    }
  })
});
