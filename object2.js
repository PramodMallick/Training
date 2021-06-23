// const cookie = {

//     name: 'Chocolate',

//     eatCookie: function () {
//         console.log('I am eating cookie ' + this.name)
//     }

// }

// cookie.name = 'something else' //writing -- change attribuete value/ edit property value / html elements- attribute 

// console.log(cookie.name) //reading
// cookie.name = 'New Chocolate'
// cookie.eatCookie()
// ====================

class Cookie {


    constructor(param){
        this.name = param
    }

    eatCookie(){
                console.log('I am eating cookie ' + this.name)

    }

}

const cookie = new Cookie('Chocolate');
console.log(cookie.name)
cookie.eatCookie()
