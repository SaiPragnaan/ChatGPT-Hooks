console.log("Hook extension running");

function getMessages() {
  return document.querySelectorAll('[data-message-author-role]');
}

function injectButtons() {
  const messages = getMessages();

  messages.forEach((msg, index) => {
    if (msg.querySelector(".hook-btn")) return;

    const btn = document.createElement("button");
    btn.innerText = "📌";
    btn.className = "hook-btn";

    btn.onclick = async () => {
      const label = prompt("Hook name:");
      if (!label) return;                      //// Emptied one also try

      const hook = {
        id: Date.now(),
        label,
        text: msg.innerText.slice(0, 100),
        index
      };

      await addHook(hook);
      refreshHooksUI();
    };

    msg.appendChild(btn);
  });
}

function scrollToHook(hook) {
  const messages = getMessages();
  const target = messages[hook.index];

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  } else {
    alert("Message not found. Scroll up first.");
  }
}

function init() {
  createSidebar();
  injectButtons();
}

setInterval(init, 2000);

let lastUrl = location.href;

function detectPageChange() {
  const currentUrl = location.href;

  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;

    console.log("Chat changed");

    setTimeout(() => {
      refreshHooksUI();
      injectButtons();
    }, 1000);
  }
}

setInterval(detectPageChange, 1000);