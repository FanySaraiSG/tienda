emailjs.init("WDGWcCoDSfaytwhKL"); 

const productos = [
    { 
        id: 1, tipo: "ropa", nombre: "Abrigo Teddy Bear", precio: 1450, 
        imgFrente: "assets/i1_frente.png", imgAtras: "assets/i1_atras.png", 
        tallas: ["S", "M", "L"], 
        desc: "Nuestro icónico Abrigo Teddy Bear es el epítome de la calidez invernal. Confeccionado con fibras de alta densidad que emulan la suavidad del vellón orgánico, esta pieza ofrece una barrera térmica inigualable contra temperaturas bajo cero. Su corte oversized permite un layering sofisticado, mientras que el forro de satén italiano proporciona una sensación de lujo al contacto con la piel. Un diseño pensado para perdurar décadas en tu armario personal." 
    },
    { 
        id: 2, tipo: "ropa", nombre: "Impermeable Crystal", precio: 890, 
        imgFrente: "assets/i2_enfrente.png", imgAtras: "assets/i2_atras.png", 
        tallas: ["Única"], 
        desc: "Tecnología y estilo se fusionan en el Impermeable Crystal. Fabricado con un polímero translúcido de alta resistencia, permite que la arquitectura de tu atuendo brille incluso bajo la tormenta. Sus costuras están selladas mediante calor para garantizar una impermeabilidad total, mientras que su ligereza lo hace el compañero ideal para viajes urbanos. Una pieza futurista que redefine la moda utilitaria contemporánea." 
    },
    { 
        id: 3, tipo: "ropa", nombre: "Sudadera Polar Paw", precio: 750, 
        imgFrente: "assets/i3_frente.png", imgAtras: "assets/i3_atras.png", 
        tallas: ["S", "M", "L"], 
        desc: "La Sudadera Polar Paw es la definición de confort premium. Utilizando algodón de fibra larga recolectado de forma ética, el interior ha sido cepillado para crear una capa de aire aislante que retiene el calor corporal. Los puños acanalados y la capucha de doble panel están diseñados para resistir el viento más gélido del invierno, manteniendo una estética minimalista y limpia." 
    },
    { 
        id: 4, tipo: "calzado", nombre: "Botas Lluvia Pastel", precio: 980, 
        imgFrente: "assets/i4_frente.png", imgAtras: "assets/i4_atras.png", 
        tallas: ["23", "24", "25"], 
        desc: "Eleve su paso en los días grises con nuestras Botas de Lluvia Pastel. Moldeadas en una sola pieza de caucho natural vulcanizado, ofrecen una protección impenetrable contra la humedad. La suela exterior cuenta con un patrón de tracción avanzado para superficies resbaladizas, mientras que el interior está ligeramente acolchado para caminar largas distancias por la ciudad con total comodidad." 
    },
    { 
        id: 5, tipo: "accesorio", nombre: "Bufanda Infinita", precio: 350, 
        imgFrente: "assets/i5_frente.png", imgAtras: "assets/i5_atras.png", 
        tallas: ["Uni"], 
        desc: "El accesorio de transición esencial para el Winter Atelier 2026. Tejida en un intrincado punto inglés con una mezcla de lana Merino y fibras acrílicas de bajo impacto, la Bufanda Infinita se envuelve con elegancia natural. Su longitud generosa permite múltiples configuraciones de estilo, aportando una textura rica y acogedora a cualquier conjunto de la colección." 
    },
    { 
        id: 6, tipo: "ropa", nombre: "Chaqueta Puffer Pro", precio: 1800, 
        imgFrente: "assets/i6_frente.png", imgAtras: "assets/i6_atras.png", 
        tallas: ["M", "L"], 
        desc: "Diseñada para condiciones extremas, la Chaqueta Puffer Pro utiliza un aislamiento sintético de alto rendimiento que mantiene su capacidad térmica incluso en condiciones de humedad. El tejido exterior de nylon ripstop es resistente a desgarros y cuenta con un acabado repelente al agua. Una estructura técnica que no sacrifica la silueta estilizada propia de nuestra casa de moda." 
    },
    { 
        id: 7, tipo: "accesorio", nombre: "Gorro Orejitas", precio: 290, 
        imgFrente: "assets/i7_frente.png", imgAtras: "assets/i7_atras.png", 
        tallas: ["Uni"], 
        desc: "Un toque lúdico para el invierno más sofisticado. El Gorro Orejitas está confeccionado artesanalmente con lana gruesa, proporcionando una cobertura total de las zonas más sensibles al frío. Su diseño divertido se equilibra con una paleta de colores sobria, permitiendo que la pieza destaque por su arquitectura original sin perder la elegancia del Atelier." 
    },
    { 
        id: 8, tipo: "ropa", nombre: "Trench Coat Classic", precio: 1650, 
        imgFrente: "assets/i8_frente.png", imgAtras: "assets/i8_atras.png", 
        tallas: ["S", "M"], 
        desc: "La elegancia británica reimaginada para el 2026. Este Trench Coat de corte clásico está fabricado con una gabardina de algodón hidrófugo de gramaje pesado que estructura la figura de manera impecable. Cuenta con detalles en herrajes de níquel cepillado y un cinturón ajustable que define la cintura, convirtiéndolo en la pieza de inversión definitiva para el clima lluvioso y frío." 
    },
    { 
        id: 9, tipo: "ropa", nombre: "Leggings Térmicos", precio: 420, 
        imgFrente: "assets/i9_frente.png", imgAtras: "assets/i9_atras.png", 
        tallas: ["CH-M", "G-XG"], 
        desc: "Nuestros Leggings Térmicos utilizan tecnología de doble capa para ofrecer una libertad de movimiento absoluta sin perder calor. La capa interna de micro-fleece atrapa el aire caliente contra la piel, mientras que la capa externa lisa facilita el uso bajo pantalones o faldas. Una prenda técnica invisible que se vuelve indispensable cuando la temperatura desciende." 
    },
    { 
        id: 10, tipo: "accesorio", nombre: "Paraguas Pocket Lab", precio: 320, 
        imgFrente: "assets/i10_frente.png", imgAtras: "assets/i10_atras.png", 
        tallas: ["Mini"], 
        desc: "Pequeño en tamaño, grande en protección. El Paraguas Pocket Lab cuenta con una estructura reforzada de fibra de carbono que resiste vientos fuertes sin doblarse. Su tela con recubrimiento de teflón repele el agua instantáneamente, permitiendo guardarlo casi seco después de su uso. Un prodigio de la ingeniería portátil diseñado para el estilo de vida dinámico del laboratorio." 
    },
    { 
        id: 11, tipo: "ropa", nombre: "Poncho colorado", precio: 520, 
        imgFrente: "assets/i11_frente.png", imgAtras: "assets/i11_atras.png", 
        tallas: ["CH-M", "G-XG"], 
        desc:"Poncho artesanal de inspiración andina con diseño geométrico en tonos tierra y azul turquesa. Confeccionado en tejido premium cálido y resistente, destaca por su caída elegante y acabados en flecos trenzados a mano. Es la prenda ideal para quienes buscan un estilo rústico, exclusivo y sofisticado que garantiza confort y distinción en cualquier ocasión." 
    },
    { 
        id: 12, tipo: "ropa", nombre: "Sudadera Gatos en Enredo", precio: 520, 
        imgFrente: "assets/i12_frente.png", imgAtras: "assets/i12_atras.png", 
        tallas: ["CH-M", "G-XG"], 
        desc:"Sudadera de algodon organico con estampado de gatos enredados en tonos pastel. Confeccionada con materiales sostenibles, esta prenda ofrece comodidad y estilo unico. Su diseño divertido yoriginal la convierte en una pieza imprescindible para los amantes de los gatos yla moda consciente, perfecta para un look casual y desenfadado." 
    }
];
let carrito = [];
let codGen = null;
let metodoSeleccionado = "";

