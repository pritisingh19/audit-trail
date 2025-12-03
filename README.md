 Mini Audit Trail Generator

A full-stack web application that tracks text version history by detecting added and removed words using a custom diff algorithm. Built for the Full-Stack Intern Originality Task.

---

 Live Links
Frontend: https://audit-trail-2hgndxa58-flobits-projects-1520648e.vercel.app/
Backend: https://audit-trail-wsye.onrender.com/
GitHub Repo: https://github.com/pritisingh19/audit-trail

---

 Overview
Users can type or edit text, save versions, and view an audit history. Each saved version includes:
- Added words
- Removed words
- Old length
- New length
- UUID
- Timestamp

---

 Tech Stack
Frontend: React / Vite / Next.js, Axios  
Backend: Node.js, Express.js, UUID  
Storage: JSON file or In-memory array  

---

 Features
- Clean Content Editor  
- “Save Version” button  
- Version History panel  
- Custom diff logic (no libraries)  
- REST API (GET/POST)  
- Timestamp + UUID  
- Clean and simple UI  

---

 API Endpoints
POST /save-version
Request:
{
  "newText": "updated text here"
}

 GET /versions
Returns all saved versions.

---

 Diff Logic Summary
1. Convert both old and new text into word arrays  
2. Compare arrays to find:  
   - Added words  
   - Removed words  
3. Count word lengths  
4. Generate UUID + timestamp  
5. Save version entry

Example version object:
{
  "id": "uuid",
  "timestamp": "2025-11-26 13:40",
  "oldLength": 10,
  "newLength": 15,
  "addedWords": ["hello"],
  "removedWords": ["test"]
}

---
 Folder Structure
project/
│── frontend/
│── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── versions.json
└── README.md

---
 How to Run Locally
 
 Backend
cd backend  
npm install  
node server.js

 Frontend
cd frontend  
npm install  
npm run dev  

 Deployment
Frontend (Vercel)  
Build: `npm run build`  
Output: `dist` or `.next`

Backend (Render)  
Build: `npm install`  
Start: `node server.js`

---

 Evaluation Requirements Met
- Full-stack integration  
- Custom diff algorithm  
- Working deployment  
- Clean folder structure  
- Original logic  
- UUID + timestamps  

---
 Author
Priti Singh 
Full-Stack Developer  
Email: preetisinghps019@gmail.com 

