const storageAPI = typeof browser !== "undefined" ? browser.storage.local : chrome.storage.local;

function getChatId() {
    const url = new URL(window.location.href);
    return url.pathname;
}

function getHooks() {
    const chatId = getChatId();

    return new Promise((resolve) => {
        storageAPI.get(chatId, (result) => {
        resolve(result[chatId] || []);
        });
    });
}

function saveHooks(hooks) {
    const chatId = getChatId();

    return new Promise((resolve) => {
        storageAPI.set({ [chatId]: hooks }, resolve);
    });
}

async function addHook(hook) {
    const hooks = await getHooks();
    hooks.push(hook);
    console.log("Adding hook:", hook);
    console.log("Chat ID:", getChatId());
    await saveHooks(hooks);
}