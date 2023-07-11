import { assertEquals } from "std/testing/asserts.ts";
import { getFirstCharacterFromString } from "./utils.ts";

Deno.test("Utils", () => {
  Deno.test("getFirstCharacterFromString", async (test) => {
    await test.step("Longitud del texto", () => {
      const firstChar = getFirstCharacterFromString("Hola");
      assertEquals(firstChar, "H");
    });

    await test.step("Texto vacio", () => {
      const firstChar = getFirstCharacterFromString("");
      assertEquals(firstChar, undefined);
    });
  });
});
