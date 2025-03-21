
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
|RF-002| Proteger os dados dos usuários com criptografia e práticas de segurança recomendadas.|    ALTA   |
|RF-003| A interface deve ser intuitiva e fácil de usar para ONGs, doadores e administradores.|    ALTA   |
|RF-004| O sistema deve ser capaz de lidar com um grande número de usuários simultaneamente.|    ALTA   |
|RF-005| Garantir que o sistema esteja disponível 24/7, com tempo de inatividade mínimo. |    ALTA   |
|RF-006| Implementar backups regulares para evitar perda de dados.  |    MÉDIA   |
|RF-007| A plataforma deve ser acessível, seguindo as diretrizes da WCAG. |    MÉDIA   |
|RF-008| Integrar gateways de pagamento confiáveis (ex.: PayPal, Stripe, PagSeguro). |    ALTA   |
|RF-009| Implementar um processo robusto de validação de ONGs para garantir legitimidade.|    MÉDIA   |
|RF-010| Oferecer um sistema de suporte ao usuário para ajudar em caso de dúvidas ou problemas. |    BAIXA   |




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
