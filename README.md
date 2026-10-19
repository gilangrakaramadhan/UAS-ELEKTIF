# E-Library Perpustakaan IBM ASMI

Aplikasi Web Perpustakaan Digital & Sirkulasi Peminjaman Buku IBM ASMI dibangun dengan React 19, TypeScript, Tailwind CSS, dan Vite.

---

## 🚀 Panduan Menjalankan di Visual Studio Code (VS Code)

### 1. Prasyarat (Prerequisites)
Pastikan di komputer/laptop Anda sudah terpasang:
- **Node.js** versi 18 atau 20+ (Download di [nodejs.org](https://nodejs.org))
- **Visual Studio Code** (Download di [code.visualstudio.com](https://code.visualstudio.com))
- Terminal bawaan (Git Bash / PowerShell / Command Prompt / Terminal macOS/Linux)

---

### 2. Unduh & Buka Project di VS Code
1. Unduh file project ini (melalui tombol Download/Export ZIP di Google AI Studio atau `git clone`).
2. Ekstrak file ZIP jika diunduh dalam bentuk arsip.
3. Buka **Visual Studio Code**.
4. Klik **File** > **Open Folder...** lalu pilih folder project ini.

---

### 3. Buka Terminal di VS Code
- Tekan shortcut: ``Ctrl + ` `` (Windows) atau ``Cmd + ` `` (Mac).
- Atau klik menu atas: **Terminal** > **New Terminal**.

---

### 4. Install Dependencies
Jalankan perintah berikut di terminal VS Code:

```bash
npm install
```
*(Tunggu hingga proses instalasi library selesai dan folder `node_modules` terbuat).*

---

### 5. Konfigurasi Environment (Opsional)
Jika menggunakan fitur AI Gemini:
1. Duplikat file `.env.example` dan ubah namanya menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
2. Isi `GEMINI_API_KEY` jika diperlukan dengan API Key Anda dari [Google AI Studio](https://aistudio.google.com).

---

### 6. Jalankan Server Pengembangan (Dev Server)
Jalankan perintah:

```bash
npm run dev
```

Setelah server aktif, terminal akan menampilkan URL lokal:
```text
  VITE v8.3.0  ready in ... ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://...
```

Klik tautan tersebut atau buka browser Anda (Chrome / Edge / Firefox) dan ketik:
👉 **`http://localhost:3000`**

---

### 7. Perintah Berguna Lainnya

- **Build untuk Produksi:**
  ```bash
  npm run build
  ```
- **Pratinjau Hasil Build:**
  ```bash
  npm run preview
  ```
- **Cek Tipe TypeScript:**
  ```bash
  npm run lint
  ```
