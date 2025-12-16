import {
    cartItems,
    updateCartItemQuantity,
} from "../store/cartStore";
import { SHIPPING_RATES, CITIES } from "../data/shippingRates";

let currentSubtotal = 0;
let currentShippingCost = 0;
let customerData = {
    name: "",
    email: "",
    phone: "",
    address: ""
};

// DOM Elements - Using explicit type casting where helpful for intellisense
const itemsContainer = document.getElementById("cart-items-container");
const subtotalEl = document.getElementById("cart-subtotal");

// Buttons
const btnToStep2 = document.getElementById("btn-to-step-2");
const btnToStep4 = document.getElementById("btn-to-step-4");
const backToStep1 = document.getElementById("back-to-step-1");
const backToStep2 = document.getElementById("back-to-step-2");
const backToStep3 = document.getElementById("back-to-step-3");

// Elements for Logic
const shippingDepartmentSelect = document.getElementById("shipping-department");
const shippingCitySelect = document.getElementById("shipping-city");
const shippingResultDiv = document.getElementById("shipping-result");
const shippingCostValue = document.getElementById("shipping-cost-value");

// Function to handle step switching
function changeStep(stepNumber: number) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));

    // Show target step
    const targetContent = document.getElementById(`step-${stepNumber}`);
    const targetIndicator = document.getElementById(`step-${stepNumber}-indicator`);

    if (targetContent) targetContent.classList.add('active');
    if (targetIndicator) targetIndicator.classList.add('active');

    window.scrollTo(0, 0);
}

