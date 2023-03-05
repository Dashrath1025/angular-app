export class Products{
    catid?: number;
    productid?: number;
    name?:any;
    description?: string;
    rate?:number;
    quan?:number;
   expiredate?:any;
   img?:string;
  getRate: any;

constructor(catid:number,productid:number,name:string,description:string,rate:number,quan:number,expiredate:any,img:string){
   this.catid=catid;
this.productid = productid;
this.name=name;
this.description = description;
this.rate=rate;
this.quan=quan;
this.expiredate=expiredate;
this.img=img

}
}