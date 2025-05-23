
# 3. Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="2-Planejamento-Projeto.md"> Planejamento do Projeto do Software (Cronograma) </a></span>

Para o desenvolvimento deste projeto, realizamos um levantamento detalhado dos requisitos utilizando uma variedade de técnicas e ferramentas, garantindo uma compreensão abrangente das necessidades dos usuários e das expectativas dos stakeholders. As principais ferramentas e métodos utilizados incluem:

## Ferramentas e Métodos Utilizados

### Formulários
Foram elaborados e distribuídos formulários para coletar informações quantitativas e qualitativas de potenciais usuários do sistema, incluindo ONGs e doadores. Esses formulários nos permitiram identificar padrões de comportamento, necessidades específicas e expectativas em relação à plataforma.

### Entrevistas
Realizamos entrevistas individuais e em grupo com representantes de ONGs, doadores e outros stakeholders relevantes. Essas entrevistas proporcionaram insights valiosos sobre as dores, desafios e desejos dos usuários, além de permitir uma compreensão mais profunda dos processos atuais de doação e captação de recursos.

### Observações
A observação direta do comportamento de ONGs e doadores em situações reais de doação e captação de recursos nos ajudou a identificar pontos de melhoria e oportunidades de inovação que não foram mencionados nas entrevistas ou formulários.

### Análise de Documentos
Analisamos documentos internos de ONGs, relatórios de doações, políticas de captação de recursos e outros materiais relevantes. Essa análise nos permitiu entender os processos existentes, as regulamentações envolvidas e as lacunas que o sistema pode preencher.

### Prototipagem utilizando Figma
Desenvolvemos protótipos de alta e baixa fidelidade utilizando a ferramenta Figma. Esses protótipos foram essenciais para visualizar e testar a usabilidade da interface, permitindo ajustes iterativos com base no feedback dos usuários.

### Casos de Uso
Elaboramos casos de uso detalhados para mapear as interações entre os diferentes tipos de usuários (ONGs, doadores, administradores) e o sistema. Isso nos ajudou a garantir que todas as funcionalidades necessárias fossem consideradas e que o sistema atendesse às expectativas de todos os envolvidos.

### Reuniões com Stakeholders
Realizamos reuniões regulares com os stakeholders do projeto, incluindo representantes de ONGs, doadores, equipe de desenvolvimento e outros interessados. Essas reuniões foram cruciais para alinhar expectativas, validar requisitos e garantir que o desenvolvimento do sistema estivesse alinhado com os objetivos do projeto.

## Priorização dos Requisitos
Com base nesse levantamento, priorizaremos os requisitos por ordem de dificuldade de implementação, considerando fatores como complexidade técnica, impacto no usuário, tempo de desenvolvimento e dependências entre funcionalidades.

## 3.1 Classificação dos Requisitos Funcionais x Requisitos não Funcionais 

### Requisitos Funcionais

|ID    | Descrição do Requisito                  | Prioridade |
|------|-----------------------------------------|------------|
|RF-001| Permitir que ONGs se cadastrem na plataforma e criem um perfil com informações básicas.	 |    ALTA    | 
|RF-002| Permitir que ONGs editem as informações do seu perfil.|    ALTA   |
|RF-003| Permitir que doadores se cadastrem na plataforma.|    ALTA   |
|RF-004| Exibir um perfil detalhado de cada ONG, com informações sobre causas e projetos.|    ALTA   |
|RF-005| Permitir que doadores escolham como desejam contribuir (valores, frequência, etc.). |    ALTA   |
|RF-006| Oferecer uma funcionalidade de doação online segura.  |    MÉDIA   |
|RF-007| Permitir que administradores validem o cadastro de ONGs antes de torná-las visíveis. |    MÉDIA   |
|RF-008| Permitir que administradores monitorem as avaliações de doadores sobre as ONGs. |    ALTA   |
|RF-009| Permitir que doadores deixem feedback e avaliações sobre as ONGs que apoiaram.|    MÉDIA   |
|RF-010| Gerar relatórios automáticos sobre o uso dos fundos doados, disponíveis para doadores. |    BAIXA   |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|-----------|
|RNF-001| Garantir que todas as transações financeiras sejam seguras e estejam em conformidade com normas de proteção de dados (ex.: LGPD, GDPR). |    ALTA  | 
|RNF-002| Proteger os dados dos usuários com criptografia e práticas de segurança recomendadas.           |    ALTA  |
|RNF-003| A interface deve ser intuitiva e fácil de usar para ONGs, doadores e administradores. |    ALTA  | 
|RNF-004| O sistema deve ser capaz de lidar com um grande número de usuários simultaneamente.            |    ALTA  |
|RNF-005| Garantir que o sistema esteja disponível 24/7, com tempo de inatividade mínimo. |    ALTA  | 
|RNF-006| Implementar backups regulares para evitar perda de dados.             |    MEDIA  |
|RNF-007| A plataforma deve ser acessível, seguindo as diretrizes da WCAG. |    MEDIA  | 
|RNF-008| Integrar gateways de pagamento confiáveis (ex.: PayPal, Stripe, PagSeguro).	  |    ALTA  |
|RNF-009| Implementar um processo robusto de validação de ONGs para garantir legitimidade. |    MÉDIA  | 
|RNF-010| Oferecer um sistema de suporte ao usuário para ajudar em caso de dúvidas ou problemas.         |    BAIXA  |


