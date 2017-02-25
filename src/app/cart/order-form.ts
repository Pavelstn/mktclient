/**
 * Created by pavel on 25.02.17.
 */
export class OrderForm{
    customer_name:string;
    customer_phone:string;
    delivery_adress:string;
    formValid:boolean;
    comment:string;
    constructor(){
        this.customer_name="";
        this.customer_phone="";
        this.delivery_adress="";
        this.comment="";
        this.formValid=false;
    }

    checkValidateForm(){
        if(this.customer_name!=""&&this.customer_phone!=""){
            this.formValid= true;
        }else{
            this.formValid= false;
        }
    }
}
