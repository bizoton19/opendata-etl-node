import { Recall, BabyDoc } from './Models'
import { Artifact } from '../model/Artifact'
import { AbstractModelFactory } from '../factories/abstractModelFactory'

class AbstractModelFactoryTest extends AbstractModelFactory {
    CreateModel<T extends Artifact>(arg: string): Artifact {
        if (arg === "Recall") {
            return new Recall()
        }
        else if (arg == "BabyDoc") {
            return new BabyDoc()
        }
        else {
            throw new Error('Type is not defined, must be a type that the factory can create')

        }

        return new Recall()
    }

}

test('Recall is of type Recall', () => {
    expect(new Recall()).toBeInstanceOf(Recall)
})

test('abstractModelFactory should create a type BabyDoc that implements the Artifact interface', () => {
    expect(new AbstractModelFactoryTest().CreateModel('BabyDoc')).toBeInstanceOf(BabyDoc)
})
test('abstractModelFactory should create a type Recall that implements the Artifact interface', () => {
    expect(new AbstractModelFactoryTest().CreateModel('Recall')).toBeInstanceOf(Recall)
})

test('abstractModelFactory should throw error if type is not define/does not implement Artifact', () => {
    function createModel() {
        new AbstractModelFactoryTest().CreateModel('dataset')
    }
    expect(createModel).toThrowError(Error)
    //test exact error message
    expect(createModel).toThrowError(/^Type is not defined, must be a type that the factory can create$/)
})



