# Node.js HTTPS Server Setup

This `README.md` Markdown file shows you how to create SSL/TLS certificates using OpenSSL, set up an HTTPS server in Node.js, and run it locally. It provides a comprehensive guide to set up an HTTPS server with a self-signed certificate using Node.js on a Windows system.

## First of All you need

- **Node.js** and **OpenSSL** installed on your system.

### 1: Install OpenSSL on Windows

1. Download OpenSSL from the [OpenSSL for Windows website](https://slproweb.com/products/Win32OpenSSL.html).
2. After installation, add the path to the OpenSSL `bin` folder (e.g., `C:\Program Files\OpenSSL-Win64\bin`) to your Windows system `Environment Variables`.
3. Open a new Command Prompt and type `openssl version`.
4. If installed correctly, it will display the version of OpenSSL.

### Step 2: Create SSL Certificates

1. **Generate a Private Key:**

   openssl genrsa -out key.pem 2048

2. **Create a Certificate Signing Request (CSR):**

   openssl req -new -key key.pem -out csr.pem

When prompted, fill out the required fields. For Common Name (e.g., server FQDN or YOUR name), use localhost.

3. **Create a Self-Signed Certificate:**
   openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

This will create a certificate valid for 365 days.

### Step 3: Create and Run the Node.js HTTPS Server

1. node index.js // PORT 8080

2. node index-https.js // PORT 443
3. node redirect-index.js // PORT 8080 (DO NTO FORGET TO KILL THE FIRST TERMINAL!)

### Troubleshooting and Additional Notes

1. If you see a message that your connection is not private, click advanced, then proceed to site.
2. If you want to avoid the warning, consider obtaining a certificate from a trusted certificate authority like Let's Encrypt.
3. The server will listen on port 8080 by default. Ensure no other service is running on this port.
