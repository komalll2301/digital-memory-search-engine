# Digital Memory Search Engine

Field Project (UCSFP301) – B.Tech AI & Data Science, Sanjay Ghodawat University, Kolhapur.

A privacy-first, browser-based search engine for personal files. Select files or a folder, ask in natural language, and get answers with source evidence.

**Live demo:** <paste your GitHub Pages link here>

## Features
- Index TXT, MD, CSV, PDF, DOCX and images (OCR)
- BM25 ranked retrieval over text chunks
- Source-linked evidence snippets with highlighted matches
- No-evidence response when nothing relevant is found
- Privacy guardrails: credentials are never indexed, credential queries are refused
- Runs fully in the browser: files never leave the device
- Revoke access / clear index at any time

## Tech
HTML, CSS, JavaScript, pdf.js, mammoth.js, Tesseract.js

## Run locally
Open `index.html` in Chrome. No installation needed.

## Future scope
Semantic search with embeddings, RAG answers with a local LLM, desktop agent for background folder monitoring, Android companion app.

## Team
Prateek Arote, Shubhangi Rathod, Komal, Jui Nagane. Guide: Mr. Aditya Kshirsagar.
