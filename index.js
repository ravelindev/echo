/* Echo(*)
Write a function echo that takes in a string and console.logs that string "echo-ized".*/

function echo(string) {
    // your code here...
    let echoIzed3 = string.toLowerCase();
    let echoIzed1 = string.toUpperCase();
    let echoIzed2 = string.charAt(0).toUpperCase() + echoIzed3.slice(1);
    // combine all together
    let echoIzed = echoIzed1 + " ... " + echoIzed2 + " ... " + echoIzed3;

    console.log(echoIzed);
  }


  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
