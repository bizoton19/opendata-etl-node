import {  Artifact} from "../model/Artifact";
import {  abstractModelFactory}  from "../factories/abstractModelFactory";


class Recall implements Artifact {
    uuid!: string;    
    title!: string;
    type!: string;
    artifactDate!: Date;
    artifactSiource!: string;
    description!: string;
    category!: string;
    fullTextSearch!: string;

   
}
class abstractModelFactoryTest extends abstractModelFactory {
    CreateModel<T extends Artifact>(arg: T): T {
        return arg;
    }
   
}

let t = new Recall();
t.title = "new hazard"
t.uuid = "887jjjj"
let test = new abstractModelFactoryTest()
let createdModel = test.CreateModel(t)
createdModel.title

