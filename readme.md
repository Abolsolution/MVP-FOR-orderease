# Multi-Café QR-Based Online Menu System

A Laravel-based web application that allows multiple cafés to manage and display their menus online. Each café gets a unique QR code that customers can scan to view the menu without logging in. This system isolates each café’s data, ensuring customers only see the menu for the scanned café.

---

## 🧾 Features

### For Café Owners
- Register and manage café details.
- Create, update, and delete menu items.
- Automatically generate a unique QR code per café.
- Secure login (optional) to manage menus.

### For Customers (QR Scan)
- View-only public menu for each café via QR code.
- Clean, mobile-friendly UI with café branding.
- No login or authentication required.

### Admin Dashboard (Optional)
- Add and manage cafés.
- Regenerate QR codes.
- View all cafés and their menus (if permissions allow).

---

## 📦 Tech Stack

- **Backend**: Laravel 10+
- **Frontend**: HTML, CSS (custom or framework-based by frontend team)
- **Database**: MySQL / PostgreSQL
- **QR Code**: [Simple QrCode package](https://github.com/SimpleSoftwareIO/simple-qrcode)




