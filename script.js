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

// VENTANA DE DETALLE (CON TABLA DE TALLAS GRANDE)
function abrirPaginaDetalle(id) {
    const p = productos.find(x => x.id === id);
    const v = window.open("", "_blank");
    const tBtns = p.tallas.map(t => `<button class="t-btn" onclick="sel(this,'${t}')">${t}</button>`).join("");

    let tablaHTML = (p.tipo === "ropa" || p.tipo === "calzado") ? `
        <div style="margin-top:30px; border:2px solid #000; padding:20px; border-radius:8px; background:#fcfcfc;">
            <b style="letter-spacing:2px; font-size:14px; display:block; margin-bottom:15px; text-align:center; text-decoration:underline;">GUÍA DE MEDIDAS OFICIAL</b>
            <table style="width:100%; border-collapse:collapse; font-size:13px;">
                <tr style="background:#000; color:#fff;">
                    <th style="padding:10px; border:1px solid #000;">TALLA</th>
                    <th style="padding:10px; border:1px solid #000;">PECHO/ANCHO</th>
                    <th style="padding:10px; border:1px solid #000;">LARGO TOTAL</th>
                </tr>
                <tr style="text-align:center;">
                    <td style="padding:10px; border:1px solid #ddd;">S / 23</td>
                    <td style="padding:10px; border:1px solid #ddd;">95 cm</td>
                    <td style="padding:10px; border:1px solid #ddd;">68 cm</td>
                </tr>
                <tr style="text-align:center; background:#f9f9f9;">
                    <td style="padding:10px; border:1px solid #ddd;">M / 24</td>
                    <td style="padding:10px; border:1px solid #ddd;">102 cm</td>
                    <td style="padding:10px; border:1px solid #ddd;">70 cm</td>
                </tr>
                <tr style="text-align:center;">
                    <td style="padding:10px; border:1px solid #ddd;">L / 25</td>
                    <td style="padding:10px; border:1px solid #ddd;">110 cm</td>
                    <td style="padding:10px; border:1px solid #ddd;">72 cm</td>
                </tr>
            </table>
            <p style="font-size:10px; color:#888; margin-top:10px; text-align:center;">* Medidas tomadas en superficie plana. Margen de error +/- 1cm.</p>
        </div>` : "";

    v.document.write(`
        <html>
        <head>
            <title>${p.nombre} | The Look Lab</title>
            <style>
                body { font-family: 'Helvetica', sans-serif; padding: 40px; display: flex; justify-content: center; background:#fff; color:#333; }
                .close-btn { position: fixed; top: 20px; right: 30px; font-size: 50px; cursor: pointer; color: #ddd; transition: 0.3s; }
                .close-btn:hover { color: #000; }
                .detail-wrap { display: flex; gap: 60px; max-width: 1200px; margin-top: 40px; align-items: flex-start; }
                #imgBox { width: 500px; height: 650px; background:#f9f9f9; overflow:hidden; perspective: 1000px; border: 1px solid #eee; }
                #mI { width: 100%; height: 100%; object-fit: contain; transition: transform 0.1s; }
                .t-btn { border:1px solid #ddd; background:#fff; padding:15px; cursor:pointer; margin-right:10px; min-width:55px; font-weight:bold; }
                .t-btn.active { background:#000; color:#fff; border-color:#000; }
                .buy-btn { background:#000; color:#fff; border:none; width:100%; padding:25px; cursor:pointer; font-weight:bold; letter-spacing:3px; margin-top:30px; font-size:16px; }
                .thumb { border:1px solid #eee; cursor:pointer; opacity:0.6; transition:0.3s; }
                .thumb:hover { opacity:1; border-color:#000; }
            </style>
        </head>
        <body>
            <div class="close-btn" onclick="window.close()">&times;</div>
            <div class="detail-wrap">
                <div>
                    <div id="imgBox"><img src="${p.imgFrente}" id="mI"></div>
                    <div style="display:flex; gap:15px; margin-top:20px; justify-content:center;">
                        <img src="${p.imgFrente}" width="80" class="thumb" onclick="document.getElementById('mI').src=this.src">
                        <img src="${p.imgAtras}" width="80" class="thumb" onclick="document.getElementById('mI').src=this.src">
                    </div>
                </div>
                <div style="max-width:500px">
                    <p style="font-size:12px; letter-spacing:4px; color:#bbb; margin:0;">WINTER ATELIER 26</p>
                    <h1 style="font-family:serif; font-size:40px; margin:10px 0;">${p.nombre}</h1>
                    <p style="font-size:28px; color:#000; margin-bottom:25px;">$${p.precio} MXN</p>
                    <p style="line-height:1.8; color:#555; font-size:15px; text-align:justify;">${p.desc}</p>
                    
                    <p style="font-size:12px; font-weight:bold; margin-top:30px; letter-spacing:1px;">SELECCIONAR TALLA</p>
                    <div style="margin-bottom:25px;">${tBtns}</div>

                    <p style="font-size:12px; font-weight:bold; margin-top:20px;">CANTIDAD</p>
                    <input type="number" id="qty" value="1" min="1" style="padding:12px; width:70px; border:1px solid #000; font-size:16px;">

                    ${tablaHTML}

                    <button class="buy-btn" onclick="add()">AÑADIR A LA BOLSA</button>
                    <div style="margin-top:20px; display:flex; gap:10px; align-items:center; color:#27ae60; font-size:13px;">
                        <span>🛡️</span> <b>Compra Protegida:</b> Devoluciones sin costo durante 30 días.
                    </div>
                </div>
            </div>
            <script>
                let st = "";
                function sel(b,t){ document.querySelectorAll('.t-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); st=t; }
                function add(){ 
                    const q = document.getElementById('qty').value;
                    if(!st) return alert("Por favor selecciona una talla para continuar.");
                    window.opener.agregarAlCarrito(${p.id}, st, parseInt(q));
                    window.close();
                }
                const box = document.getElementById('imgBox');
                const img = document.getElementById('mI');
                box.onmousemove = (e) => {
                    const r = box.getBoundingClientRect();
                    const rot = (((e.clientX - r.left) / box.clientWidth) - 0.5) * 80;
                    img.style.transform = "rotateY(" + rot + "deg)";
                };
                box.onmouseleave = () => img.style.transform = "rotateY(0deg)";
            </script>
        </body></html>
    `);
}