// GRID PRINCIPAL
const grid = document.getElementById('gridProductos');
productos.forEach(p => {
    grid.innerHTML += `
        <article class="card" onclick="abrirPaginaDetalle(${p.id})">
            <div class="img-wrapper"><img src="${p.imgFrente}"></div>
            <p class="p-name">${p.nombre}</p>
            <p class="p-price">$${p.precio} MXN</p>
        </article>`;
});

// DETALLE CON SOPORTE TÁCTIL Y TABLA GRANDE
function abrirPaginaDetalle(id) {
    const p = productos.find(x => x.id === id);
    const v = window.open("", "_blank");
    const tBtns = p.tallas.map(t => `<button class="t-btn" onclick="sel(this,'${t}')">${t}</button>`).join("");

    let tablaHTML = (p.tipo === "ropa" || p.tipo === "calzado") ? `
        <div style="margin-top:30px; border:2px solid #000; padding:25px; border-radius:10px; background:#fff; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <b style="letter-spacing:3px; font-size:16px; display:block; margin-bottom:20px; text-align:center; color:#000;">CUADRO DE TALLAS PROFESIONAL</b>
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tr style="background:#000; color:#fff;">
                    <th style="padding:12px; border:1px solid #000;">TALLA</th>
                    <th style="padding:12px; border:1px solid #000;">TORSO (CM)</th>
                    <th style="padding:12px; border:1px solid #000;">LARGO (CM)</th>
                </tr>
                <tr style="text-align:center;">
                    <td style="padding:12px; border:1px solid #eee;">S / 23</td>
                    <td style="padding:12px; border:1px solid #eee;">90-95</td>
                    <td style="padding:12px; border:1px solid #eee;">65-68</td>
                </tr>
                <tr style="text-align:center; background:#f9f9f9;">
                    <td style="padding:12px; border:1px solid #eee;">M / 24</td>
                    <td style="padding:12px; border:1px solid #eee;">98-105</td>
                    <td style="padding:12px; border:1px solid #eee;">69-72</td>
                </tr>
                <tr style="text-align:center;">
                    <td style="padding:12px; border:1px solid #eee;">L / 25</td>
                    <td style="padding:12px; border:1px solid #eee;">108-115</td>
                    <td style="padding:12px; border:1px solid #eee;">73-76</td>
                </tr>
            </table>
            <p style="font-size:11px; color:#999; margin-top:12px; text-align:center; font-style:italic;">* Corte ajustado a la medida de la colección 2026.</p>
        </div>` : "";

    v.document.write(`
        <html>
        <head>
            <title>${p.nombre}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: sans-serif; padding: 20px; background:#fff; color:#333; margin:0; overflow-x:hidden; }
                .close-btn { position: fixed; top: 15px; right: 25px; font-size: 50px; cursor: pointer; color: #ccc; z-index:100; }
                .detail-wrap { display: flex; flex-direction: column; align-items: center; max-width: 1200px; margin: 50px auto; }
                #imgBox { width: 100%; max-width: 480px; height: 550px; background:#f9f9f9; overflow:hidden; perspective: 1000px; touch-action: none; }
                #mI { width: 100%; height: 100%; object-fit: contain; transition: transform 0.1s; pointer-events: none; }
                .t-btn { border:1px solid #ddd; background:#fff; padding:15px; cursor:pointer; margin:5px; min-width:60px; font-weight:bold; }
                .t-btn.active { background:#000; color:#fff; border-color:#000; }
                .buy-btn { background:#000; color:#fff; border:none; width:100%; padding:22px; cursor:pointer; font-weight:bold; letter-spacing:2px; margin-top:25px; font-size:16px; }
                .thumb { border:1px solid #eee; cursor:pointer; margin: 0 5px; }
                @media (min-width: 900px) {
                    .detail-wrap { flex-direction: row; align-items: flex-start; gap: 60px; padding: 0 40px; }
                    #imgBox { height: 650px; }
                }
            </style>
        </head>
        <body>
            <div class="close-btn" onclick="window.close()">&times;</div>
            <div class="detail-wrap">
                <div>
                    <div id="imgBox"><img src="${p.imgFrente}" id="mI"></div>
                    <div style="display:flex; margin-top:20px; justify-content:center;">
                        <img src="${p.imgFrente}" width="75" class="thumb" onclick="document.getElementById('mI').src=this.src">
                        <img src="${p.imgAtras}" width="75" class="thumb" onclick="document.getElementById('mI').src=this.src">
                    </div>
                </div>
                <div style="max-width:500px; width:100%;">
                    <h1 style="font-family:serif; font-size:36px; margin-bottom:10px;">${p.nombre}</h1>
                    <p style="font-size:26px; color:#000; margin-bottom:20px;">$${p.precio} MXN</p>
                    <p style="line-height:1.7; color:#555; text-align:justify;">${p.desc}</p>
                    
                    <p style="font-size:12px; font-weight:bold; margin-top:30px;">TALLA</p>
                    <div>${tBtns}</div>

                    <p style="font-size:12px; font-weight:bold; margin-top:20px;">CANTIDAD</p>
                    <input type="number" id="qty" value="1" min="1" style="padding:12px; width:65px; border:1px solid #000;">

                    ${tablaHTML}

                    <button class="buy-btn" onclick="add()">AÑADIR A LA BOLSA</button>
                    <p style="text-align:center; font-size:11px; color:green; margin-top:15px;">🔒 Transacción Encriptada y Garantizada</p>
                </div>
            </div>
            <script>
                let st = "";
                const box = document.getElementById('imgBox');
                const img = document.getElementById('mI');

                function sel(b,t){ document.querySelectorAll('.t-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); st=t; }
                function add(){ 
                    const q = document.getElementById('qty').value;
                    if(!st) return alert("Por favor selecciona una talla.");
                    window.opener.agregarAlCarrito(${p.id}, st, parseInt(q));
                    window.close();
                }

                const moveRotate = (posX) => {
                    const rect = box.getBoundingClientRect();
                    const rot = (((posX - rect.left) / box.clientWidth) - 0.5) * 80;
                    img.style.transform = "rotateY(" + rot + "deg)";
                };

                box.addEventListener('mousemove', (e) => moveRotate(e.clientX));
                box.addEventListener('mouseleave', () => img.style.transform = "rotateY(0deg)");
                box.addEventListener('touchmove', (e) => {
                    moveRotate(e.touches[0].clientX);
                });
                box.addEventListener('touchend', () => img.style.transform = "rotateY(0deg)");
            </script>
        </body></html>
    `);
}

