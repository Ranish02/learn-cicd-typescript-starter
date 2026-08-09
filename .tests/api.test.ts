import {describe , expect, test} from "vitest";
import { getAPIKey} from "../src/api/auth";

describe("API TESTS", ()=>{
    test("get api key is defined",()=>{
        expect(getAPIKey).toBeDefined();
    })
   test("Get API key is working",()=>{
        expect(getAPIKey("testingheaderstring")).toBeNull();
    })
})