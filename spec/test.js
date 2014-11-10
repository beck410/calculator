/*tests go here */
describe('input test', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
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

  it('should add 2 and 2', function(){
    calc.press('2');
    calc.press('+');
    calc.press('2');
    calc.press('=');
    assert.equal($('.display').text(), '4');
  })

  it('Can Multiply 0s', function(){
    calc.press('3');
    calc.press('*');
    calc.press('0');
    calc.press('=');
    assert.equal($('.display').text(), '0');
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