// CARRITO Y PAGO
function agregarAlCarrito(id, talla, cantidad) {
    const pBase = productos.find(x => x.id === id);
    carrito.push({ ...pBase, tallaElegida: talla, cantidad: cantidad, subtotal: pBase.precio * cantidad });
    actualizarUI();
    if(!document.getElementById('sideCart').classList.contains('active')) toggleCarrito();
}

function actualizarUI() {
    document.getElementById('cartCount').innerText = carrito.length;
    const total = carrito.reduce((s, i) => s + i.subtotal, 0);
    const side = document.getElementById('sideCart');
    side.innerHTML = `
        <div style="padding:25px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center;">
            <b>BOLSA (${carrito.length})</b> <span onclick="toggleCarrito()" style="cursor:pointer; font-size:25px;">&times;</span>
        </div>
        <div style="padding:20px; flex-grow:1; overflow-y:auto;">
            ${carrito.map(i => `<div style="margin-bottom:15px; font-size:12px;"><b>${i.nombre}</b> (x${i.cantidad}) - Talla: ${i.tallaElegida}<br>$${i.subtotal}</div>`).join("")}
        </div>
        <div style="padding:25px; border-top:1px solid #eee;">
            <p style="display:flex; justify-content:space-between;"><span>TOTAL</span><b>$${total} MXN</b></p>
            <button onclick="abrirVerificacion()" style="width:100%; background:#000; color:#fff; padding:18px; border:none; cursor:pointer; font-weight:bold;">CHECKOUT</button>
        </div>
    `;
}

