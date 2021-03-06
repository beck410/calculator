$().ready(function(){
  calc.display = function(arg){
    if(arg !== undefined){
      return $('.display').text(arg);
    }else {
      return $('.display').text();
    }
  }
  $('input[type="button"]').click(function(){
    calc.press($(this).val())
  })
  $('.on').click(function(){
    $('.display').css('background', '#9EB')
  })

  calc.display(0);
})
  var calc = {

    total: new Decimal(0),
    operator: '+',
    status: true,
    display: '',
    lastNumber: "",
    lastOperator: "",

    press: function(input){
      if(isNaN(+input) === false || input === '.'){
        if (calc.display().charAt(calc.display().length-1) === '.' && input === '.'){
          return;
        }
        if(calc.status === true){
          calc.display('');
          calc.status = false;
        }
        calc.display(calc.display() + input);
      } else{
        if(input === 'CE'){
          calc.display('0');
          calc.status= true;
        }if(input === 'C'){
          calc.display('0');
          calc.total = '';
          calc.status = true;
          calc.lastNumber = '';
          calc.lastOperator = '';
          calc.operator = '+';
        } else if(input === '+/-'){
          if(calc.display().charAt(0) !== "-"){
            calc.display("-"+calc.display());
          } else {
            calc.display(Math.abs(calc.display()));
          }
        } else if(calc.status === true  && input !== '='){
          calc.operator = input;
          return
        }else {
        switch(calc.operator){
          case '+':
            var decimalDisplay = new Decimal(calc.display());
            var decimalTotal = new Decimal(calc.total)
            calc.total = decimalTotal.plus(decimalDisplay);
            break;
          case '-':
            var decimalDisplay = new Decimal(calc.display());
            var decimalTotal = new Decimal(calc.total)
            calc.total = decimalTotal.minus(decimalDisplay);
            break;
          case '*':
            var decimalDisplay = new Decimal(calc.display());
            var decimalTotal = new Decimal(calc.total)
            calc.total = decimalTotal.times(decimalDisplay);
            break;
          case '/':
            var decimalDisplay = new Decimal(calc.display());
            var decimalTotal = new Decimal(calc.total)
            calc.total = decimalTotal.dividedBy(decimalDisplay);
            break;
          case '=':
            switch(calc.operator){
              case '+':
                var decimalDisplay = new Decimal(calc.display());
                var decimalTotal = new Decimal(calc.total)
                calc.total = decimalTotal.plus(decimalDisplay);
                break;
              case '-':
                var decimalDisplay = new Decimal(calc.display());
                var decimalTotal = new Decimal(calc.total)
                calc.total = decimalTotal.minus(decimalDisplay);
                break;
              case '*':
                var decimalDisplay = new Decimal(calc.display());
                var decimalTotal = new Decimal(calc.total)
                calc.total = decimalTotal.times(decimalDisplay);
                break;
              case '/':
                var decimalDisplay = new Decimal(calc.display());
                var decimalTotal = new Decimal(calc.total)
                calc.total = decimalTotal.dividedBy(decimalDisplay);
                break;
              case '=':
                switch(calc.lastOperator){
                  case '+':
                      var decimalDisplay = new Decimal(calc.lastNumber);
                      var decimalTotal = new Decimal(calc.total)
                      calc.total = decimalTotal.plus(decimalDisplay);
                      break;
                    case '-':
                      var decimalDisplay = new Decimal(calc.lastNumber);
                      var decimalTotal = new Decimal(calc.total)
                      calc.total = decimalTotal.minus(decimalDisplay);
                      break;
                    case '*':
                      var decimalDisplay = new Decimal(calc.lastNumber);
                      var decimalTotal = new Decimal(calc.total)
                      calc.total = decimalTotal.times(decimalDisplay);
                      break;
                    case '/':
                      var decimalDisplay = new Decimal(calc.lastNumber);
                      var decimalTotal = new Decimal(calc.total)
                      calc.total = decimalTotal.dividedBy(decimalDisplay);
                      break;
                  }
                  calc.display(calc.total);
                  calc.status = true;

                  return;
                break;
              };
            break;
          };
        calc.lastNumber = new Decimal(calc.display());
        calc.display(calc.total);
        calc.status = true;
        calc.lastOperator = calc.operator;
        calc.operator = input;
        };
      }
    }
  }
