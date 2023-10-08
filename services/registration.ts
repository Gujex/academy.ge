export const userRegister = async (data: any) => {
    const url = 'https://leadersacademy1-42852730b9ec.herokuapp.com/addCustomer';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return response.json();
}