function toggleCarrito() { document.getElementById('sideCart').classList.toggle('active'); }

function seleccionarMetodo(el, met) {
    document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('selected'));
    el.classList.add('selected');
    metodoSeleccionado = met;
}

function abrirVerificacion() {
    const p1 = document.getElementById('paso1');
    p1.innerHTML = `
        <h2 style="font-family:serif;">PAGO</h2>
        <input type="email" id="uE" placeholder="CORREO@EJEMPLO.COM" class="vivid-input">
        <div class="payment-grid">
            <div class="pay-method" onclick="seleccionarMetodo(this,'Tarjeta')">💳 Tarjeta</div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'PayPal')">🔵 PayPal</div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'OXXO')">🏪 OXXO</div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'SPEI')">🏦 SPEI</div>
        </div>
        <button onclick="enviarCodigo()" class="btn-solicitar">SOLICITAR CÓDIGO</button>
    `;
    document.getElementById('modalPago').style.display = "flex";
}

function enviarCodigo() {
    const email = document.getElementById('uE').value;
    if(!email || !metodoSeleccionado) return alert("Completa los datos.");
    codGen = Math.floor(1000 + Math.random() * 9000);
    emailjs.send("service_x64il4c", "template_lpaue55", { email: email, codigo_verificacion: codGen, metodo: metodoSeleccionado })
    .then(() => {
        alert("Código enviado.");
        document.getElementById('paso1').style.display = "none";
        document.getElementById('paso2').style.display = "block";
    });
}

