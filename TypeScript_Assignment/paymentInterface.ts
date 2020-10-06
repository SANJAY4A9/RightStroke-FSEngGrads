interface billPayment{
    doPayment:(String)=>String;
    getPaymentStatus:(String)=>String

}
class bank implements billPayment{
    refNum:String;
    paymentCredits:String;
    
    doPayment(paymentCredits:String){
        this.paymentCredits=paymentCredits;
        return `${this.paymentCredits} is credited to your account`
    }
    getPaymentStatus(refNum:String){
       this.refNum=refNum;
       return `The payment having reference number ${refNum} is successfully done`;
    }
}
let e:billPayment=new bank();
console.log(e.doPayment("11,00"));
console.log(e.getPaymentStatus("847950740472"))
