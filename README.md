# Azure-Web-App
Web Application Deployment using Azure App Service with Database &amp; CI/CD Pipeline


# 🚀 Web Application Deployment using Azure App Service with Database & CI/CD

## 🧪 Project Overview

This project demonstrates how to:

* Build a simple web application (Node.js / Python / .NET)
* Connect it to a database (Azure SQL / MySQL)
* Deploy it using a CI/CD pipeline with GitHub Actions
* Host it on Azure App Service

---

## 🏗️ Architecture

```
Developer (GitHub)
        │
        ▼
 CI/CD Pipeline (GitHub Actions)
        │
        ▼
 Azure App Service (Web App)
        │
        ▼
 Azure Database (SQL / MySQL)
        │
        ▼
      Users 🌐
```

---

## 🔧 Tech Stack

* Microsoft Azure
* Azure App Service
* Azure SQL Database / MySQL
* GitHub (CI/CD)
* Node.js / Python / .NET

---

## 🚀 Step-by-Step Implementation

### 🔹 Step 1: Create Resource Group

```bash
az group create --name myRG --location centralindia
```

---

### 🔹 Step 2: Create Azure SQL Database

```bash
az sql server create \
  --name mysqlserver \
  --resource-group myRG \
  --location centralindia \
  --admin-user azureuser \
  --admin-password ***

az sql db create \
  --resource-group myRG \
  --server mysqlserver \
  --name mydb \
  --service-objective S0
```

#### 👉 Allow Firewall Access

* Go to Azure Portal
* Navigate to SQL Server
* Add your client IP under **Networking → Firewall rules**

---

### 🔹 Step 3: Create App Service

```bash
az appservice plan create \
  --name myPlan \
  --resource-group myRG \
  --sku B1 \
  --is-linux

az webapp create \
  --resource-group myRG \
  --plan myPlan \
  --name myapp123 \
  --runtime "NODE|20-lts"
```

---

### 🔹 Step 4: Prepare Application Code

#### 👉 Example (Node.js)

```javascript
const express = require('express');
const sql = require('mssql');

const app = express();

app.get('/', async (req, res) => {
    res.send("App running with DB connection");
});

app.listen(3000);
```

---

### 🔹 Step 5: Add Database Connection

Go to:

**App Service → Environment Variables → App Settings**

Add:

* `DB_HOST`
* `DB_USER`
* `DB_PASSWORD`
* `DB_NAME`

---



---

### 🔹 Step 6: Configure CI/CD (GitHub Actions)

1. Go to **App Service**
2. Open **Deployment Center**
3. Select:

   * Source → GitHub
   * Repository & Branch
4. Save

👉 This automatically creates a GitHub Actions workflow.

---

### 🔹 Step 7: Verify Deployment

Open:

```
https://myapp123.azurewebsites.net
```

✔ Your application should be live

---

## 🔐 Security Best Practices

* ✔ Store secrets in App Settings (Environment Variables)
* ✔ Enable HTTPS Only (App Service → TLS/SSL settings)
* ✔ Use Managed Identity for secure DB access (Advanced)
* ✔ Restrict database firewall rules

---


