


export const App = (a1, a2) => {
  return a1 >= a2 ? true : false;
}


export function App1(name)  {
  return "hello" + name;
}



export function App2()  {
  return ['Bonyamin', 'Ali', 'Ben']
}


export function App3()  {
  return {id: 1, name: 'Ben'}
}

export function App4(pass)  {
  if (pass !== '4321')
  throw new Error ('error')
  return {jwt: 'fa$dfa@#fasdf'}
}


