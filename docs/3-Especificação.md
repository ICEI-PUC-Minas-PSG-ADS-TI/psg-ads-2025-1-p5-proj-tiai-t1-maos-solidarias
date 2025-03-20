
# 3. Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="2-Planejamento-Projeto.md"> Planejamento do Projeto do Software (Cronograma) </a></span>

> Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição das histórias de usuários, dos requisitos funcionais e não funcionais além das restrições do projeto.

> Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## 3.1 Classificação dos Requisitos Funcionais x Requisitos não Funcionais 

> Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

> - **[Requisitos Funcionais (RF)]**(https://pt.wikipedia.org/wiki/Requisito_funcional): correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
> - **[Requisitos Não Funcionais (RNF)]**(https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).

> Lembre-se que cada requisito deve corresponder à uma e somente uma característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.


### a) Modifique os quadros abaixo, inserindo os Requisitos Funcionais e Não Funcionais do seu projeto. 

Lembre-se de classificá-los de acordo com a prioridade: ALTA, MÉDIA ou BAIXA.

### Requisitos Funcionais

|ID    | Descrição do Requisito                  | Prioridade |
|------|-----------------------------------------|------------|
|RF-001| Permitir que o usuário cadastre tarefas |    ALTA    | 
|RF-002| Emitir um relatório de tarefas no mês   |    MÉDIA   |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|-----------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel |    MÉDIA  | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s             |    BAIXA  | 



### b) Modifique o Quadro abaixo e insira as Restrições para o seu projeto.

O projeto está restrito pelos itens apresentados na tabela a seguir.

## Restrições

|ID| Restrição                                               |
|--|---------------------------------------------------------|
|01| O software deve ser compatível com Windows e Linux.     |
|02| O sistema deve ser desenvolvido utilizando Java e MySQL.|

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
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|  xxxx              | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|  yyy               | Alterar permissões                 | Permitir que possam administrar contas |




> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)


-------------------------------------------------------------------------------------------------------------------------------------------

## Tarefas Técnicas (Tasks)

### Tarefas iniciais

✅ Configurar ambiente de desenvolvimento
❌ Instalar dependências do backend (frameworks, ORM, banco de dados, etc.)
❌ Instalar dependências do frontend (bibliotecas UI, roteamento, estado global, etc.)

✅ Configurar banco de dados
❌ Criar modelo de dados inicial para ONGs, doadores e doações
❌ Configurar conexão com banco de dados

✅ Autenticação e Login
❌ Criar a interface de login(modal com dois campos - email e senha - e um botão)
❌ Criar validações para verificar as entradas de dados(email e senha informados?)
❌ Exibir mensagens de campo não informação quando as verificações falharem.
❌ Desenvolver endpoint que vai verificar no nosso banco se o login e senha correspondem
❌ Desenvolver lógica para após 3 tentativas incorretas impossibilitar o usuário de continuar tentando.

✅ Implementar autenticação JWT
❌ Gerar token JWT para usuários autenticados
❌ Configurar middleware para verificar tokens em requisições protegidas

✅ Criar sistema de recuperação de senha
❌ Criar tela para solicitar recuperação de senha
❌ Implementar envio de e-mail com link para redefinir senha
❌ Criar tela de redefinição de senha

🔹 Cadastro e Gerenciamento de ONGs
✅ Criar a interface de cadastro de ONGs

❌ Criar formulário com campos: nome, CNPJ, descrição, área de atuação, site, telefone, endereço

✅ Criar a página de perfil da ONG

❌ Exibir informações cadastradas da ONG
❌ Adicionar botão para editar perfil



> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
