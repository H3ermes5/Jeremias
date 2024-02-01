const Clickbutton = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
});

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent
    const itemImg = item.querySelector('.card-img-top').src
    
    const newCarrito = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newCarrito)
}

function addItemCarrito(newItem){

    const InputElemnto = tbody.getElementsByClassName('input__elemento')
    for(let i=0; i < carrito.length ; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
        carrito[i].cantidad ++;
        const inputValue = InputElemnto[i]
        inputValue.value++;
        CarritoTotal()
        return null
        }
    }

    carrito.push(newItem)

    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = //html
        `
        <th scope="row">1</th>
        <td class="table__products">
            <img src="${item.img}" alt="${item.title}">
            <h6 class=title>${item.title}</h6>
        </td>
        <td class="table__precio"><p>${item.precio}</p></td>
        <td class="table__cantidad">
        <input type="number" min="1" value="${item.cantidad}" class="input__elemento">
        <button class="delete brn btn-danger">x</button>
    </td>`

        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector('.delete').addEventListener('click ', removeItemCarrito)
        tr.querySelector('.input__elemento').addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}


function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        Total = Total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${Total}`

}

function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
        carrito.splice(i, 1)
        console.log('hola mundo')
    }
    }

    tr.remove()
    CarritoTotal()
}

function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest('.ItemCarrito')
    const title = tr.querySelector('.title').textContent
    carrito.forEach(item =>{
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
        console.log(carrito)
    })
}