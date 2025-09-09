// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-menu li a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cambio de categorías del menú
const categories = document.querySelectorAll('.category');
const menuSections = document.querySelectorAll('.menu-section');

// Datos del menú para diferentes categorías
const menuData = {
    chicken: [
        {
            img: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
            name: "Original Recipe",
            description: "La receta secreta de 11 hierbas y especias",
            price: "Desde $2.99"
        },
        {
            img: "https://images.unsplash.com/photo-1606755962773-d324e2a3c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            name: "Extra Crispy",
            description: "Pollo súper crujiente con empanizado especial",
            price: "Desde $3.29"
        },
        {
            img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
            name: "Chicken Tenders",
            description: "Tiras de pollo tierno y jugoso",
            price: "Desde $4.99"
        }
    ],
    burgers: [
        {
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
            name: "Zinger Burger",
            description: "Hamburguesa picante con pollo crujiente",
            price: "$6.99"
        },
        {
            img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
            name: "Colonel Burger",
            description: "La hamburguesa clásica con salsa especial",
            price: "$5.99"
        },
        {
            img: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
            name: "Tower Burger",
            description: "Doble carne con queso y vegetales frescos",
            price: "$8.99"
        }
    ],
    sides: [
        {
            img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            name: "Papas Fritas",
            description: "Papas doradas y crujientes",
            price: "$2.99"
        },
        {
            img: "https://images.unsplash.com/photo-1582142306909-195724d33adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            name: "Ensalada de Col",
            description: "Ensalada fresca con aderezo cremoso",
            price: "$1.99"
        },
        {
            img: "https://images.unsplash.com/photo-1600289031869-629977509f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            name: "Puré de Papa",
            description: "Cremoso puré con salsa gravy",
            price: "$2.49"
        }
    ],
    desserts: [
        {
            img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
            name: "Helado de Vainilla",
            description: "Helado cremoso de vainilla natural",
            price: "$1.99"
        },
        {
            img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1989&q=80",
            name: "Pastel de Chocolate",
            description: "Delicioso pastel húmedo de chocolate",
            price: "$3.99"
        },
        {
            img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
            name: "Galletas",
            description: "Galletas caseras recién horneadas",
            price: "$1.49"
        }
    ]
};

// Función para renderizar elementos del menú
function renderMenuItems(category) {
    const menuItemsContainer = document.querySelector('.menu-items');
    const items = menuData[category];
    
    if (!items) return;
    
    menuItemsContainer.innerHTML = `
        <div class="menu-section" id="${category}">
            ${items.map(item => `
                <div class="menu-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="item-info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <span class="price">${item.price}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Event listeners para las categorías del menú
categories.forEach(category => {
    category.addEventListener('click', () => {
        // Remover clase activa de todas las categorías
        categories.forEach(cat => cat.classList.remove('active'));
        // Agregar clase activa a la categoría clickeada
        category.classList.add('active');
        
        // Obtener la categoría seleccionada
        const selectedCategory = category.getAttribute('data-category');
        
        // Renderizar los elementos del menú para la categoría seleccionada
        renderMenuItems(selectedCategory);
    });
});

// Efecto de scroll para el header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(228, 0, 43, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#e4002b';
        header.style.backdropFilter = 'none';
    }
});

// Animación de contador para números
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.innerHTML = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.promo-card, .menu-item, .ubicacion-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Función para simular pedidos
function simulateOrder(itemName) {
    alert(`¡Excelente elección! Has agregado ${itemName} a tu carrito. Serás redirigido al proceso de pago.`);
}

// Event listeners para botones de pedido
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('order-btn')) {
        const itemName = e.target.closest('.promo-card').querySelector('h3').textContent;
        simulateOrder(itemName);
    }
    
    if (e.target.classList.contains('cta-button')) {
        document.querySelector('#promociones').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    if (e.target.classList.contains('location-btn')) {
        const locationName = e.target.closest('.ubicacion-card').querySelector('h3').textContent;
        alert(`Abriendo ubicación: ${locationName} en Google Maps...`);
    }
});

// Cargar el menú inicial (pollo)
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems('chicken');
});

// Efectos de partículas en el hero (opcional)
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 204, 0, 0.6);
        border-radius: 50%;
        pointer-events: none;
        animation: float 3s ease-in-out infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Crear partículas cada cierto tiempo
setInterval(createParticle, 500);
