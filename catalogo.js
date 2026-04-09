/* ============================================
   MASK® — CATALOG PAGES SCRIPTS
   (camisetas, calcas, shorts, moletons)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- CART STATE ---- */
    let cart = JSON.parse(localStorage.getItem('maskCart') || '[]');

    function saveCart() {
        localStorage.setItem('maskCart', JSON.stringify(cart));
    }

    function updateCartUI() {
        const count = cart.reduce((acc, i) => acc + i.qty, 0);
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });

        const itemsEl = document.getElementById('cart-items');
        const totalEl = document.getElementById('cart-total-value');
        if (!itemsEl) return;

        itemsEl.innerHTML = '';
        if (cart.length === 0) {
            itemsEl.innerHTML = '<div class="cart-empty">Carrinho vazio</div>';
        } else {
            cart.forEach((item, idx) => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <img src="${item.img}" alt="${item.nome}">
                    <div class="cart-item-info">
                        <h4>${item.nome}</h4>
                        <p>Tamanho: ${item.tamanho} &nbsp;|&nbsp; Cor: ${item.cor}</p>
                        <p class="cart-item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <button class="cart-item-remove" data-idx="${idx}" title="Remover">✕</button>
                `;
                itemsEl.appendChild(div);
            });
            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    cart.splice(Number(btn.dataset.idx), 1);
                    saveCart();
                    updateCartUI();
                });
            });
        }

        const total = cart.reduce((acc, i) => acc + i.preco * i.qty, 0);
        if (totalEl) totalEl.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    }

    /* ---- OPEN / CLOSE CART ---- */
    function openCart() {
        document.getElementById('cart-sidebar')?.classList.add('active');
        document.getElementById('cart-bg')?.classList.add('active');
    }

    function closeCart() {
        document.getElementById('cart-sidebar')?.classList.remove('active');
        document.getElementById('cart-bg')?.classList.remove('active');
    }

    document.querySelectorAll('.cart-trigger').forEach(el => el.addEventListener('click', openCart));
    document.getElementById('cart-close')?.addEventListener('click', closeCart);
    document.getElementById('cart-bg')?.addEventListener('click', closeCart);

    /* ---- ADD TO CART ---- */
    window.addToCart = function(nome, preco, img, tamanho, cor) {
        if (!tamanho) { showToast('Selecione um tamanho!'); return; }
        const existing = cart.find(i => i.nome === nome && i.tamanho === tamanho && i.cor === cor);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ nome, preco, img, tamanho, cor, qty: 1 });
        }
        saveCart();
        updateCartUI();
        showToast('✓ Adicionado ao carrinho');
    };

    /* ---- TOAST ---- */
    window.showToast = function(msg) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    };

    /* ---- MODAL ---- */
    window.openModal = function(produto) {
        const overlay = document.getElementById('modal-overlay');
        if (!overlay) return;

        // Main image
        const mainImg = overlay.querySelector('.modal-main-img');
        mainImg.src = produto.imgs[0];

        // Thumbs
        const thumbsEl = overlay.querySelector('.modal-thumbs');
        thumbsEl.innerHTML = '';
        produto.imgs.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = produto.nome;
            if (i === 0) img.classList.add('active');
            img.addEventListener('click', () => {
                mainImg.src = src;
                thumbsEl.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                img.classList.add('active');
            });
            thumbsEl.appendChild(img);
        });

        // Info
        overlay.querySelector('.modal-cat').textContent = produto.categoria;
        overlay.querySelector('.modal-nome').textContent = produto.nome;
        overlay.querySelector('.modal-preco').textContent = 'R$ ' + produto.preco.toFixed(2).replace('.', ',');
        overlay.querySelector('.modal-desc').textContent = produto.descFull;
        overlay.querySelector('.modal-material').innerHTML = '<strong>Material:</strong> ' + produto.material;

        // Tamanhos
        const tamEl = overlay.querySelector('.modal-tamanhos');
        tamEl.innerHTML = '';
        let selectedTam = '';
        produto.tamanhos.forEach(t => {
            const btn = document.createElement('button');
            btn.className = 'tamanho-btn';
            btn.textContent = t;
            btn.addEventListener('click', () => {
                tamEl.querySelectorAll('.tamanho-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedTam = t;
            });
            tamEl.appendChild(btn);
        });

        // Cores
        const coresEl = overlay.querySelector('.modal-cores');
        coresEl.innerHTML = '';

        // Remove label anterior para não acumular no DOM
        const oldLabel = overlay.querySelector('.cor-nome');
        if (oldLabel) oldLabel.remove();

        let selectedCor = produto.cores[0]?.nome || '';
        produto.cores.forEach(c => {
            const dot = document.createElement('div');
            dot.className = 'cor-dot' + (c.nome === selectedCor ? ' selected' : '');
            dot.style.background = c.hex;
            dot.title = c.nome;
            dot.addEventListener('click', () => {
                coresEl.querySelectorAll('.cor-dot').forEach(d => d.classList.remove('selected'));
                dot.classList.add('selected');
                selectedCor = c.nome;
                const label = coresEl.nextElementSibling;
                if (label && label.classList.contains('cor-nome')) label.textContent = c.nome;
            });
            coresEl.appendChild(dot);
        });
        const nomeLabel = document.createElement('span');
        nomeLabel.className = 'cor-nome';
        nomeLabel.textContent = selectedCor;
        coresEl.after(nomeLabel);

        // Btn
        const btnModal = overlay.querySelector('.btn-add-modal');
        btnModal.onclick = () => {
            addToCart(produto.nome, produto.preco, produto.imgs[0], selectedTam, selectedCor);
            closeModal();
        };

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function() {
        document.getElementById('modal-overlay')?.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.getElementById('modal-overlay')?.addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeModal(); closeCart(); }
    });

    /* ---- TAMANHO TAGS on cards ---- */
    document.querySelectorAll('.tamanho-tag').forEach(tag => {
        tag.addEventListener('click', e => {
            e.stopPropagation();
            const card = tag.closest('.produto-card');
            card.querySelectorAll('.tamanho-tag').forEach(t => t.classList.remove('selected'));
            tag.classList.add('selected');
        });
    });

    /* ---- DARK MODE ---- */
    const toggleBtn = document.getElementById('toggle-dark');
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark');
        if (toggleBtn) toggleBtn.textContent = '☀️';
    }
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'on');
                toggleBtn.textContent = '☀️';
            } else {
                localStorage.setItem('darkMode', 'off');
                toggleBtn.textContent = '🌙';
            }
        });
    }

    /* ---- INIT ---- */
    updateCartUI();
});