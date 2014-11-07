/*tests go here */
describe('input test', function(){

  beforeEach(function(){
    $('.display').text('');
  })

  it('should add 2 to the display', function(){
    calc.press('2');
    assert.equal($('.display').text(), "2");
  })

  it('should add multiple numbers to the display', function(){
    calc.press('1');
    calc.press('2');
    assert.equal($('.display').text(), '12');
  })

  it('should disable double decimal', function(){
    calc.press('1');
    calc.press('.');
    calc.press('.');
    assert.equal($('.display').text(), '1.');
  })

  it('floating points should be correct', function(){
    calc.press('.');
    calc.press('1');
    calc.press('+');
    calc.press('.');
    calc.press('2');
    calc.press('=');
    assert.equal($('.display').text(), '.3');
  })
})
