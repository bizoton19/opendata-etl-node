import { Recall, BabyDoc } from './Models'
import { Artifact } from '../model/Artifact'
import { AbstractModelFactory } from '../factories/abstractModelFactory'
import {GenericRepository} from '../repositories/GenericRepository'

class RecallRepository<T extends Artifact> implements GenericRepository<T>{
    recalls: Array<T>
    constructor(){
        this.recalls = new Array()
    }
    get(number:string) : Artifact{
       return new Recall()
    }
    add(data: T):void{
       this.recalls.push(data);
    }
    remove(data: T): void{
       this.recalls.splice(0,1)
    }
    getNumberOfRecalls():number{
        return this.recalls.length
    }
    getRecallsAdded():Array<T>{
        return this.recalls
    }
  
  }

  test('RecallRepository should add new recall',()=>{
    let recall = new Recall()
    recall.title = 'this the test title'
    let recallRepo = new RecallRepository()
    recallRepo.add(recall)
      expect(recallRepo.getNumberOfRecalls()).toBe(1)
      expect(recallRepo.getRecallsAdded()).toBeInstanceOf(Array)
      expect(recallRepo.getRecallsAdded()[0].title).toBe('this the test title')
          
  })

  test('recalls datastore should be of length zero after removing added element',()=>{
    let recall = new Recall()
    recall.title = 'this the test title'
    let recallRepo = new RecallRepository()
    recallRepo.remove(recall)
    expect(recallRepo.getNumberOfRecalls()).toBe(0)
   
  })
  
