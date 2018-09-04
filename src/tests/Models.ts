import {  Artifact} from "../model/Artifact";


export class Recall implements Artifact {
    uuid!: string;    
    title!: string;
    type!: string;
    artifactDate!: Date;
    artifactSiource!: string;
    description!: string;
    category!: string;
    fullTextSearch!: string;

   
}

export class BabyDoc implements Artifact{
    uuid!: string;    
    title!: string;
    type!: string;
    artifactDate!: Date;
    artifactSiource!: string;
    description!: string;
    category!: string;
    fullTextSearch!: string;
}