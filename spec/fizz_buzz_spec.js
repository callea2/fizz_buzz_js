describe("Fizz_Buzz"), function() {
  var fizz_buzz;

  beforeEach(function() {
    fizz_buzz = new Fizz_Buzz();
  });

  it("returns 'fizz' if number is divisible by 3", function() {
    expect(fizz_buzz(3)).toEqual('Fizz');
  });

  it("returns 'buzz' if number is divisible by 5", function() {
    expect(fizz_buzz(5)).toEqual('Buzz');
  });

  it("returns 'fizzbuzz' if number is divisible by 15", function() {
    expect(fizz_buzz(15)).toEqual('FizzBuzz');
  });
};
