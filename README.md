# 🚗 Consulta Veicular FIPE

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/Henriquelss/consulta-veicular-fipe/blob/main/LICENSE)
[![GitHub Pages Deploy](https://img.shields.io/github/deployments/henriquelss/consulta-veicular-fipe/github-pages?label=deploy)](https://henriquelss.github.io/consulta-veicular-fipe/)

![image](https://github.com/user-attachments/assets/5ba202c5-db3f-41a5-a5a8-350ba87496fd)

Uma aplicação web moderna e responsiva para consultar o valor de mercado de veículos brasileiros de acordo com a Tabela FIPE. O projeto foi desenvolvido com foco em boas práticas de **React**, **componentização** e uma **experiência de usuário fluida**.


## 📜 Sobre o Projeto

O objetivo deste projeto é oferecer uma **interface limpa, intuitiva e responsiva** onde o usuário pode consultar o **valor FIPE** de um veículo de forma **rápida e precisa**. 

Através de seleções em cascata, o usuário escolhe a **marca**, o **modelo** e o **ano** do veículo para obter informações detalhadas, incluindo:

- Valor de mercado atualizado
- Código FIPE
- Mês de referência

Além de ser uma ferramenta funcional, este projeto foi criado como **case de estudo** para aplicar conceitos avançados de **React**, como:

- Hooks customizados
- Gerenciamento de estado complexo
- Integração com APIs externas

---

## ✨ Funcionalidades Principais

✅ **Seleção em Cascata**  
Seletores em cascata (Marca ➔ Modelo ➔ Ano) que filtram as opções em tempo real.

✅ **Busca em Tempo Real**  
Os dados são buscados dinamicamente de uma API pública a cada interação do usuário.

✅ **Interface Responsiva**  
Layout adaptável a celulares, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

| Categoria             | Tecnologias                          |
|-----------------------|---------------------------------------|
| **Frontend**          | React.js, TypeScript                  |
| **Estilização**       | Tailwind CSS                          |
| **Build Tool**        | Vite                                   |
| **API**               | [FIPE API - Parallelum](https://deividfortuna.github.io/fipe/) |
| **Deploy**            | GitHub Pages                          |
| **Controle de Versão**| Git & GitHub                           |

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos:
- Node.js (versão 18 ou superior)
- npm ou yarn
- Bash ou terminal compatível

### Passo a Passo:

```bash
# 1. Clone o repositório
git clone https://github.com/Henriquelss/consulta-veicular-fipe.git

# 2. Acesse o diretório do projeto
cd consulta-veicular-fipe

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
