module.exports = function getZerosCount(number, base) {
  // your implementation

    let zeros = 0;
    let a = 2;
    let divider = null;


    while (a <= base){
        if (base % a == 0){
            divider = base;
            base = Math.floor(base/a)

        } else {
            a = a + 1;
        }
    }
    let counter = divider;

    let z = 1;
    function getFactorialZeros(counter) {
        if (number / counter >= 1) {
            zeros += Math.floor(number / counter);
            z++;
            counter = Math.pow(divider, z);
            getFactorialZeros(counter);
        } else {
            return;
        }
    }


    getFactorialZeros(divider);



    console.log(zeros);
    //return parseInt(finishZeros);
    return zeros;
};