/*tests go here */
describe('input test', function(){
  it('should print out input\'s value', function(){
    assert.equal(inputValue("penny"), "penny", "input value is penny");
    assert.equal(inputValue("jezzy"), "jezzy", "input value is jezzy");
    assert.equal(inputValue("beck"), "beck", "input value is beck");
  })
})
