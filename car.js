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

    for(let i=0; i < carrito.length ; i++){
        if(carrito[i].title, trim() === newItem.title.trim()){

        }
    }

    carrito.push(newItem)

    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = `
        <th scope="row">1</th>
        <td class="table__products">
            <img src="${item.img}" alt="${item.title}">
            <h6 class=title>${item.title}</h6>
        </td>
        <td class="table__precio"><p>${item.precio}</p></td>
        <td class="table__cantidad">
        <input type="number" min="1" value="${item.cantidad}">
        <button class="delete brn btn-danger">x</button>
    </td>`

        tr.innerHTML = Content;
        tbody.append(tr)

    })
}