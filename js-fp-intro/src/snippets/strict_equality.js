'100' == 100  // -> true
'100' === 100 // -> false

//Here be dragons
[] == ''   // -> true
[] == 0    // -> true
[''] == '' // -> true
[0] == 0   // -> true
[0] == ''  // -> false
[''] == 0  // -> true
