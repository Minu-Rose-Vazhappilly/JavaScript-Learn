class Landing{
    database = {
        "milan":{username:"milan",password:"milan123"},
        "manu":{username:"manu",password:"manu123"},
        "mini":{username:"mini",password:"mini123"}
    }
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    //method to get data
    getData(){
       this.database = JSON.parse(localStorage.getItem("database"))
       
       
    }
    register(){
        console.log(regUser.value);
        console.log(regPswd.value);

        if(regUser.value == '' || regPswd.value == ''){
            alert('please  fill the form completely')
        }else{
            this.getData()
            if(regUser in this.database){
                alert('User already exists')
                 window.location = 'login.html'
            }else{
                this.database[regUser.value] = {username:regUser.value,password:regPswd.value}
                this.saveData()
                alert('Registration successful')
                window.location = 'login.html'
            }
        }
        
        
    }
    login(){
        console.log(loginUser.value);
        console.log(loginPswd.value);
        if(loginUser.value == ""|| loginPswd.value == ""){
            alert("Please fill the form completely")
        }else{
            this.getData()
            if(loginUser.value in this.database){
                    if(this.database[loginUser.value].password == loginPswd.value){
                        localStorage.setItem("user",loginUser.value)
                            alert('Login successful')
                            window.location = 'home.html'
                    }else{
                        alert('Incorrect username or password')
                    }
            }else{
                alert('User doesnot exist')
            }
        }
    }
}
const obj = new Landing();
obj.getData();