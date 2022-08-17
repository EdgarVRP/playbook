const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit Test for FizzBuzz Service", () => {
    test("test 1", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer=FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        console.log(explorer);
        //Resultados Esperados
        expect(explorer).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
    });
});