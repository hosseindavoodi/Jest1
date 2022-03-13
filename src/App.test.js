

import {App, App1, App2, App3} from './App';


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
 


  
  test('result list should contain the object', ()=>{
  const res = App3();
  expect(res).toEqual({ id: 1, name: 'Ben' })
  })
  