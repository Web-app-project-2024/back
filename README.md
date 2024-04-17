## **create laptop route** - http://localhost:3000/laptops  
method: POST  
body format:  
```js
{  
    name: "Asus ZenBook 14 Pro",  
    price: 1200,  
    processorType: "Intel Core I7",  
    processorCount: 6,  
    ram: 16,  
    SSDrom: 512,  
    HDDrom: 1000,  
    amount: 10  
}
```

    
## **get all laptops route** - http://localhost:3000/laptops  
method: GET  
  
## **update laptop route** - http://localhost:3000/laptops/{id}  
method: PUT
```js
{  
    name: "Asus ZenBook 14 Pro",  
    price: 1200,  
    processorType: "Intel Core I7",  
    processorCount: 6,  
    ram: 16,  
    SSDrom: 512,  
    HDDrom: 1000,  
    amount: 10  
}
```
  
## **remove laptop route** - http://localhost:3000/laptops/{id}  
method: DELETE
