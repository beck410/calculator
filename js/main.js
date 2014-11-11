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

    total: '',
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
          calc.status = truee;
          calc.lastNumber = '';
          calc.lastOperator = '';
          calc.operator = '+';
        } else if(input === '+/-'){
          if(calc.display().charAt(0) !== "-"){
            calc.display("-"+calc.display());
          } else {
            calc.display(Math.abs(calc.display()));
          }
          calc.total *= -1;
        } else if(calc.status === true  && input !== '='){
          calc.operator = input;
          return
        }else {
        switch(calc.operator){
          case '+':
            calc.total = +((+(+calc.total * 1000000000000) + +(+calc.display() * 1000000000000))/1000000000000);
            break;
          case '-':
            calc.total = +calc.total - +calc.display();
            break;
          case '*':
            calc.total = +calc.total * +calc.display();
            break;
          case '/':
            calc.total = +calc.total / +calc.display();
            break;
          case '=':
            switch(calc.operator){
              case '+':
                calc.total = +calc.total + +calc.display();
                break;
              case '-':
                calc.total = +calc.total - +calc.display();
                break;
              case '*':
                calc.total = +calc.total * +calc.display();
                break;
              case '/':
                calc.total = +calc.total / +calc.display();
                break;
              case '=':
                switch(calc.lastOperator){
                  case '+':
                    calc.total = +calc.total + +calc.lastNumber;
                    break;
                  case '-':
                    calc.total = +calc.total - +calc.lastNumber;
                    break;
                  case '*':
                    calc.total = +calc.total * +calc.lastNumber;
                    break;
                  case '/':
                    calc.total = +calc.total / +calc.lastNumber;
                    break;
                  }
                  calc.display(calc.total);
                  calc.status = true;

                  return;
                break;
              };
            break;
          };
        calc.lastNumber = calc.display();
        calc.display(calc.total);
        calc.status = true;
        calc.lastOperator = calc.operator;
        calc.operator = input;
        };
      }
    }
  }
