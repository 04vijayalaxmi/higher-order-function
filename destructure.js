//console.log("First code")
//console.log("Second code")

//setTimeout(( )=> {
//  console.log("Third code")
// }, 3000)
//console.log("Fourth code")
//console.log("Fifth code")

//Welcome
//Register
//Login
//Thank You

/*console.log("Welcome");
const Register=()=>{
    setTimeout(()=>{
        console.log("Please Register");
    }, 2000)
}

const Login=()=>{
    setTimeout(()=>{
        console.log("Please Login");
    }, 4000)
}

const Thankyou=()=>{
    setTimeout(()=>{
        console.log("Thankyou");
    }, 5000)
}

Register()
Login()
Thankyou()*/


/*console.log("Welcome");
const Register=(apple)=>{
    setTimeout(()=>{
        console.log("Please Register");
        apple()
    }, 5000)
}

const Login=()=>{
    setTimeout(()=>{
        console.log("Please Login");
    }, 3000)
}

const Thankyou=()=>{
    setTimeout(()=>{
        console.log("Thankyou");
    }, 1000)
}

Register(function(){
    Login(function(){
        Thankyou()
    })
})
Login()
Thankyou()*/


const Register=()=>{
   return  new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("please Register");
            resolve( "Successful")

        }, 3000)
    })
}
const Login=()=>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Please Login");
            resolve()
        }, 5000)
    })
    
}

const Thankyou=()=>{
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Thankyou & Welcome");
        resolve()
    }, 1000)
})
}

Register().then(Login).then(Thankyou)
//Register().then((data)=>{ console.log(data)  })
//Login()
//Thankyou()