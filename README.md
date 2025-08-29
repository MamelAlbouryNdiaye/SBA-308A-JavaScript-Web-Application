# SBA-308A-JavaScript-Web-Application
#Quran Science Explorer

An interactive web app that allows users to explore **Quranic verses** related to scientific topics (*water*, *universe*, *mountains*).  
It uses the public [Quran.com API](https://quran.api-docs.io/) to fetch verses, display translations, support pagination, and save favorites.

---

## Features

1. **Keyword Search**  
   Example: enter `water` to display relevant verses in arabe for now. I'm working on the translation in English and in French

2. **Translations Support**  
   - English (Sahih International) → ID `131`  
   - French (Hamidullah) → ID `149`  
   (you can change this in `api.js`)

3. **Pagination**  
   Results are displayed in pages of 5 verses.

4. **Favorites**  
   Save verses using a mock backend (`jsonplaceholder.typicode.com`) with a `POST` request.

5. **Modular Architecture**  
   - `api.js` → API communication  
   - `ui.js` → rendering results  
   - `main.js` → user interactions and events  

6. **Tech Stack**
   - **HTML5**, **CSS3**, **JavaScript (ES Modules)**  
   - **fetch API** with `async/await`  
   - External API: [Quran.com](https://quran.api-docs.io/)

---
