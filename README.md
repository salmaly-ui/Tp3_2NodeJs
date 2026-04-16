# 📦 crud-express-mysql

## 🚀 Application full-stack Node.js (Express + MySQL + EJS)

Application web CRUD permettant de gérer une liste de produits.  
Le projet utilise **Express.js**, **MySQL** et **EJS** pour le rendu côté serveur.

---

## 🧰 Stack technique

- Runtime : Node.js
- Framework : Express.js
- Base de données : MySQL (mysql2)
- Template engine : EJS
- Frontend : HTML / CSS (Bootstrap 5 + thème violet)
- Architecture : MVC

---

## 🎥 Démonstration

🔗 Vidéo :  

---

## 📁 Structure du projet
```
crud-express-mysql/
├── controllers/
│   └── productController.js
├── models/
│   └── productModel.js
├── routes/
│   └── productRoutes.js
├── views/
│   ├── layouts/
│   │   └── layout.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── products/
│       ├── index.ejs
│       ├── create.ejs
│       ├── edit.ejs
│       └── details.ejs
├── public/
│   └── css/
│       └── style.css
├── .env
├── app.js
└── package.json
```
---

## ⚙️ Prérequis

- Node.js ≥ 18
- npm ≥ 9
- MySQL ≥ 8

---

## 📥 Installation

### 1. Cloner le projet

git clone https://github.com/salmaly-ui/Tp3_2NodeJs.git 
cd crud-express-mysql  

---

### 2. Installer les dépendances

npm install  

---

### 3. Configurer le fichier .env

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=  
DB_NAME=crud_app  
PORT=3000  

---

### 4. Créer la base de données

CREATE DATABASE crud_app;

USE crud_app;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

---

##  Lancement du projet

### Mode développement
npx nodemon app.js  

### Mode production
node app.js  

Application disponible sur :  
http://localhost:3000  

---

##  Routes

GET     /                 → Accueil  
GET     /products         → Liste des produits  
GET     /products/create  → Formulaire ajout  
POST    /products         → Ajouter produit  
GET     /products/:id     → Détails produit  
GET     /products/:id/edit → Formulaire modification  
POST    /products/:id/edit → Modifier produit  
POST    /products/:id/delete → Supprimer produit  

---

##  CRUD

Create → INSERT INTO products  
Read   → SELECT * FROM products  
Update → UPDATE products  
Delete → DELETE FROM products  

---


##  UI / Design

- Bootstrap 5
- Thème violet moderne 
- Boutons arrondis avec animation
- Tableau interactif (hover)
- Responsive design (mobile + desktop)

---

##  Architecture MVC

- Model → gestion base de données  
- View → EJS (interface utilisateur)  
- Controller → logique métier  

---

##  Améliorations possibles

- Authentification (login/admin)
- Upload d’images produits
- API REST (JSON)
- Pagination
- Recherche / filtre
- Dashboard admin
- Déploiement (Render / Railway)

---

## 📦 Dépendances

express  
mysql2  
ejs  
dotenv  
express-ejs-layouts  
nodemon  

---

##  Auteur

**Salma Laouy**  
Étudiante en 3ème année Informatique  
École Normale Supérieure - Marrakech  

---

