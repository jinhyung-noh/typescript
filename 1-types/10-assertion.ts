{
  /**
   * Type Assertions ๐ฉ
   */

  // js ํจ์๋ ๋ชจ๋ anyํ์์ด๋ผ์ ํ์ธ ํ์
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // jsStrFunc()๋ anyํ์์ returnํ์ง๋ง
  // string์ด๋ผ๋ ๊ฒ์ ์๊ณ ์๋ ์ํฉ
  // string method๋ฅผ ๋ชป์ฐ๊ธฐ๋๋ฌธ์
  // result๋ฅผ string type์ผ๋ก castingํด์ค๋ค!
  // String.length ์ฌ์ฉ ๊ฐ๋ฅ!
  (result as string).length;
  (<string>result).length;

  // ํ์ง๋ง ์๋ชป assertionํ๋ฉด
  // ts์์๋ ๋์ด๊ฐ์ฃผ์ง๋ง
  // ์ค์  runtime์์๋ ์๋ฌ ๋ฐ์ ๊ฐ๋ฅ!!
  // ๋ฐ๋ผ์ ์ ๋ง ์ฅ๋ดํ์ง ์๋๋ค๋ฉด ์ฌ์ฉ x

  // !
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers๋ undefined์ผ ์๋ ์์ด์
  // push()๋ฅผ ์ฌ์ฉํ๋ฉด ๊ฒฝ๊ณ ํ์ง๋ง
  // !๋ฅผ ๋ถ์ด๋ฉด ํ์คํ๋ค๊ณ  ์ฅ๋ดํ๋ ๊ฒ!
  numbers!.push(2);
  // ๋ค๋ฅธ ์์: ๋ค์ !๋ฅผ ๋ถ์ด๋ ๊ฒ๋ ๊ฐ๋ฅ
  // querySelector()๋ E | null ๋ฐํํ์ง๋ง
  // ์ ๋ง ํ์คํ๋ค๊ณ  ์ ์ธ
  const button = document.querySelector("my-lass")!;
}
