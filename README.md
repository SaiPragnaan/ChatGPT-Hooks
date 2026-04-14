# ChatGPT Hooks Extension

Long chats getting messy?
Scrolling endlessly to find one important question or response ?

This extension solves that by giving you:
> **“Bookmarks for your ChatGPT conversations”**

A lightweight browser extension that lets you **bookmark important messages** in ChatGPT conversations and quickly jump back to them.

---

## Features

* Add hooks (bookmarks) to any message 📌
* Name your hooks inline
* Sidebar to view all saved hooks
* Click a hook to scroll back instantly
* Delete hooks easily
* Hooks persist per chat

---

## Installation (Developer Mode)
Download the code zip, unzip it.

### Chrome

1. Go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select this project folder

### Firefox

1. Go to `about:debugging`
2. Click **This Firefox**
3. Click **Load Temporary Add-on**
4. Select `manifest.json`

---

## Project Structure

```
chatgpt-hooks/
│
├── manifest.json     # Extension config
├── content.js        # Core logic (DOM + hooks)
├── storage.js        # Storage abstraction (Chrome + Firefox)
├── ui.js             # Sidebar UI
├── styles.css        # Styling
```

---

## How It Works

* Injects UI into ChatGPT pages
* Detects messages dynamically
* Saves hooks using browser storage
* Associates hooks with chat URL
* Scrolls back to messages on click

---

## Current Limitations

* Uses message index → may break in very long/virtualized chats
* Works only on ChatGPT (for now)

---

## Future Improvements

* Better UI polish
* Support for Gemini / Claude
* Sync across devices

---

## Author Note

Built out of pure frustration with endless scrolling 😄

If you’ve ever lost a great answer in a long chat, this is for you.