// --- Step 1: Cart ---
if (itemsContainer) {
    cartItems.subscribe((items) => {
        currentSubtotal = 0;
        itemsContainer.innerHTML = "";

        if (items.length === 0) {
            itemsContainer.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío.</p>';
            if (subtotalEl) subtotalEl.textContent = "$0";
            if (btnToStep2) (btnToStep2 as HTMLButtonElement).disabled = true;
            return;
        }

        if (btnToStep2) (btnToStep2 as HTMLButtonElement).disabled = false;

        items.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            currentSubtotal += itemTotal;

            const el = document.createElement("div");
            el.className = "cart-item";
            el.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toLocaleString("es-CO")}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="btn-minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn-plus" data-id="${item.id}">+</button>
                </div>
                <span class="item-total-price">$${itemTotal.toLocaleString("es-CO")}</span>
            `;
            itemsContainer.appendChild(el);
        });

        if (subtotalEl) subtotalEl.textContent = `$${currentSubtotal.toLocaleString("es-CO")}`;

        // Re-attach listeners
        document.querySelectorAll(".btn-minus").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const id = (e.target as Element).getAttribute("data-id");
                if (!id) return;
                const item = items.find((i) => i.id === id);
                if (item) updateCartItemQuantity(id, item.quantity - 1);
            });
        });

        document.querySelectorAll(".btn-plus").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const id = (e.target as Element).getAttribute("data-id");
                if (!id) return;
                const item = items.find((i) => i.id === id);
                if (item) updateCartItemQuantity(id, item.quantity + 1);
            });
        });
    });
}

// --- Step 2: Form ---
const form = document.getElementById("customer-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Capture data
        const name = (document.getElementById("customer-name") as HTMLInputElement).value;
        const email = (document.getElementById("customer-email") as HTMLInputElement).value;
        const phone = (document.getElementById("customer-phone") as HTMLInputElement).value;
        const address = (document.getElementById("customer-address") as HTMLInputElement).value;

        customerData = { name, email, phone, address };
        changeStep(3);
    });
}

// --- Step 3: Shipping ---

// 3a. Department Change Logic
if (shippingDepartmentSelect) {
    shippingDepartmentSelect.addEventListener("change", (e) => {
        const selectedDept = (e.target as HTMLSelectElement).value;
        const citySelect = shippingCitySelect as HTMLSelectElement;

        // Reset Cities
        citySelect.innerHTML = '<option value="">-- Selecciona una ciudad --</option>';

        if (!selectedDept) {
            citySelect.disabled = true;
            if (shippingResultDiv) shippingResultDiv.classList.add('hidden');
            if (btnToStep4) (btnToStep4 as HTMLButtonElement).disabled = true;
            return;
        }

        // Filter cities by department
        const filteredCities = CITIES.filter(c => c.department === selectedDept);

        if (filteredCities.length > 0) {
            filteredCities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.value;
                option.textContent = city.label;
                citySelect.appendChild(option);
            });
            citySelect.disabled = false;
        } else {
            const option = document.createElement('option');
            option.textContent = "No hay cobertura";
            citySelect.appendChild(option);
            citySelect.disabled = true;
        }
    });
}

// 3b. City Change Logic
if (shippingCitySelect) {
    shippingCitySelect.addEventListener("change", (e) => {
        const val = (e.target as HTMLSelectElement).value;

        if (!val) {
            if (shippingResultDiv) shippingResultDiv.classList.add('hidden');
            if (btnToStep4) (btnToStep4 as HTMLButtonElement).disabled = true;
            return;
        }

        const rate = SHIPPING_RATES.find(r => r.id === val);
        if (rate) {
            currentShippingCost = rate.price;
            if (shippingCostValue) shippingCostValue.textContent = `$${rate.price.toLocaleString("es-CO")}`;
            if (shippingResultDiv) shippingResultDiv.classList.remove('hidden');
            if (btnToStep4) (btnToStep4 as HTMLButtonElement).disabled = false;
        }
    });
}

// --- Navigation ---
if (btnToStep2) btnToStep2.addEventListener("click", () => changeStep(2));
if (btnToStep4) btnToStep4.addEventListener("click", () => {
    renderPaymentStep();
    changeStep(4);
});
if (backToStep1) backToStep1.addEventListener("click", () => changeStep(1));
if (backToStep2) backToStep2.addEventListener("click", () => changeStep(2));
if (backToStep3) backToStep3.addEventListener("click", () => changeStep(3));

// --- Step 4: Payment Render ---
async function renderPaymentStep() {
    // Elements
    const finalSubtotalEl = document.getElementById("final-subtotal");
    const finalShippingEl = document.getElementById("final-shipping");
    const finalTotalEl = document.getElementById("final-total");
    const wompiContainer = document.getElementById("wompi-container");

    if (!finalSubtotalEl || !finalShippingEl || !finalTotalEl) return;

    const total = currentSubtotal + currentShippingCost;

    finalSubtotalEl.textContent = `$${currentSubtotal.toLocaleString("es-CO")}`;
    finalShippingEl.textContent = `$${currentShippingCost.toLocaleString("es-CO")}`;
    finalTotalEl.textContent = `$${total.toLocaleString("es-CO")}`;

    // Wompi Web Checkout Integration
    if (wompiContainer) {
        wompiContainer.innerHTML = "";

        // Constants - REPLACE WITH YOUR KEYS
        const PUBLIC_KEY = "pub_test_GRGW6Ej5qnteBw7LHodvrTem7DOfDg5R";
        const INTEGRITY_SECRET = "test_integrity_bFTHYYiuZzZTYUTw6dNW3QfMF1bIUuwy"; // <--- CAMBIAR POR TU SECRETO DE INTEGRIDAD DE PRUEBAS
        const CURRENCY = "COP";

        const totalInCents = total * 100;

        // Get items for reference
        const items = cartItems.get();
        const itemSummary = items.map(i => {
            const qty = i.quantity > 1 ? `(${i.quantity})` : '';
            return `${qty}${i.name.substring(0, 15).replace(/\s+/g, '')}`;
        }).join("-");
        const reference = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}-${itemSummary}`.substring(0, 255);

        // Generate Integrity Signature (SHA256)
        // String to sign: reference + amountInCents + currency + secret
        const signatureString = `${reference}${totalInCents}${CURRENCY}${INTEGRITY_SECRET}`;
        const signature = await generateSHA256(signatureString);

        // Build Redirect URL
        const redirectUrl = new URL("https://checkout.wompi.co/p/");
        redirectUrl.searchParams.append("public-key", PUBLIC_KEY);
        redirectUrl.searchParams.append("currency", CURRENCY);
        redirectUrl.searchParams.append("amount-in-cents", totalInCents.toString());
        redirectUrl.searchParams.append("reference", reference);
        redirectUrl.searchParams.append("signature:integrity", signature);
        redirectUrl.searchParams.append("redirect-url", "https://draalejandraramirez.netlify.app/respuesta");

        // Customer Data (Optional - check if removing fixes 403 if persists)
        if (customerData.email) redirectUrl.searchParams.append("customer-data:email", customerData.email);
        if (customerData.name) redirectUrl.searchParams.append("customer-data:full-name", customerData.name);
        if (customerData.phone) {
            redirectUrl.searchParams.append("customer-data:phone-number", customerData.phone);
            redirectUrl.searchParams.append("customer-data:phone-number-prefix", "+57");
        }

        // Shipping Address
        if (customerData.address) redirectUrl.searchParams.append("shipping-address:address-line-1", customerData.address);
        redirectUrl.searchParams.append("shipping-address:country", "CO");

        if (shippingCitySelect && (shippingCitySelect as HTMLSelectElement).selectedOptions.length > 0) {
            const cityName = (shippingCitySelect as HTMLSelectElement).selectedOptions[0].text;
            redirectUrl.searchParams.append("shipping-address:city", cityName);
        }

        if (shippingDepartmentSelect) {
            const region = (shippingDepartmentSelect as HTMLSelectElement).value;
            redirectUrl.searchParams.append("shipping-address:region", region);
        }

        if (customerData.phone) {
            redirectUrl.searchParams.append("shipping-address:phone-number", customerData.phone);
        }

        // Add Pay Button
        const btn = document.createElement("button");
        btn.className = "btn-primary";
        btn.textContent = "Pagar con Wompi";
        btn.style.width = "100%";
        btn.style.marginTop = "1rem";

        btn.onclick = () => {
            window.location.href = redirectUrl.toString();
        };

        wompiContainer.appendChild(btn);
    }
}

// Helper to generate SHA256
async function generateSHA256(str: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}
