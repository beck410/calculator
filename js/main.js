$().ready(function(){
  calc.display = function(arg){
    if(arg){
      return $('.display').text(arg);
    }else {
      return $('.display').text();
    }
  }
  $('input[type="button"]').click(function(){
    calc.press($(this).val())
  })
})
  var calc = {

    total: '',
    operator: '+',
    status: false,
    display: '',
    strip: function(num){
      return(parseFloat(num.toPrecision(4)));
    },

    press: function(input){
      if(isNaN(+input) === false || input === '.'){
        if (calc.display().charAt(calc.display().length-1) === '.' && input === '.'){
          return;
        }
        if(calc.status === true){
          calc.display(' ');
          calc.status = false;
        }
        calc.display(calc.display() + input);
      } else{
        if(input === 'CE'){
          calc.display(' ');
        }
        if (calc.display().charAt(calc.display().length-1) === '.'){
          return;
        }else{
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
              };
            break;
          };
        calc.display(String(calc.total));
        calc.status = true;
        calc.operator = input;
        };
      }
    }
  }
