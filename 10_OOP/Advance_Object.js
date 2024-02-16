//Object.getOwnPropertyDescriptor() this method gives so much insights about object which we can't see
//Can we change the value of PI ?
// Math.PI=5
// console.log(Math.PI);

// const descriptor= Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);// We can se that this value has some hidden properties false that's why we cannot change it

const chai={
    name:'Chai',
    price:'250',
    isAvailable:true,

    printMe:function(){
     console.log('Hello');
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// console.log(descriptorChai)

//Now we can play with it's properties defineProperties

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable:false // Sometimes we don't want to iterate a particular value for that we make it's enumerable property false as in this case we make name in chai false
})
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

// If we make writable and enumerable of a value false then value will not shown 
for (let [key, value] of Object.entries(chai)) {
    //We only want key and value that's why use this check
    if (typeof value !== 'function') {
        console.log(`${key} ${value}`);
    }
   
}