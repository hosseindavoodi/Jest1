

import {App, App1, App2, App3, App4} from './App';


describe('function app', ()=>{
it('A should be biger than B', ()=>{
  const res = App(10,9);
  expect(res).toBe(true)
 })

it('A should be equal B', ()=>{
  const res = App(10,10);
  expect(res).toBe(true)
 })
})



test('result should contain the name', ()=>{
const res = App1("hasan");
expect(res).toContain("hasan")
})



  test('result list should contain the name', ()=>{
  const res = App2();
  expect(res).toContain("Ben")
  })
 


  describe('function App3', ()=>{
    const res = App3();

    test('result list should contain the object', ()=>{
      expect(res).toEqual({ id: 1, name: 'Ben' })
      })
      test('it should find the special object', ()=>{
        expect(res).toMatchObject({id: 1})
      })
      test('it should find a property', ()=>{
        expect(res).toHaveProperty('id')
      })

  })


  describe('function App4', ()=>{
    test('f', ()=>{
      expect(()=>{App4('434521')}).toThrow();
    })
    test('ff', ()=>{
      const res = App4('4321');
      expect(res).toHaveProperty('jwt')
    })
    



  })
  
  