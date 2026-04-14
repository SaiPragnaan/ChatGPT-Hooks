function createSidebar() {
  if (document.getElementById("hook-sidebar")) return;

  const sidebar = document.createElement("div");
  sidebar.id = "hook-sidebar";

  sidebar.innerHTML = `
    <h3>📌 Hooks</h3>
    <div id="hook-list"></div>
  `;

  document.body.appendChild(sidebar);

  refreshHooksUI();
}

async function refreshHooksUI() {
  const hooks = await getHooks();
  const list = document.getElementById("hook-list");

  if (!list) return;

  list.innerHTML = "";

  hooks.forEach((hook) => {
    const item = document.createElement("div");
    item.className = "hook-item";
    item.innerText = hook.label;

    item.onclick = () => scrollToHook(hook);

    list.appendChild(item);
  });
}