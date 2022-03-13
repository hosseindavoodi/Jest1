

import {App, App1, App2} from './App';


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



describe('function app1', ()=>{
test('result should contain the name', ()=>{
const res = App1("hasan");
expect(res).toContain("hasan")
})

})


describe('function app2', ()=>{
  test('result list should contain the name', ()=>{
  const res = App2("Ben");
  expect(res).toContain("Ben")
  })
  
  })

