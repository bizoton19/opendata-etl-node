import {  Artifact} from "../model/Artifact";
import {  abstractModelFactory}  from "../factories/abstractModelFactory";

class abstractModelFactoryTest extends abstractModelFactory {
    CreateModel<T extends Artifact>(arg: T): T {
        throw new Error("Method not implemented.");
    }
   
}