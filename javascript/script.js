    
    function even()
    {


        let a=11
        for(let i=0; i<a; i++)
        {
            if(i%2==0)
            {
                console.log(i)
            }
            
        }
    }
even()
let multiple= (a,b) =>
{
    return(a*b)
}
console.log(multiple(5,6))
let products=["Laptop","Keyboard","Mouse"]
for(let productIndex=0; productIndex<products.length; productIndex++)
{
    document.write("Name- "+products[productIndex] +"\n")
}
