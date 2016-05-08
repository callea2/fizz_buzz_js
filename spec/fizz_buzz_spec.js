describe("Fizz_Buzz"), function() {
  var fizz_buzz;

  beforeEach(function() {
    fizz_buzz = new Fizz_Buzz();
  });

  it("returns 'fizz' if number is divisible by 3", function() {
    expect(fizz_buzz(3)).toEqual('Fizz');
  });
};
