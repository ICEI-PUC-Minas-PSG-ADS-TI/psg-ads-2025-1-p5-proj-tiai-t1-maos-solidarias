## 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da solução


......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

 Inclua um diagrama da solução e descreva os módulos e as tecnologias
 que fazem parte da solução. Discorra sobre o diagrama.
 
 **Exemplo do diagrama de Arquitetura**:
 
 ![Exemplo de Arquitetura](./images/arquitetura-exemplo.png)
 

### 4.2. Protótipos de telas

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).
Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a>.
A partir das atividades de usuário identificadas na seção anterior, elabore o protótipo de tela de cada uma delas.
![Exemplo de Wireframe](images/wireframe-example.png)

São protótipos usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.
 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)


## Diagrama de Classes

![ChatGPT Image Apr 21, 2025, 01_59_02 PM](https://github.com/user-attachments/assets/d3de306d-4acf-4aaa-a950-24113a965c04)

## Modelo ER

![image](https://github.com/user-attachments/assets/11e0f161-5c01-40ac-b6c1-c884b12a419a)

### 4.3. Modelo de dados

![image](https://github.com/user-attachments/assets/982c9988-f6c0-4eb5-b707-3aed82783dbc)

#### 4.3.1 Modelo ER


![image](https://github.com/user-attachments/assets/11e0f161-5c01-40ac-b6c1-c884b12a419a)


#### 4.3.2 Esquema Relacional

![image](https://github.com/user-attachments/assets/8a84193a-bc0f-471d-a838-6d0e9cc96bc6)


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

