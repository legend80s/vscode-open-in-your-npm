import { deepStrictEqual } from "assert";
import { getNpmUrl } from "./registry";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const myExtension = require('../extension');
describe('getNpmUrl', () => {
	it('npmjs', () => {
    const input = 'axios';
    const actual = getNpmUrl(input);
    const expected = 'https//www.npmjs.com/package/axios';

    deepStrictEqual(actual, expected);
  });

  it('@foo npmjs', () => {
    const input = '@foo/axios';
    const actual = getNpmUrl(input);
    const expected = 'https//www.npmjs.com/package/@foo/axios';

    deepStrictEqual(actual, expected);
  });

  it('@ali tnpm', () => {
    const input = '@ali/axios';
    const actual = getNpmUrl(input);
    const expected = 'https//www.npmjs.com/package/@ali/axios';

    deepStrictEqual(actual, expected);
  });

  it('@alipay tnpm', () => {
    const input = '@alipay/axios';
    const actual = getNpmUrl(input);
    const expected = 'https//www.npmjs.com/package/@alipay/axios';

    deepStrictEqual(actual, expected);
  });
});
