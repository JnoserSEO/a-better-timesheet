
export const saveLocalValue = (key:string,value:any)=> localStorage.setItem(key,value)

export const getLocalValue = (key:string) => localStorage.getItem(key)