emailjs.init("WDGWcCoDSfaytwhKL"); 

const productos = [
    { 
        id: 1, nombre: "Abrigo Teddy Bear", precio: 1450, 
        imgFrente: "assets/i1_frente.png", imgAtras: "assets/i1_atras.png", 
        tallas: ["S", "M", "L"], 
        desc: "Nuestro icónico Abrigo Teddy Bear es el epítome de la calidez invernal. Confeccionado con fibras de alta densidad que emulan la suavidad del vellón orgánico, esta pieza ofrece una barrera térmica inigualable contra temperaturas bajo cero. Su corte oversized permite un layering sofisticado, mientras que el forro de satén italiano proporciona una sensación de lujo al contacto con la piel. Un diseño pensado para perdurar décadas en tu armario personal." 
    },
    { 
        id: 2, nombre: "Impermeable Crystal", precio: 890, 
        imgFrente: "assets/i2_enfrente.png", imgAtras: "assets/i2_atras.png", 
        tallas: ["Única"], 
        desc: "Tecnología y estilo se fusionan en el Impermeable Crystal. Fabricado con un polímero translúcido de alta resistencia, permite que la arquitectura de tu atuendo brille incluso bajo la tormenta. Sus costuras están selladas mediante calor para garantizar una impermeabilidad total, mientras que su ligereza lo hace el compañero ideal para viajes urbanos. Una pieza futurista que redefine la moda utilitaria contemporánea." 
    },
    { 
        id: 3, nombre: "Sudadera Polar Paw", precio: 750, 
        imgFrente: "assets/i3_frente.png", imgAtras: "assets/i3_atras.png", 
        tallas: ["S", "M", "L"], 
        desc: "La Sudadera Polar Paw es la definición de confort premium. Hecha de algodón orgánico de 400g con un interior cepillado ultra suave, retiene el calor corporal de manera eficiente sin sacrificar la transpirabilidad. Presenta un bordado de alta precisión en el pecho y puños reforzados con elastano que mantienen su forma tras cada lavado. Perfecta para quienes buscan una estética 'off-duty' impecable." 
    },
    { 
        id: 4, nombre: "Botas Lluvia Pastel", precio: 980, 
        imgFrente: "assets/i4_frente.png", imgAtras: "assets/i4_atras.png", 
        tallas: ["23", "24", "25"], 
        desc: "Eleve su paso en los días grises con nuestras Botas de Lluvia en tonos pastel. Moldeadas en goma vulcanizada de alta calidad, estas botas son completamente estancas y resistentes al desgaste. La suela Track-Grip ofrece una tracción superior en superficies resbaladizas, mientras que la plantilla ergonómica asegura confort durante caminatas prolongadas. Una fusión perfecta entre la robustez industrial y la delicadeza estética de The Look Lab." 
    },
    { 
        id: 5, nombre: "Bufanda Infinita", precio: 350, 
        imgFrente: "assets/i5_frente.png", imgAtras: "assets/i5_atras.png", 
        tallas: ["Uni"], 
        desc: "El accesorio de transición esencial. Nuestra Bufanda Infinita está tejida en punto inglés con una mezcla de lana y acrílico soft-touch, evitando cualquier irritación en la piel. Su diseño circular permite un ajuste seguro contra el viento, manteniendo la zona del cuello y rostro protegida en todo momento. Un complemento ligero pero potente en su capacidad de abrigo, disponible en una paleta de colores gélidos." 
    },
    { 
        id: 6, nombre: "Chaqueta Puffer Pro", precio: 1800, 
        imgFrente: "assets/i6_frente.png", imgAtras: "assets/i6_atras.png", 
        tallas: ["M", "L"], 
        desc: "Diseñada para condiciones extremas, la Puffer Pro utiliza relleno térmico Eco-Down, que ofrece la misma capacidad de aislamiento que la pluma natural pero de forma sostenible. Su tejido exterior cuenta con tratamiento repelente al agua DWR, y su estructura acolchada ha sido optimizada para no añadir volumen innecesario a la silueta. Cuenta con bolsillos térmicos ocultos y cierre de alta resistencia." 
    },
    { 
        id: 7, nombre: "Gorro Orejitas", precio: 290, 
        imgFrente: "assets/i7_frente.png", imgAtras: "assets/i7_atras.png", 
        tallas: ["Uni"], 
        desc: "Un toque lúdico para el invierno. Este gorro está tejido con una mezcla de lana Merino que garantiza suavidad y una gestión óptima de la temperatura. Las orejas estructurales añaden un detalle distintivo de nuestra firma, convirtiéndolo en una pieza favorita para editoriales de invierno. Su ajuste elástico se adapta perfectamente, proporcionando abrigo constante sin oprimir." 
    },
    { 
        id: 8, nombre: "Trench Coat Classic", precio: 1650, 
        imgFrente: "assets/i8_frente.png", imgAtras: "assets/i8_atras.png", 
        tallas: ["S", "M"], 
        desc: "La elegancia británica reimaginada. Nuestro Trench Coat Classic está confeccionado en una gabardina de algodón hidrófugo de alto gramaje. Presenta una silueta estructurada con solapas anchas, hebillas forradas en piel y un cinturón que define la figura con precisión. Es la prenda de inversión por excelencia, capaz de elevar cualquier conjunto de diario a un nivel de sofisticación superior." 
    },
    { 
        id: 9, nombre: "Leggings Térmicos", precio: 420, 
        imgFrente: "assets/i9_frente.png", imgAtras: "assets/i9_atras.png", 
        tallas: ["CH-M", "G-XG"], 
        desc: "Nuestros Leggings Térmicos utilizan tecnología de doble capa: un interior de fleece polar de tacto seda y un exterior elástico de alta densidad. Diseñados para simular la apariencia de medias finas pero ofreciendo la protección térmica de un pantalón de invierno. Su pretina de talle alto proporciona un efecto moldeador cómodo, ideal para combinar con faldas o vestidos durante la temporada de frío." 
    },
    { 
        id: 10, nombre: "Paraguas Pocket Lab", precio: 320, 
        imgFrente: "assets/i10_frente.png", imgAtras: "assets/i10_atras.png", 
        tallas: ["Mini"], 
        desc: "Pequeño en tamaño, grande en protección. El Paraguas Pocket Lab cuenta con una estructura de fibra de carbono ultra ligera y tela de microfibra de secado rápido. Su diseño compacto permite guardarlo en cualquier bolso pequeño o bolsillo de abrigo, asegurando que nunca seas sorprendido por la lluvia. Su mecanismo de apertura suave y resistencia al viento lo hacen el accesorio tecnológico definitivo." 
    }
];

