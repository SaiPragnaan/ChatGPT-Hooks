function createSidebar() {
  if (document.getElementById("hook-sidebar")) return;

  const sidebar = document.createElement("div");
  sidebar.id = "hook-sidebar";
  sidebar.classList.add("collapsed");

  sidebar.innerHTML = `
    <div id="hook-header">
      <span>📌 Hooks</span>
      <button id="hook-menu-btn">☰</button>
    </div>
    <div id="hook-list"></div>
  `;

  document.body.appendChild(sidebar);

  const overlay = document.createElement("div");
  overlay.id = "hook-overlay";
  document.body.appendChild(overlay);

  const floatingBtn = document.createElement("button");
  floatingBtn.id = "hook-floating-btn";
  floatingBtn.innerText = "☰";
  document.body.appendChild(floatingBtn);

  function openSidebar() {
    sidebar.classList.remove("collapsed");
    overlay.classList.add("active");
    floatingBtn.style.display = "none";

    document.getElementById("hook-menu-btn").innerText = "✕";
  }

  function closeSidebar() {
    sidebar.classList.add("collapsed");
    overlay.classList.remove("active");
    floatingBtn.style.display = "flex";

    document.getElementById("hook-menu-btn").innerText = "☰";
  }

  floatingBtn.onclick = openSidebar;
  document.getElementById("hook-menu-btn").onclick = closeSidebar;
  overlay.onclick = closeSidebar;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });

  refreshHooksUI();
}

async function refreshHooksUI() {
    const hooks = await getHooks();
    const list = document.getElementById("hook-list");

    if (!list) return;

    list.innerHTML = "";

    hooks.forEach((hook, index) => {
        const item = document.createElement("div");
        item.className = "hook-item";

        const label = document.createElement("span");
        label.innerText = hook.label;

        const del = document.createElement("button");
        del.innerText = "❌";
        del.className = "delete-btn";

        del.onclick = async (e) => {
            e.stopPropagation();

            hooks.splice(index, 1);
            await saveHooks(hooks);
            refreshHooksUI();
        };

        item.appendChild(label);
        item.appendChild(del);

        item.onclick = () => scrollToHook(hook);

        list.appendChild(item);
    });
}
