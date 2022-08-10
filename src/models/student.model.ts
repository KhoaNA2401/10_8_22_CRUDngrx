export interface Student{
  id: string,
  name: string,
  //dob: string,
  email: string,
  phone:{
    code: string,
    number: string,
  }
}

export interface Todo{
  id: string,
  description: string,
}
