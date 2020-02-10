describe("whatCanIDrink", function() {
    
    describe("whatCanIDrink", function() {

       it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });

       it("should return Drink Toddy", function() {
          expect(whatCanIDrink(age < 14).toBe("Drink Toddy"));
       });

        it("should return Drink Coke", function() {
          expect(whatCanIDrink(age < 18).toBe("Drink Coke"));
       });

       it("should return Drink Beer", function() {
          expect(whatCanIDrink(age < 21).toBe("Drink Beer"));
       });

       it("should return Drink Whiskey", function() {
          expect(whatCanIDrink(age < 130).toBe("Drink Whiskey"));
       });

    });
});