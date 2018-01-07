$(document).ready(function() {
  //Stores the inputs from the user to calculate later:
  let inputs = [''];
  //String to store current input:
  let totalString;
  //Operators array for validation without the .:
  let operators = ['+', '-', '/', '*'];
  //Operators array with the . for validation:
  let dot = ['.'];
  //Numbers for validation:
  let nums = [0, 1, 2, 4, 5, 6, 7, 8, 9];

  function getValue(input){
    if (dot.includes(inputs[inputs.length - 1] === true && input === '.')){
      console.log('Duplicate "." ');
    }
    else if (inputs.length === 1 && operators.includes(input) === false) {
      inputs.push(input);
    }
    else if (operators.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
    }
    else if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  function update(){
    totalString = inputs.join('');
    $('#steps').html(totalString);
  }

  function getTotal(){
    totalString = inputs.join('');
    $('#steps').html(eval(totalString));
   }

   $('a').on('click', function(){
     if (this.id === 'deleteAll') {
       inputs = [''];
       update();
     }
     else if (this.id === 'backOne') {
       inputs.pop();
       update();
     }
     else if (this.id === 'total') {
       getTotal();
     }
     else {
        if (inputs[inputs.length - 1].indexOf('+', '-', '/', '*') === -1) {
         getValue(this.id);
        }
       else {
         getValue(this.id);
       }
     }
   });
});