let carrito = [];
let codGen = null;
let metodoSeleccionado = "";

const grid = document.getElementById('gridProductos');
productos.forEach(p => {
    grid.innerHTML += `
        <article class="card" onclick="abrirPaginaDetalle(${p.id})">
            <div class="img-wrapper"><img src="${p.imgFrente}"></div>
            <p class="p-name">${p.nombre}</p>
            <p class="p-price">$${p.precio} MXN</p>
        </article>`;
});

function abrirPaginaDetalle(id) {
    const p = productos.find(x => x.id === id);
    const v = window.open("", "_blank");
    const tBtns = p.tallas.map(t => `<button class="t-btn" onclick="sel(this,'${t}')">${t}</button>`).join("");

    v.document.write(`
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: sans-serif; padding: 20px; display: flex; justify-content: center; position: relative; background:#fff; margin:0; }
                .close-btn { position: fixed; top: 15px; right: 20px; font-size: 40px; cursor: pointer; color: #ddd; z-index: 1000; }
                .detail-wrap { display: flex; gap: 40px; max-width: 1100px; margin-top: 50px; flex-wrap: wrap; justify-content: center; }
                #imgBox { width: 320px; height: 420px; overflow: hidden; background:#f9f9f9; cursor: crosshair; touch-action: none; }
                #mI { width: 100%; height: 100%; object-fit: contain; transition: transform 0.1s; }
                .t-btn { border:1px solid #ddd; background:#fff; padding:10px 15px; cursor:pointer; margin: 0 5px 5px 0; }
                .t-btn.active { background:#000; color:#fff; }
                .buy-btn { background:#000; color:#fff; border:none; width:100%; padding:18px; margin-top:20px; cursor:pointer; font-weight:bold; }
                .thumb { cursor:pointer; border:1px solid #eee; }
                @media (min-width: 800px) { #imgBox { width: 450px; height: 580px; } .detail-wrap { flex-wrap: nowrap; padding: 50px; } }
            </style>
        </head>
        <body>
            <div class="close-btn" onclick="window.close()">&times;</div>
            <div class="detail-wrap">
                <div>
                    <div id="imgBox"><img src="${p.imgFrente}" id="mI"></div>
                    <div style="display:flex; gap:10px; margin-top:15px; justify-content:center;">
                        <img src="${p.imgFrente}" width="60" class="thumb" onclick="document.getElementById('mI').src=this.src">
                        <img src="${p.imgAtras}" width="60" class="thumb" onclick="document.getElementById('mI').src=this.src">
                    </div>
                </div>
                <div style="max-width: 500px;">
                    <p style="font-size:10px; letter-spacing:3px; color:#ccc;">WINTER ATELIER 26</p>
                    <h1 style="font-family:serif; margin:10px 0;">${p.nombre}</h1>
                    <p style="font-size:22px; color:#444;">$${p.precio} MXN</p>
                    <p style="line-height:1.6; color:#666; font-size:14px; text-align:justify;">${p.desc}</p>
                    <div id="btns">${tBtns}</div>
                    <button class="buy-btn" onclick="add()">AÑADIR A LA BOLSA</button>
                </div>
            </div>
            <script>
                let st = "";
                function sel(b,t){ document.querySelectorAll('.t-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); st=t; }
                function add(){ if(!st) return alert("Seleccione talla"); window.opener.agregarAlCarrito(${p.id}, st); window.close(); }
                
                const box = document.getElementById('imgBox');
                const img = document.getElementById('mI');

                function handleRotate(clientX) {
                    const rect = box.getBoundingClientRect();
                    const x = clientX - rect.left;
                    const rotate = ((x / box.clientWidth) - 0.5) * 160;
                    img.style.transform = "rotateY(" + rotate + "deg)";
                }

                box.addEventListener('mousemove', (e) => handleRotate(e.clientX));
                box.addEventListener('touchmove', (e) => {
                    e.preventDefault(); 
                    handleRotate(e.touches[0].clientX);
                }, {passive: false});

                box.addEventListener('mouseleave', () => img.style.transform = "rotateY(0deg)");
                box.addEventListener('touchend', () => img.style.transform = "rotateY(0deg)");
            </script>
        </body>
        </html>
    `);
}

