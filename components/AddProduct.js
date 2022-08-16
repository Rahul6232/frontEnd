import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategeory] = React.useState('');
    const [company, setCompany] = React.useState('');

    const addProduct = async ()=>{
        console.log(name,price,category,company);
        const userID= JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userID);
        let result = await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category, company, userID}),
            headers:{
                "content-type":"application/json"
            }
        });

        result = await result.json()
        console.log(result);
    }
    return (

        <div className='product'>
            <h1> AddProduct</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
             value = {name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" placeholder='Enter product price' className='inputBox'
             value = {price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <input type="text" placeholder='Enter product ' className='inputBox'
             value = {category} onChange={(e)=>{setCategeory(e.target.value)}}/>
            <input type="text" placeholder='Enter product company' className='inputBox'
             value = {company} onChange={(e)=>{setCompany(e.target.value)}}/>
            <button onClick={addProduct} className='buttonBox' > Add product</button>
        </div>
    )
}

export default AddProduct;