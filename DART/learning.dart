// nodemon --watch . --ext dart --exec "dart run learning.dart"


// void main(){
//   String name = "Bilal";
//   int age = 11;

//   print("salm $name 3mrk $age");

// var Y = 11;
// print(Y);
// dynamic x = 2;
// print(x);
// x = 3;

// print(x);


// String nom = "AHMED";
// int ag = 21;
// double taille = 188.2;
// bool men = true ;
// var city = "beni mellal ";

// print("smiti $nom 3omri $ag Taille dyali $taille rajel $men sakn f $city");

// city = "casablanca";
// print("smiti $nom 3omri $ag Taille dyali $taille rajel $men sakn f $city");

// final time = DateTime.now();
// print(time);

// const pi = 3.14;
// print(pi);



// }
// import 'dart:io';


// // void main(){
// //   print("ch7al f 3MRK");

// //   String? input = stdin.readLineSync();
// //   int age = int.parse(input!);
  
// //   if(age >= 18 ){
// //     print("agee");
// //   }else {
// //     print("minor");
// //   }
// // }

// void greet(){
//   print("hello word");

// }
// void getuser( String name){
// print("salma $name");

// }
// int sum(int a , int b ){
//   return a + b;
// }
// int multy(int a , int b)=>  a * b;

// void main(){
//   greet();
//   getuser("bilal");
//   getuser("youssfe");
//   print(sum(1 , 2));
//   print(multy( 22 , 11));


// }


// import 'dart:ffi';

// void main() {
//  for(int i = 0 ; i <10 ; i++){
//   String hi = 'hello word';
//   print(hi.substring(i));
//   print('hello word${i+1}');

//  }
  
//  String value= "hellw word";


//   // for(int i = 0; i<value.length ; i++){

//   //   print(value[1]);
//   // }

//   int i =0;
//   while(i<value.length){
//     print(value[i]);
//     i++;
//   }



//   int t = 0;
// }



// void main(){
//  final  cookie =Cookie();

//  print(cookie.shape);
//  cookie.shape = "triangle";
//  print(cookie.shape);
// }

// class Cookie {
//   String shape = "Circle";
//   double size = 15.2;

//   void baking(){
//     print("backin startded");
//   }

//   bool isCooling (){
//     return false;
//   }
// }

import 'dart:ffi';

void main(){
  print(Cookie().name);
  print(Cookie().size);
  print(Cookie().falavor);
  Cookie().bake();
 
 print('-----');


var exo = ChocolateCookie();
print(exo.name);
print(exo.size);
print(exo.falavor);
print('Has chocolate chips: ${exo.hasChocolateChips}');
exo.bake();



}

class Cookie {
  String name = "tonique";
  double size = 1.3;
  String falavor = "pomme"; 

  void bake(){
    print('baking $name cookie');
  }

}
class ChocolateCookie extends Cookie{
  bool hasChocolateChips = true;

@override
  
  void bake(){
    print('baking $name cookie');
  }
}