function regresarAPaso1() {
    document.getElementById('paso2').style.display = "none";
    document.getElementById('paso1').style.display = "block";
}

function finalizarCompra() {
    if(document.getElementById('inputCodigo').value == codGen) {
        const total = carrito.reduce((s,i)=>s+i.subtotal,0);
        const emailUsuario = document.getElementById('uE').value;
        const entrega = new Date();
        entrega.setDate(entrega.getDate() + 7);
        const fechaEntregaStr = entrega.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase();

        const orden = { 
            id: Math.floor(Math.random()*90000), 
            total: total, 
            metodo: metodoSeleccionado,
            items: carrito.map(i => `${i.nombre} (x${i.cantidad}, Talla: ${i.tallaElegida})`).join(", "),
            fecha: new Date().toLocaleDateString(),
            fecha_entrega: fechaEntregaStr
        };

        // ENVÍO A EMAILJS
        emailjs.send("service_x64il4c", "template_f8zqwwv", {
            email: emailUsuario,
            order_id: orden.id,
            total: orden.total,
            items: orden.items,
            metodo: orden.metodo,
            fecha: orden.fecha,
            fecha_entrega: orden.fecha_entrega
        });

        let hist = JSON.parse(localStorage.getItem('L_Hist')) || [];
        hist.push(orden);
        localStorage.setItem('L_Hist', JSON.stringify(hist));
        
        generarTicket(orden);
    } else { alert("Código incorrecto."); }
}

function generarTicket(orden) {
    document.getElementById('ticketContenido').innerHTML = `
        <div style="border:1px dashed #000; padding:20px; font-family:monospace; background:#fff;">
            <center><b>THE LOOK LAB | TICKET</b></center><br>
            FOLIO: #${orden.id}<br>
            PAGO: ${orden.metodo}<br>
            RESUMEN: ${orden.items}<br>
            <hr>
            <b>TOTAL: $${orden.total} MXN</b>
            <div style="text-align:center; margin-top:15px;">
                <img src="https://i.ibb.co/p6wnbwkQ/images.jpg" style="width:130px; border-radius:10px;">
                <p style="background:#f4f7f9; padding:10px; font-family:sans-serif; font-size:12px;">
                   🚚 ENTREGA ESTIMADA:<br><b>${orden.fecha_entrega}</b>
                </p>
            </div>
        </div>
    `;
    document.getElementById('paso2').style.display = "none";
    document.getElementById('pasoTicket').style.display = "block";
    carrito = [];
    document.getElementById('cartCount').innerText = "0";
}

function toggleHistorial() {
    const h = document.getElementById('seccionHistorial');
    if(h.style.display === "none") {
        const ped = JSON.parse(localStorage.getItem('L_Hist')) || [];
        document.getElementById('contenedorPedidos').innerHTML = ped.reverse().map(p => `
            <div style="border-bottom:1px solid #eee; padding:15px 0;">
                <b>PEDIDO #${p.id}</b> - ${p.fecha}<br>
                Items: ${p.items}<br>
                Total: <b>$${p.total} MXN</b>
            </div>`).join("") || "Sin pedidos.";
        h.style.display = "block";
    } else { h.style.display = "none"; }
}
