## 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da solução


Nossa solução vai ser uma página Web desenvolvida utilizando HTML, JS e React. Contamos com o C# para o desenvolvimeto do back-end que vai ligar o nosso banco de dados SQL com nosso sistema. A hospedagem será feita no próprio Github
 
![image](https://github.com/user-attachments/assets/606a5dfb-132e-4f1e-bd91-e84100e24cc5)

 

### 4.2. Protótipos de telas

Home page do site:

![image](https://github.com/user-attachments/assets/9b5058cc-a0c2-426a-ac85-3e4de02e1c6f)
![image](https://github.com/user-attachments/assets/58188d91-f59e-48ca-bf39-31fa9ba3d988)
![image](https://github.com/user-attachments/assets/ef3a861e-2587-4ded-8853-63fb40cf48b5)
![image](https://github.com/user-attachments/assets/8591c93b-80eb-4bd7-b342-ef31c607c19e)

Tela de cadastro de ONG:

![image](https://github.com/user-attachments/assets/b071b3a5-0ea2-4157-9608-a7282b7447c9)
![image](https://github.com/user-attachments/assets/fdd8b9c2-fad5-4f3e-88fc-3106be2595ac)
![image](https://github.com/user-attachments/assets/00973dbf-81ca-4ebd-a9b4-2e373a5418c5)

Página principal de ONG logada:

Tela de Perfil da ONG:

Solicitação de doação:

## Diagrama de Classes

![ChatGPT Image Apr 21, 2025, 01_59_02 PM](https://github.com/user-attachments/assets/d3de306d-4acf-4aaa-a950-24113a965c04)

## Modelo ER

![image](https://github.com/user-attachments/assets/11e0f161-5c01-40ac-b6c1-c884b12a419a)

### 4.3. Modelo de dados

![image](https://github.com/user-attachments/assets/982c9988-f6c0-4eb5-b707-3aed82783dbc)

#### 4.3.1 Modelo ER


![image](https://github.com/user-attachments/assets/11e0f161-5c01-40ac-b6c1-c884b12a419a)


#### 4.3.2 Esquema Relacional

![image](https://github.com/user-attachments/assets/340bfbf2-2ed4-4a3c-ad7a-d4a64763587b)


#### 4.3.3 Modelo Físico

-- Tabela ONG
CREATE TABLE ONG (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Endereco VARCHAR(255),
    Contato VARCHAR(50)
);

-- Tabela Doador
CREATE TABLE Doador (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Endereco VARCHAR(255),
    TipoDoacaoPreferencial VARCHAR(50)
);

-- Tabela Projeto
CREATE TABLE Projeto (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NomeProjeto VARCHAR(100) NOT NULL,
    Descricao TEXT,
    ONG_ID INT,
    FOREIGN KEY (ONG_ID) REFERENCES ONG(ID)
);

-- Tabela Doacao
CREATE TABLE Doacao (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    DataDoacao DATE NOT NULL,
    Valor DECIMAL(10, 2) NOT NULL,
    Doador_ID INT,
    Projeto_ID INT,
    FOREIGN KEY (Doador_ID) REFERENCES Doador(ID),
    FOREIGN KEY (Projeto_ID) REFERENCES Projeto(ID)
);

-- Tabela Feedback
CREATE TABLE Feedback (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Comentario TEXT,
    Avaliacao INT CHECK (Avaliacao BETWEEN 1 AND 5),
    DataFeedback DATE NOT NULL,
    Doador_ID INT,
    ONG_ID INT,
    FOREIGN KEY (Doador_ID) REFERENCES Doador(ID),
    FOREIGN KEY (ONG_ID) REFERENCES ONG(ID)
);




### 4.4. Tecnologias

Para desenvolver o site Mãos Solidárias, será utilizada uma combinação de tecnologias modernas que garantem segurança e uma experiência inutitiva e clara para o usuário final. A seguir, estão listadas todas as tecnologias envolvidas na implementação da solução:


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | MySQL           |
| Front end      | React.js (JavaScript, HTML5, CSS3)    |
| Back end       | C# com .NET + JavaScript |
|IDE| Visual Studio Code|
| Controle de Versão         | Github Classroom    |
| Metodologia | Scrum |
|Hospedagem | Azure |

