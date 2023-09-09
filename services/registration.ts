export const userRegister = async (data: any) => {
    const url = 'http://localhost:5000/addCustomer';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return response.json();
}