## Restrições

|ID| Restrição                                               |
|--|---------------------------------------------------------|
|01| O software deve ser compatível com Windows e Linux.     |
|02| O sistema deve ser desenvolvido utilizando HTML, CSS, React, JS e C#|
|03| O sistema deve utilizar um banco de dados relacional (SQL)|
|04| O sistema deve Seguir normas legais para garantir a privacidade e segurança dos usuários.|
|05| O sistema deve Garantir que a plataforma seja acessível em diferentes dispositivos.|
|06| O código-fonte deve ser versionado utilizando Git e hospedado em uma plataforma como GitHub ou GitLab.|
|07| O sistema deve ser documentado, incluindo manuais de uso.|

**Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.**

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)



## 3.2 Histórias de Usuários
> Apresente aqui as histórias de usuário que são RELEVANTES para o projeto de sua solução. É esperado que haja pelo menos 10 histórias de usuário, dependendo do projeto escolhido para desenvolver.

**OBS:** Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

### a) Modifique o Quadro abaixo e insira as histórias de usuários para o seu projeto.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|        ONG         |   Me cadastrar na plataforma       | Criar um perfil com informações sobre a minha organização e projetos em andamento|
|        ONG         | Editar as informações do meu perfil| Manter os doadores informados sobre as atualizações|
|       Doador       |   Me cadastrar na plataforma       | Visualizar e escolher quais ONGs apoiar|
|       Doador       |Visualizar um perfil detalhado de cada ONG| Entender melhor as causas e as ações de cada organização|
|       Doador       |   Escolher como desejo contribuir  |  Fazer uma doação|
|    Administrador  |Validar o cadastro das ONGs antes que elas se tornem visíveis para os doadores| Garantir que todas as organizações na plataforma sejam legítimas|
|     Administrador  | Monitorar as avaliações de doadores sobre as ONGs| Garantir que as organizações cumpram com seus compromissos|
|       Doador       | Deixar feedback e avaliações sobre as ONGs que apoiei|  Ajudar outros doadores a escolherem quais causas apoiar|
|       Doador       | Visualizar relatórios automáticos sobre o uso dos fundos que doei| Acompanhar de forma transparente como as minhas doações estão sendo aplicadas|
|       Doador       | Realizar uma doação online de forma segura| Contribuir com as causas sociais de minha escolha de forma simples|




> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)


-------------------------------------------------------------------------------------------------------------------------------------------

## Tarefas Técnicas (Tasks)

Legenda:
- ✔️: terminado
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado

### Tarefas iniciais

## Configurar ambiente de desenvolvimento
- ❌ Instalar dependências do backend (frameworks, ORM, banco de dados, etc.)
- ❌ Instalar dependências do frontend (bibliotecas UI, roteamento, estado global, etc.)

## Configurar banco de dados
- ❌ Criar modelo de dados inicial para ONGs, doadores e doações
- ❌ Configurar conexão com banco de dados

## Autenticação e Login
- ❌ Criar a interface de login(modal com dois campos - email e senha - e um botão)
- ❌ Criar validações para verificar as entradas de dados(email e senha informados?)
- ❌ Exibir mensagens de campo não informação quando as verificações falharem.
- ❌ Desenvolver endpoint que vai verificar no nosso banco se o login e senha correspondem
- ❌ Desenvolver lógica para após 3 tentativas incorretas impossibilitar o usuário de continuar tentando.

## Implementar autenticação JWT
- ❌ Gerar token JWT para usuários autenticados
- ❌ Configurar middleware para verificar tokens em requisições protegidas

## Criar sistema de recuperação de senha
- ❌ Criar tela para solicitar recuperação de senha
- ❌ Implementar envio de e-mail com link para redefinir senha
- ❌ Criar tela de redefinição de senha

## Criar a interface de cadastro de ONGs

- ❌ Criar formulário com campos: nome, CNPJ, descrição, área de atuação, site, telefone, endereço

## Criar a página de perfil da ONG

- ❌ Exibir informações cadastradas da ONG
- ❌ Adicionar botão para editar perfil



> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
