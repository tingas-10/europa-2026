/* ===== Iconos de línea minimalistas por destino ===== */
const ICONS = {
  london: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="27" y="8" width="10" height="42" rx="1"/>
    <line x1="20" y1="50" x2="44" y2="50"/>
    <line x1="32" y1="8" x2="32" y2="4"/>
    <line x1="27" y1="16" x2="37" y2="16"/>
    <line x1="27" y1="24" x2="37" y2="24"/>
    <line x1="27" y1="32" x2="37" y2="32"/>
    <circle cx="32" cy="40" r="2.2"/>
    <path d="M20 50 L20 56 L44 56 L44 50"/>
  </svg>`,
  mykonos: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="26" r="5"/>
    <path d="M32 21 L48 10 M32 21 L52 26 M32 21 L46 40 M32 21 L18 38 M32 21 L14 22"/>
    <line x1="32" y1="31" x2="32" y2="50"/>
    <path d="M22 56 C22 48 42 48 42 56 Z"/>
  </svg>`,
  puglia: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 12 C24 22 24 30 32 34 C40 30 40 22 32 12 Z"/>
    <line x1="32" y1="34" x2="32" y2="52"/>
    <path d="M32 22 C26 22 22 18 20 14"/>
    <path d="M32 28 C38 28 42 24 44 20"/>
    <line x1="18" y1="52" x2="46" y2="52"/>
  </svg>`,
  roma: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <line x1="10" y1="46" x2="54" y2="46"/>
    <path d="M14 46 V30 A4 4 0 0 1 22 30 V46"/>
    <path d="M24 46 V30 A4 4 0 0 1 32 30 V46"/>
    <path d="M34 46 V30 A4 4 0 0 1 42 30 V46"/>
    <path d="M44 46 V30 A4 4 0 0 1 50 30 V46"/>
    <line x1="10" y1="24" x2="54" y2="24"/>
  </svg>`,
  paris: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 8 L20 52 M32 8 L44 52"/>
    <path d="M25 30 L39 30"/>
    <path d="M22 40 L42 40"/>
    <line x1="14" y1="52" x2="50" y2="52"/>
    <path d="M27 20 L37 20"/>
  </svg>`,
  madrid: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="32" r="8"/>
    <line x1="32" y1="10" x2="32" y2="16"/>
    <line x1="32" y1="48" x2="32" y2="54"/>
    <line x1="10" y1="32" x2="16" y2="32"/>
    <line x1="48" y1="32" x2="54" y2="32"/>
    <line x1="16" y1="16" x2="20" y2="20"/>
    <line x1="44" y1="44" x2="48" y2="48"/>
    <line x1="48" y1="16" x2="44" y2="20"/>
    <line x1="20" y1="44" x2="16" y2="48"/>
  </svg>`,
  plane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 3 L10.5 10 L2 13 L2 15 L10.5 13.2 L10.5 18 L8 20 L8 21.4 L12 20.4 L16 21.4 L16 20 L13.5 18 L13.5 13.2 L22 15 L22 13 L13.5 10 L13.5 3 Z"/></svg>`,
  train: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="4"/><line x1="5" y1="10" x2="19" y2="10"/><circle cx="9" cy="13.5" r="0.6" fill="currentColor"/><circle cx="15" cy="13.5" r="0.6" fill="currentColor"/><path d="M8 16 L6 21 M16 16 L18 21"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16 L5.5 10 C6 8.5 7 8 9 8 H15 C17 8 18 8.5 18.5 10 L20 16"/><rect x="2.5" y="16" width="19" height="4" rx="1.5"/><circle cx="7" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18 V8"/><path d="M3 13 H21 V18"/><path d="M3 13 V10 A2 2 0 0 1 5 8 H10 A2 2 0 0 1 12 10 V13"/><path d="M12 13 V11 A2 2 0 0 1 14 9 H19 A2 2 0 0 1 21 11 V13"/><path d="M21 18 V15"/></svg>`,
};

/* ===== Ruta del hero ===== */
document.getElementById("hero-route").textContent = TRIP.route.join("  ·  ");

/* ===== Pendientes ===== */
const pendingGrid = document.getElementById("pending-grid");
PENDING.forEach(p => {
  const card = document.createElement("div");
  card.className = "pending-card";
  card.innerHTML = `
    <div class="pending-icon">${ICONS.plane.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" width="20" height="20"')}</div>
    <div>
      <h3>${p.title}</h3>
      <p>${p.detail}</p>
    </div>
  `;
  pendingGrid.appendChild(card);
});

/* ===== Timeline ===== */
const tagIcon = { vuelo: "plane", tren: "train", traslado: "car", estadia: "bed", llegada: "plane" };
const timeline = document.getElementById("timeline");
ITINERARY.forEach(day => {
  const row = document.createElement("div");
  row.className = `timeline-row accent-${day.accent}`;
  row.innerHTML = `
    <div class="timeline-date">${day.date}</div>
    <div class="timeline-dot-col"><span class="timeline-dot"></span><span class="timeline-line"></span></div>
    <div class="timeline-content">
      <div class="timeline-city">
        <span class="timeline-icon">${ICONS[tagIcon[day.tag]] || ""}</span>
        ${day.city}
      </div>
      <p class="timeline-note">${day.note}</p>
    </div>
  `;
  timeline.appendChild(row);
});

/* ===== Destinos ===== */
const destGrid = document.getElementById("dest-grid");
DESTINATIONS.forEach(d => {
  const card = document.createElement("div");
  card.className = `dest-card accent-${d.accent}`;
  const statusBadge = d.status === "confirmado"
    ? `<span class="badge badge-ok">Confirmado</span>`
    : `<span class="badge badge-alert">Sin reservar</span>`;

  card.innerHTML = `
    <div class="dest-icon">${ICONS[d.icon]}</div>
    <div class="dest-head">
      <h3>${d.city}</h3>
      <span class="dest-country">${d.country}</span>
    </div>
    <p class="dest-dates">${d.dates}</p>
    ${statusBadge}
    <p class="dest-name">${d.name}</p>
    ${d.detail ? `<p class="dest-detail">${d.detail}</p>` : ""}
    ${d.extra ? `<p class="dest-detail">${d.extra}</p>` : ""}
    <div class="dest-meta">
      ${d.platform ? `<span class="chip">${d.platform}</span>` : ""}
      ${d.code ? `<span class="chip chip-code">${d.code}</span>` : ""}
      ${d.cost ? `<span class="chip chip-cost">${d.cost}</span>` : ""}
    </div>
    ${d.footnote ? `<p class="dest-footnote">⚠ ${d.footnote}</p>` : ""}
  `;
  destGrid.appendChild(card);
});

/* ===== Vuelos y trenes ===== */
const transportList = document.getElementById("transport-list");
TRANSPORTS.forEach(t => {
  const isTrain = t.detail.toLowerCase().includes("tren");
  const row = document.createElement("div");
  row.className = `transport-card accent-${t.accent}`;
  row.innerHTML = `
    <div class="transport-icon">${ICONS[isTrain ? "train" : "plane"]}</div>
    <div class="transport-body">
      <div class="transport-top">
        <h3>${t.route}</h3>
        <span class="transport-cost">${t.cost}</span>
      </div>
      <p class="transport-who">${t.who} · ${t.when}</p>
      <p class="transport-detail">${t.detail}</p>
      <div class="dest-meta">
        <span class="chip">${t.platform}</span>
        <span class="chip chip-code">${t.code}</span>
      </div>
    </div>
  `;
  transportList.appendChild(row);
});

/* ===== Gastos ===== */
const expensesBody = document.querySelector("#expenses-table tbody");
let total = 0;
EXPENSES.forEach(e => {
  total += e.cost;
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${e.item}</td><td class="num">USD ${e.cost.toLocaleString("es-AR")}</td>`;
  expensesBody.appendChild(tr);
});

document.getElementById("expenses-total").innerHTML = `
  <span>Total pagado hasta ahora</span>
  <strong>USD ${total.toLocaleString("es-AR")}</strong>
`;

document.getElementById("expenses-pending").innerHTML = `
  <h4>Todavía falta sumar</h4>
  <ul>${EXPENSES_PENDING.map(x => `<li>${x}</li>`).join("")}</ul>
`;

/* ===== Nav activo al hacer scroll ===== */
const sections = document.querySelectorAll("main .section");
const navLinks = document.querySelectorAll(".nav a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove("active"));
      const link = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (link) link.classList.add("active");
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach(s => observer.observe(s));
