const add = (a:number,b:number) => a+b

test('should add two numbers',()=>{
    const result = add(1,2)
    expect(result).toBe(3)
})