export class Product{
    Proid:string
    Proname:string
    Category:string
    Type:string
    Des1:string
    Des2:string
    Des3:string
    Des4:string
    Des5:string
    Proprice:number
    Proquantity:number
    Proimage:string
    Quantity:number
    constructor(Prodid?,prodname?,prodcat?,
        prodtype?,proddes1?,q?,proddes2?,proddes3?,proddes4?,proddes5?,prodprice?,prodquantity?,prodimage?)
    {
        this.Proid=Prodid
        this.Proname=prodname
        this.Category=prodcat
        this.Type=prodtype
        this.Des1=proddes1
        this.Des2=proddes2
        this.Des3=proddes3
        this.Des4=proddes4
        this.Des5=proddes5
        this.Quantity=q
        this.Proprice=prodprice
        this.Proquantity=prodquantity
        this.Proimage=prodimage
    }
}