/*tests go here */
describe('addition', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  })

  it('should add 2 to the display', function(){
    calc.press('2');
    assert.equal(calc.display(), "2");
  })

  it('should add 2 and 2', function(){
    calc.press('2');
    calc.press('+');
    calc.press('2');
    calc.press('=');
    assert.equal(calc.display(), '4');
  })
})

describe('subtraction', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  })

  it('should subtract 10 from 5', function(){
    calc.press('5');
    calc.press('-');
    calc.press('10');
    calc.press('=');
    assert.equal(calc.display(), '-5');
  })

})

describe('display multiple numbers', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  });

  it('should add multiple numbers to the display', function(){
    calc.press('3');
    calc.press('2');
    assert.equal(calc.display(),'32');
  })
})

describe('multiplication', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  })

  it('Can Multiply 0s', function(){
    calc.press('3');
    calc.press('*');
    calc.press('0');
    calc.press('=');
    assert.equal(calc.display(), '0');
  })

  it('Can multiply numbers', function(){
    calc.press('5');
    calc.press('0');
    calc.press('*');
    calc.press('2');
    calc.press('0');
    calc.press('=');
    assert.equal(calc.display(),'1000')
  })
})

describe('chaining', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  })

  it('Can chain addition', function(){
    calc.press('1');
    calc.press('+');
    calc.press('2');
    calc.press('+');
    calc.press('5');
    calc.press('=');
  assert.equal(calc.display(), '8')
  })

  it('Can chain multiple operators', function(){
    calc.press('1');
    calc.press('+');
    calc.press('2');
    calc.press('+');
    calc.press('3');
    calc.press('*');
    calc.press('4');
    calc.press('-');
    calc.press('5');
    calc.press('=');
  assert.equal(calc.display(), '19')
  })

  it('Can chain multiple operators', function(){
    calc.press('1');
    calc.press('+');
    calc.press('2');
    calc.press('-');
    calc.press('4');
    calc.press('*');
    calc.press('4');
    calc.press('-');
    calc.press('5');
    calc.press('=');
  assert.equal(calc.display(), '-9')
  })

  it('Can chain multiple equals', function(){
    calc.press('1');
    calc.press('+');
    calc.press('2');
    calc.press('=');
    calc.press('=');
    calc.press('=');
  assert.equal(calc.display(), '7')
  })
})

describe('plus/minus toggle', function(){
  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  })

  it('should turn 4 to -4', function(){
    calc.press('4');
    calc.press('+/-')
    assert.equal(calc.display(), '-4')
  })

  it('should turn -8 to 8', function(){
    calc.press('-8');
    calc.press('+/-')
    assert.equal(calc.display(),'8')
  })

  it('should equal -5', function(){
    calc.press('5');
    calc.press('+');
    calc.press('10');
    calc.press('+/-');
    calc.press('=');
    assert.equal(calc.display(),'-5')
  })

  it('should equal 100', function(){
    calc.press('10');
    calc.press('+/-');
    calc.press('*');
    calc.press('10');
    calc.press('+/-');
    calc.press('=');
    assert.equal(calc.display(),'100')
  })

  it('should equal -100', function(){
    calc.press('10');
    calc.press('*');
    calc.press('10');
    calc.press('+/-');
    calc.press('=');
    assert.equal(calc.display(),'-100')
  })
})

describe('unintended uses', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  })

  it('should disable double decimal', function(){
    calc.press('1');
    calc.press('.');
    calc.press('.');
    assert.equal(calc.display(), '1.');
  })

  it('inputting multiple operators', function(){
    calc.press('4');
    calc.press('*');
    calc.press('+');
    calc.press('6');
    calc.press('=');
    assert.equal(calc.display(), '10')
  })
})

describe('floating points', function(){

  beforeEach(function(){
    $('.display').text('');
    calc.total = 0;
    calc.operator='+';
  })

  it('floating points should be correct', function(){
    calc.press('.');
    calc.press('1');
    calc.press('+');
    calc.press('.');
    calc.press('2');
    calc.press('=');
    assert.equal(calc.display(), '.3');
  })
})
