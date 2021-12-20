var matchers = require ("./nottoBeNull")

describe("Matchers suite",()=>{
    test("Comparing objects with toBe() and toEqual()",()=>{
        var empObj = {
            id: 103,
            name: "teja",
            dep: "CS",
            designation: "Full Stack",
          }
          expect(matchers.returnObject()).toEqual(empObj);
        })

        test("to use matcher .not .toBeNull() with an object",()=>{
            var empObj = matchers.returnObject();
            console.log("returned data from the funtion is" + JSON.stringify(empObj));
            expect(empObj).not.toBeNull();
        })

    }) 