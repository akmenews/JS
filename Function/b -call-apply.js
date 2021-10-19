'use strict';

function f1(a, b) {
  console.log('f1(' + a + ', ' + b + ')');
}

f1(2, 3);
f1.call(null, 2, 3);

const arr = [2, 3];
f1(...arr); // ... спред оператор, разбивает массив на эдементы 
f1.apply(null, arr);