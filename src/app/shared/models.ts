import { CdkAccordion } from '@angular/cdk/accordion';

export interface Category{
    id:number;
    title:string;
    image:string;
}
export interface CategoryDetail{
    
    id:number;
    title:string;
    subTitle:string;
    description:string;
    hasTable?:boolean;
    hasFootNote?:boolean;
    footNote?:string;
    table?:any;
    listCount?:number;
    list?:List[];
    hasAccordion?:boolean;
    accordion?:Accordion;
    tableTitle?:string;
    tables:Table[];
}
export interface Table{
    title:string;
    displayedColumns:string[];
    items:MatTableItem[];
}
// TODO: Replace this with your own data model type
export interface MatTableItem {
    standard?: string;
    id: number;
    points?:number;
    maximumPoints?:number;
    education?:string;
    experience?:string;
    age?:number | string ;
    proficiency?:string;
    firstLanguage?:number | string;
    secondLanguage?:number | string;
    partnerEducation?:string;
    work?:string;
    study?:string;
    relatives?:string;
    
  
  }
export interface Accordion{
    title:string;
    panels:Panel[];
}
export interface Panel{
    header:string;
    details:string;
}
export interface List{
    title:string;
    content:string[];
}
export class sideNavMenu{
 
    constructor(public id:number,public title:string,public hasSubMenu:boolean, public routerLink:string,public parentId?:number) {
   
    }
}
export const categories:Category[]=[
    {id:1,title:"Business Visitor Visa",image:"assets/images/categories/business-visitor-visa-canada.png"},
    {id:2,title:"Canadian Experience Class",image:"assets\\images\\categories\\canadian-experience-class.png"},
    {id:3,title:"Immigration Appeals",image:"assets\\images\\categories\\immigration-appeals.png"},
    {id:4,title:"Emergency Assistance",image:"assets\\images\\categories\\emergency-assistance.png"},  
    {id:5,title:"Express Entry",image:"assets\\images\\categories\\express-entry.png"},
    {id:6,image:"assets\\images\\categories\\federal-skilled-trade-program.png",title:"Federal Skilled Trade Program"},
    {id:7,image:"assets\\images\\categories\\federal-skilled-worker-program.png",title:"Federal Skilled Worker Program"},
    {id:8,image:"assets\\images\\categories\\file-refugee-claim-in-canada.png",title:"File Refugee Claim in Canada"},
    {id:9,image:"assets\\images\\categories\\humanitarian-compassionate-consideration-grounds.png",title:"Humanitarian Compassionate Consideration"},
    {id:10,image:"assets\\images\\categories\\labour-market-impact-assessment-lmia.png",title:"Labour Market Impact Assessment(LMIA)"},
    {id:11,image:"assets\\images\\categories\\pre-removal-risk-assessment.png",title:"Pre-removal Risk Assessment"},
    {id:12,image:"assets\\images\\categories\\provincial-nominee-program-pnp.png",title:"Provincial Nominee Program(PNP)"},
    {id:13,image:"assets\\images\\categories\\rejected-canada-visa.png",title:"Rejected Canada Visa"},
    {id:14,image:"assets\\images\\categories\\self-employed-person.png",title:"Self Employed Person"}

];
export const author:any={
    name:"Sujit Paudyal",
    homePhone:"+1234567",
    cellPhone:"+2345678",
    email:"sujit@paudyal.com"
  }
  