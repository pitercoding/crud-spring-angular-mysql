# 🧾 **Customer Manager App**

O **Customer Manager App** é uma aplicação **Full Stack** desenvolvida para gerenciar clientes de forma simples, moderna e eficiente. 

O projeto implementa um CRUD completo (**Create, Read, Update, Delete**) utilizando **Spring Boot** no backend e **Angular** no frontend, com integração direta via **API RESTful** e persistência de dados em **MySQL**.  

---

## 🎯 **Por que esse projeto?**

O objetivo principal deste projeto é consolidar o aprendizado e a prática de um ambiente **full stack Java + Angular**, cobrindo todas as etapas de desenvolvimento de uma aplicação moderna:

- Criação e consumo de **APIs REST**
- Uso de **componentes standalone e reativos** no Angular
- Integração entre frontend e backend
- Manipulação de dados reais em banco relacional
- Testes, boas práticas e arquitetura limpa

Este projeto também serve como um **modelo de referência** para quem deseja entender como estruturar um CRUD completo utilizando tecnologias amplamente usadas no mercado.

## 📂 **Organização do Projeto**

A estrutura geral é dividida entre **frontend** (Angular) e **backend** (Spring Boot):
```bash
customer-manager-app/
│
├── backend/
│   ├── src/main/java/com/example/customer/
│   │   ├── controller/CustomerController.java
│   │   ├── service/CustomerService.java
│   │   ├── repository/CustomerRepository.java
│   │   └── model/Customer.java
│   ├── resources/application.properties
│   └── pom.xml
│
└── frontend/
    ├── src/app/
    │   ├── components/
    │   │   ├── post-customer/
    │   │   ├── update-customer/
    │   │   └── get-all-customers/
    │   ├── service/customer.service.ts
    │   ├── model/customer.ts
    │   └── app.routes.ts
    ├── assets/
    ├── styles.css
    └── angular.json
```

## 🛠️ **Ferramentas e Tecnologias**

| Categoria | Tecnologias |
|------------|--------------|
| **Backend** | ☕ Java 17+, 🌀 Spring Boot (Web, JPA, Validation), 🌐 CORS Config |
| **Frontend** | ⚡ Angular 18+, 💻 TypeScript, 🎨 CSS3, 🧱 HTML5 |
| **Banco de Dados** | 🐬 MySQL |
| **Testes & APIs** | 🧪 Postman, ✅ HttpClientTestingModule |
| **IDE & Ferramentas** | 🧰 IntelliJ IDEA, 🧩 VSCode |

## 📷 Capturas de Tela

### 1. Criar Cliente (Post)
<img src="https://github.com/user-attachments/assets/57793174-c20f-4df3-80ac-ae48070fe465" alt="Post" width="600">

### 2. Listar Clientes (Get)
<img src="https://github.com/user-attachments/assets/d35bbdcb-ab19-4795-9f1f-16fd246d94c1" alt="get-all" width="600">

### 3. Atualizar Cliente (Update)
<img src="https://github.com/user-attachments/assets/463b466b-c02b-40d9-9754-2340d46e0dc1" alt="update" width="600">

### 4. Deletar Cliente (Delete)
<img src="https://github.com/user-attachments/assets/f93245b6-0efe-4892-8eda-97cb9e65dd41" alt="delete" width="600">

### 5. Banco de Dados MySQL
<img src="https://github.com/user-attachments/assets/0c2a1809-54c5-48ff-99a3-03ed4b7d2f1c" alt="mysql" width="600">

### 6. Postman Request
<img src="https://github.com/user-attachments/assets/c9e0d9e1-edeb-4638-8342-8559fb60431c" alt="postman" width="600">


## 🚀 **Como rodar o projeto**

### 🔧 **Pré-requisitos**

- Java 17+
- Node.js 18+
- Angular CLI instalado globalmente (`npm install -g @angular/cli`)
- MySQL em execução

### 🗄️ **1. Configurar o Banco de Dados**

Crie um banco no MySQL:

```sql
CREATE DATABASE customer_db;
```

Edite o arquivo `application.properties` no backend:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/customer_db
spring.datasource.username=root
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### ⚙️ 2. Rodar o Backend (Spring Boot)

No diretório `/backend`:
```bash
mvn spring-boot:run
```

O backend estará disponível em:
👉 `http://localhost:8080/api/customers`

### 💻 3. Rodar o Frontend (Angular)

No diretório `/frontend`:
```bash
npm install
ng serve
```

O frontend estará disponível em:
👉 `http://localhost:4200`


## 🎨 **Funcionalidades do Projeto**

O **Customer Manager App** oferece um CRUD completo com uma interface moderna e responsiva.

### ✨ **Principais Funcionalidades**

- **➕ Criar Cliente:**  
  Formulário reativo com validação e feedback visual.

- **📋 Listar Clientes:**  
  Tabela responsiva com botões de ação (Atualizar / Deletar).

- **✏️ Atualizar Cliente:**  
  Edição de dados com formulário pré-preenchido via ID.

- **❌ Deletar Cliente:**  
  Exclusão com atualização instantânea da lista.

- **🌈 Interface Moderna:**  
  - Gradiente roxo-rosado de fundo (`#654ea3 → #eaafc8`)  
  - Tipografia *Inter*  
  - Botões com hover e foco  
  - Layout centralizado e responsivo  

## 🧩 **Principais Commits & Evolução**

- **Initial commit:** Estrutura base frontend + backend  
- **feat:** Setup completo do CRUD com rotas, formulários e integração com API  
- **refactor:** Criação do modelo `Customer` em TypeScript e ajustes em `CustomerService`  
- **fix:** Corrigido problema de visibilidade do formulário e provider HTTP global  
- **style:** Adição de gradientes, tipografia moderna e responsividade  
- **feat:** Implementação de endpoints GET, POST, PUT, DELETE no Spring Boot  
- **feat:** Integração total com o Angular (GetAll, Post, Update, Delete)  
- **style(ui):** Padronização dos estilos e melhoria da usabilidade  

## 🧠 **Aprendizados Técnicos**

Durante o desenvolvimento deste projeto foram aplicadas diversas boas práticas:

- Uso de **componentes standalone** no Angular  
- **Reactive Forms** com validação e patch de dados  
- Testes unitários com **HttpClientTestingModule**  
- Integração REST entre **Angular e Spring Boot**  
- Configuração de **CORS** e rotas dinâmicas  
- Estilização moderna e **UX responsiva**

## 📜 **Licença**

Este projeto está sob a licença **MIT**. 

Você é livre para usar, modificar e distribuir este código, desde que mantenha os créditos originais.

## 🤝 **Contribuições**

Contribuições são muito bem-vindas!  
Para colaborar:

1. Faça um fork do repositório  
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`  
3. Commit suas alterações seguindo o padrão **Conventional Commits**  
4. Envie um Pull Request 🚀  

## 👨‍💻 **Autor**

**Piter Gomes**  
Desenvolvedor Full Stack em formação.

📧 **Email:** [piterg.bio@gmail.com](mailto:piterg.bio@gmail.com)  
💼 **LinkedIn:** [linkedin.com/in/piter-gomes-4a39281a1](https://www.linkedin.com/in/piter-gomes-4a39281a1/)  
🌐 **Portfólio:** [my-portfolio-flame-mu-xxis8wes4p.vercel.app](https://my-portfolio-flame-mu-xxis8wes4p.vercel.app/)

