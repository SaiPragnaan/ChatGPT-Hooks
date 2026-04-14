const storageAPI= typeof browser!=="undefined" ? browser.storage.local : chrome.storage.local;

function getChatID(){
    return window.location.href;
}

function getHooks(){
    const chatID=getChatID();

    return new Promise((resolve)=>{
        storageAPI.get([chatID,(result)=>{
            resolve(result[chatID] || []);
        }])
    })
}

function saveHooks(hooks){
    const chatId = getChatId();

  return new Promise((resolve) => {
    storageAPI.set({ [chatId]: hooks }, resolve);
  });
}

async function addHook(hook) {
    const hooks=await getHooks();
    hooks.push(hook);
    await saveHooks(hooks);
}