import { describe, expect, test} from "vitest";


const demoPerson = {
    age : 22,
    name : "John Doe",
    isCandian : true
}



describe("Test Demo Person",()=>{
    test("person is defined",()=>{
        expect(demoPerson).toBeDefined();
    })
    test("person is canadian",()=>{
        expect(demoPerson.isCandian).toBeTruthy();
    })
})