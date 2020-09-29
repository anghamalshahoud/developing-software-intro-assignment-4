import {Hello} from './function';
import { expect } from 'chai';
import 'mocha';

describe("Hello Function", () => {
    it("should return Hello Angham", () => {
        const result = Hello("Angham");
        expect(result).to.equal("Hello Angham");
    });
});