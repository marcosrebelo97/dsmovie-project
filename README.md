<h2 align="center">:tv: <br/> Catálogo de Filmes</h2>

  - ### Descrição:
    O projeto consiste em uma plataforma web de filmes. A página permite a interação do usuário por meio de avaliações dos filmes, possível avaliar cada filme entre 1 a 5 entrelas.
  
  - ### Tabela de Conteúdos:
    - [Modelo de Domínio](#modelo-de-domínio)
    - [Arquitetura de Software](#arquitetura-de-software)
    - [Instruções de Execução](#instruções-de-execução)
    - [Tecnologias Utilizadas](#tecnologias-utilizadas)
    - [Contribuição](#contribuição)

  - ### Modelo de Domínio
    Este é o modelo de domínio para o projeto, foi construído utilizando a ferramenta de modelagem Astah, na versão gratuíta Community, nele é possível visualizar as tabelas, atributos, relacionamentos, cardinalidades e chaves primárias.

    ![image](https://github.com/marcosrebelo97/dsmovie-project/assets/37541973/b0917015-1fe8-48dc-910f-e637de7915be)
  
  - ### Arquitetura de Software
    A arquitetura do projeto segue o seguinte padrão de camadas abaixo.

    ![padrão-camadas](https://github.com/marcosrebelo97/dsmovie-project/assets/37541973/de383280-b218-4909-af90-ed97385e6bba)

  - ### Instruções de Execução
    
    - Pré-requisitos:
      - [Git](https://git-scm.com)
      - [Node.js](https://nodejs.org/en/)
      - Java (JDK 11)

    #### 💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.
    
    - Execução:
    
      ``` bash
      # Clonar repositório - SSH
      git clone git@github.com:marcosrebelo97/dsmovie-project.git
              
      # Acessar pasta do projeto
              cd dsmovie
              
      # Acessar a pasta back-end
              cd backend
  
      # Instalar as dependências do Maven
              mvn install

      # Abra a pasta em uma IDE Java (Intellij, por exemplo)
      # Executar o arquivo `DsmovieApplication.java`
          
      # Acessar a pasta do projeto front-end
              cd frontend
      
      # Instalar as dependências
              npm install
      
      # Inicializando o front-end
              npm run start
      ```

    ## Tecnologias Utilizadas
    #### No desenvolvimento do back-end e a API REST:
    - Java (JDK 11);
    - Spring Boot
    - Spring Data JPA
    - Spring Boot Web
    - Spring Boot Security
    - Maven
    - MySQL;
    - Para testes das requisições: [Postman](https://www.postman.com/c).
    #### No desenvolvimento do front-end e consumação da API:
    - TypeScript;
    - ReactJS.
    #### Implantação em produção:
    - Back-end: Heroku;
    - Front-end web: Netlify;
    - Banco de Dados: PostgreSQL  

  ## Colaborador 

  <table>
    <tr>
      <td align="center">
        <a href="#">
          <img src="https://avatars.githubusercontent.com/u/37541973?s=400&u=9ed58a58d32f6314db5f27fc52e7086130cd4e12&v=4" width="100px;" alt="Marcos Guerreiro Rebelo Profile Picture"/><br>
          <sub>
            <b>Marcos Guerreiro Rebelo</b>
          </sub>
        </a>
      </td>
    </tr>
  </table>
___

  - ### Contribuição:
    Este projeto faz parte dos meus estudos práticos sobre back-end, então, ficarei contente se você me fornecer algum feedback sobre o projeto, código, estrutura ou qualquer coisa que você possa relatar que possa me tornar um desenvolvedor melhor.

    E-mail: [marcosrebelo9@gmail.com](https://mail.google.com/mail/u/0/#inbox)

    Conecte-se comigo no [Linkedln](https://www.linkedin.com/in/marcos-guerreiro-rebelo/)
