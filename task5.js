


// setTimeout(() => console.log('c'), 3000)

// console.log('d');


//using call backs

// function c(){
//     setTimeout(() => console.log('c'), 3000)
// }

// const ab = async() => {

//     var y = await c();
//     console.log('d');
// }
// ab();

///
async function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => {
        console.log('a');
        console.log('b');
        return 0;
    });
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c');
        }, 2000);
        return 0;
    });
    let three_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('d');
        }, 0);
        return 0;
    });
    let x=await first_promise;
    let y=await second_promise;
    let z=await three_promise;


    }
      
asynchronous_operational_method();
  
      
    // display();






