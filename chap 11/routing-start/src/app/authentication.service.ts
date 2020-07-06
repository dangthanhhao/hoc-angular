import { expressionType } from "@angular/compiler/src/output/output_ast";

export class Authentication{
    isLogin:boolean;
    constructor(){}
    logIn(){
        this.isLogin=true;
    }

    logOut(){
        this.isLogin=false;
    }
    doLoging(){
        return new Promise((res,rej)=>{
            setTimeout(() => {
                // this.logOut();
                res(this.isLogin)
            }, 800);
        })
        
    }
}