function agregarAlCarrito(id, talla) {
    const p = {...productos.find(x => x.id === id)};
    p.tallaElegida = talla;
    carrito.push(p);
    actualizarUI();
    if(!document.getElementById('sideCart').classList.contains('active')) toggleCarrito();
}

function actualizarUI() {
    document.getElementById('cartCount').innerText = carrito.length;
    const total = carrito.reduce((s, i) => s + i.precio, 0);
    const side = document.getElementById('sideCart');
    side.innerHTML = `
        <div style="padding:25px; border-bottom:1px solid #eee; display:flex; justify-content:space-between;">
            <b>BOLSA (${carrito.length})</b> <span onclick="toggleCarrito()" style="cursor:pointer;">&times;</span>
        </div>
        <div style="padding:20px; flex-grow:1; overflow-y:auto;">
            ${carrito.map(i => `<div style="margin-bottom:15px; font-size:12px;"><b>${i.nombre}</b> [${i.tallaElegida}] - $${i.precio}</div>`).join("")}
        </div>
        <div style="padding:25px; border-top:1px solid #eee;">
            <p style="display:flex; justify-content:space-between;"><b>TOTAL</b> <b>$${total} MXN</b></p>
            <button onclick="abrirVerificacion()" style="width:100%; background:#000; color:#fff; padding:15px; border:none; cursor:pointer;">CHECKOUT</button>
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
        <input type="email" id="uE" placeholder="CORREO ELECTRÓNICO" class="vivid-input">
        <div class="payment-grid">
            <div class="pay-method" onclick="seleccionarMetodo(this,'Tarjeta')"><span>💳</span><span>Tarjeta</span></div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'PayPal')"><span>🔵</span><span>PayPal</span></div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'OXXO')"><span>🏪</span><span>OXXO Pay</span></div>
            <div class="pay-method" onclick="seleccionarMetodo(this,'SPEI')"><span>🏦</span><span>SPEI</span></div>
        </div>
        <button onclick="enviarCodigo()" class="btn-solicitar">SOLICITAR CÓDIGO</button>
    `;
    document.getElementById('paso1').style.display = "block";
    document.getElementById('paso2').style.display = "none";
    document.getElementById('pasoTicket').style.display = "none";
    document.getElementById('modalPago').style.display = "flex";
}

function enviarCodigo() {
    const email = document.getElementById('uE').value;
    if(!email || !metodoSeleccionado) return alert("Complete sus datos.");
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
    const codIn = document.getElementById('inputCodigo').value;
    if(codIn == codGen) {
        const orden = { 
            id: Math.floor(Math.random()*9000)+1000, 
            total: carrito.reduce((s,i)=>s+i.precio,0), 
            metodo: metodoSeleccionado, 
            fecha: new Date().toLocaleDateString(),
            items: carrito.map(i => i.nombre).join(", ")
        };
        let hist = JSON.parse(localStorage.getItem('L_Hist')) || [];
        hist.push(orden);
        localStorage.setItem('L_Hist', JSON.stringify(hist));
        generarTicket(orden);
    } else { alert("CÓDIGO INCORRECTO."); }
}

function generarTicket(orden) {
    const min = new Date(); min.setDate(new Date().getDate() + 3);
    const max = new Date(); max.setDate(new Date().getDate() + 5);
    const rango = `${min.toLocaleDateString('es-ES',{day:'numeric',month:'short'})} - ${max.toLocaleDateString('es-ES',{day:'numeric',month:'short'})}`;

    document.getElementById('ticketContenido').innerHTML = `
        <div class="ticket-box">
            <div style="text-align:center; margin-bottom:15px;"><b>THE LOOK LAB</b></div>
            <div style="font-size:11px;">ORDEN: #${orden.id}</div>
            <div style="font-size:11px;">PAGO: ${orden.metodo}</div>
            <hr style="border:none; border-top:1px dashed #eee; margin:10px 0;">
            <div style="font-size:14px; font-weight:bold;">TOTAL: $${orden.total} MXN</div>
        </div>
        <div class="delivery-info">🚚 LLEGA ENTRE EL ${rango.toUpperCase()}</div>
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
            <div style="border-bottom:1px solid #eee; padding:15px 0; font-size:12px;">
                <b>#${p.id}</b> - ${p.fecha} - ${p.metodo} - <b>$${p.total}</b>
            </div>`).join("") || "Sin pedidos.";
        h.style.display = "block";
    } else { h.style.display = "none"; }
}
