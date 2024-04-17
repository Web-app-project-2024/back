## **create laptop route** - http://localhost:3000/laptops  
method: POST  
body format:  
```js
{  
    name: "Asus ZenBook 14 Pro",
    imgUrl: "https://hotline.ua/img/tx/396/3960617385.jpg",  
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
body format:  
```js
{  
    name: "Asus ZenBook 14 Pro",
    imgUrl: "https://hotline.ua/img/tx/396/3960617385.jpg",  
    price: 1200,  
    processorType: "Intel Core I7",  
    processorCount: 8,  
    ram: 16,  
    SSDrom: 512,  
    HDDrom: 512,  
    amount: 10  
}
```
  
## **remove laptop route** - http://localhost:3000/laptops/{id}  
method: DELETE