// CARRITO
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
        <div style="padding:30px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center;">
            <b style="letter-spacing:2px;">BOLSA (${carrito.length})</b> <span onclick="toggleCarrito()" style="cursor:pointer; font-size:25px;">&times;</span>
        </div>
        <div style="padding:25px; flex-grow:1; overflow-y:auto;">
            ${carrito.map(i => `
                <div style="margin-bottom:20px; border-bottom:1px solid #f9f9f9; padding-bottom:15px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                        <b>${i.nombre}</b>
                        <b>$${i.subtotal}</b>
                    </div>
                    <div style="font-size:12px; color:#888;">Cant: ${i.cantidad} | Talla: ${i.tallaElegida}</div>
                </div>
            `).join("")}
        </div>
        <div style="padding:30px; border-top:1px solid #eee; background:#fafafa;">
            <p style="display:flex; justify-content:space-between; font-size:18px; margin-bottom:20px;"><span>TOTAL</span><b>$${total} MXN</b></p>
            <button onclick="abrirVerificacion()" style="width:100%; background:#000; color:#fff; padding:20px; border:none; cursor:pointer; font-weight:bold; letter-spacing:2px;">CONTINUAR AL PAGO</button>
        </div>
    `;
}

function toggleCarrito() { document.getElementById('sideCart').classList.toggle('active'); }

// PASARELA DE PAGO CON 4 MÉTODOS
function seleccionarMetodo(el, met) {
    document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('selected'));
    el.classList.add('selected');
    metodoSeleccionado = met;
}

function abrirVerificacion() {
    const p1 = document.getElementById('paso1');
    p1.innerHTML = `
        <h2 style="font-family:serif; letter-spacing:3px;">MÉTODO DE PAGO</h2>
        <input type="email" id="uE" placeholder="TU CORREO ELECTRÓNICO" class="vivid-input">
        <div class="payment-grid">
            <div class="pay-method" onclick="seleccionarMetodo(this,'Tarjeta')"><span>💳</span><span>Tarjeta</span></div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'PayPal')"><span>🔵</span><span>PayPal</span></div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'OXXO')"><span>🏪</span><span>OXXO Pay</span></div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'SPEI')"><span>🏦</span><span>SPEI</span></div>
        </div>
        <button onclick="enviarCodigo()" class="btn-solicitar">ENVIAR CÓDIGO DE SEGURIDAD</button>
    `;
    document.getElementById('modalPago').style.display = "flex";
}

function enviarCodigo() {
    const email = document.getElementById('uE').value;
    if(!email || !metodoSeleccionado) return alert("Por favor completa tu correo y selecciona un método de pago.");
    codGen = Math.floor(1000 + Math.random() * 9000);
    emailjs.send("service_x64il4c", "template_lpaue55", { email: email, codigo_verificacion: codGen, metodo: metodoSeleccionado })
    .then(() => {
        alert("Código de verificación enviado exitosamente.");
        document.getElementById('paso1').style.display = "none";
        document.getElementById('paso2').style.display = "block";
    });
}

// FINALIZACIÓN Y TICKET DETALLADO
function finalizarCompra() {
    if(document.getElementById('inputCodigo').value == codGen) {
        const total = carrito.reduce((s,i)=>s+i.subtotal,0);
        const listaFinal = carrito.map(i => `${i.nombre} (Cant: ${i.cantidad}, Talla: ${i.tallaElegida})`).join(", ");
        
        const orden = { 
            id: Math.floor(Math.random()*900000), 
            total: total, 
            metodo: metodoSeleccionado,
            items: listaFinal,
            fecha: new Date().toLocaleDateString()
        };
        
        let hist = JSON.parse(localStorage.getItem('L_Hist')) || [];
        hist.push(orden);
        localStorage.setItem('L_Hist', JSON.stringify(hist));

        generarTicket(orden);
    } else { alert("Código de verificación incorrecto."); }
}

function generarTicket(orden) {
    const entrega = new Date();
    entrega.setDate(entrega.getDate() + 7);
    const fechaLlegada = entrega.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    document.getElementById('ticketContenido').innerHTML = `
        <div style="border:2px solid #000; padding:25px; font-family:monospace; background:#fff; font-size:13px; line-height:1.6;">
            <center><b>*** TICKET DE COMPRA ***</b><br><b>THE LOOK LAB | ATELIER</b></center><br>
            FOLIO: #${orden.id}<br>
            FECHA DE TRANSACCIÓN: ${orden.fecha}<br>
            MÉTODO DE PAGO: ${orden.metodo}<br>
            <hr style="border:1px dashed #000;">
            DETALLE:<br>${orden.items}<br>
            <hr style="border:1px dashed #000;">
            <b>TOTAL PAGADO: $${orden.total} MXN</b>
            <div style="background:#000; color:#fff; padding:15px; margin-top:25px; text-align:center; font-family:sans-serif; border-radius:5px;">
                🚚 ESTIMADO DE ARRIBO:<br><b style="font-size:14px;">${fechaLlegada.toUpperCase()}</b>
            </div>
            <p style="text-align:center; font-size:10px; margin-top:10px;">Gracias por ser parte de la exclusiva colección Atelier.</p>
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
            <div style="border:1px solid #eee; padding:20px; margin-bottom:15px; border-radius:8px; background:#fff;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <b style="color:#000; font-size:14px;">PEDIDO #${p.id}</b>
                    <span style="color:#888; font-size:12px;">${p.fecha}</span>
                </div>
                <div style="color:#555; font-size:13px; margin-bottom:10px;">${p.items}</div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:11px; background:#f0f0f0; padding:4px 8px; border-radius:3px;">${p.metodo}</span>
                    <b style="font-size:15px;">$${p.total} MXN</b>
                </div>
            </div>`).join("") || "<p style='text-align:center; color:#999;'>Aún no has realizado ninguna compra.</p>";
        h.style.display = "block";
    } else { h.style.display = "none"; }
}
