export class Gisbuy{
    Customer_email:string
    Customer_name:string
    Customer_ph:string
    Customer_add:string
    Customer_pass:string
    Adminid:string
    Adminpass:string
    authdata?: string
    token?:string
    
    constructor(Customeremail?,Customername?,Customerph?,Customeradd?,Customerpass?,Adminid?,Adminpass?,)
    {
        this.Customer_email=Customeremail
        this.Customer_name=Customername
        this.Customer_ph=Customerph
        this.Customer_add=Customeradd
        this.Customer_pass=Customerpass
        this.Adminid=Adminid;
        this.Adminpass=Adminpass
       
    }
}