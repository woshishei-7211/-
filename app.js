const grid = document.querySelector("#product-grid");
const dialog = document.querySelector("#product-dialog");
const dialogContent = document.querySelector("#dialog-content");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderProducts() {
  grid.innerHTML = window.PRODUCTS.map((product, index) => `
    <article class="product-card">
      <button class="product-open" type="button" data-product="${escapeHTML(product.id)}" aria-label="查看${escapeHTML(product.name)}详情">
        <span class="product-visual ${escapeHTML(product.color)}"><span class="visual-number">0${index + 1}</span><span class="visual-symbol">${escapeHTML(product.symbol)}</span><span class="visual-caption">${escapeHTML(product.category)}</span></span>
        <span class="product-info"><span class="product-category">${escapeHTML(product.category)}</span><span class="product-name">${escapeHTML(product.name)} <span aria-hidden="true">↗</span></span><span class="product-summary">${escapeHTML(product.summary)}</span></span>
      </button>
      <a class="card-download" href="${escapeHTML(product.download)}" download>${escapeHTML(product.downloadLabel)} <span aria-hidden="true">↓</span></a>
    </article>`).join("");
}

function showProduct(id) {
  const product = window.PRODUCTS.find(item => item.id === id);
  if (!product) return;
  dialogContent.innerHTML = `
    <p class="eyebrow">${escapeHTML(product.category)} · ${escapeHTML(product.version)}</p>
    <h2 id="dialog-title">${escapeHTML(product.name)}</h2>
    <p class="dialog-lead">${escapeHTML(product.description)}</p>
    <div class="detail-columns"><section><h3>产品特点</h3><ul>${product.features.map(feature => `<li>${escapeHTML(feature)}</li>`).join("")}</ul></section><section><h3>适用场景</h3><p>${escapeHTML(product.useCases)}</p></section></div>
    <a class="button button-dark dialog-download" href="${escapeHTML(product.download)}" download>${escapeHTML(product.downloadLabel)} <span aria-hidden="true">↓</span></a>
    <p class="file-note">${escapeHTML(product.fileType)} · 示例文件，可替换为实际资料</p>`;
  dialog.showModal();
}

grid.addEventListener("click", event => {
  const trigger = event.target.closest("[data-product]");
  if (trigger) showProduct(trigger.dataset.product);
});
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
renderProducts();
