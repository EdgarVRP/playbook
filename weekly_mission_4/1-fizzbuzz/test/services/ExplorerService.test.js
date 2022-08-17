const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");

describe("Unit Test for explorer Service", () => {
    test("test 1 get num explorers", () => {
        const explorers= Reader.readJsonFile("explorers.json");
        ExplorerService.filterByMission(explorers, "node");
        let test=ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(test).toBe(10);
    });
    test("test 2 get git-username", () => {
        const explorers= Reader.readJsonFile("explorers.json");
        ExplorerService.filterByMission(explorers, "node");
        let test=ExplorerService.getExplorersUsernamesByMission(explorers, "node");//Resultados Esperados
        expect(test).toStrictEqual([
            "ajolonauta1",
            "ajolonauta2",
            "ajolonauta3",
            "ajolonauta4",
            "ajolonauta5",
            "ajolonauta11",
            "ajolonauta12",
            "ajolonauta13",
            "ajolonauta14",
            "ajolonauta15"
        ]);
    });  
});
