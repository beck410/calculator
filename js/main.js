$().ready(function(){
  calc.display = function(arg){
    if(arg){
      return $('.display').text(arg);
    }else {
      return $('.display').text();
    }
  }
})
  var calc = {

    total: 0,
    operator: '',
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
        if (calc.display().charAt(calc.display().length-1) === '.'){
          return;
        }else{
        switch(input){
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
        calc.total;
        calc.status = true;
        calc.operator = input;
        };
      }
    }
  }
