//Declare two variables x and y with numerical values. Swap their values without using a third variable

function swap(x:number,y:number):any{
     x=x+y;
     y=x-y;
     x=x-y;
     return [x,y];
}
console.log(swap(23,33));
                                                                                                                    