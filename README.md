Esse sistema foi desenvolvido para a atividade do módulo de NFT (Non-Fungible Tokens) do MBA em blockchain e criptoativos pela UNICAP que estou cursando. A equipe escolheu desenvolver uma coleção de NFTs destinada à animais de estimação em situação de rua, onde 100% do valor arrecadado será transferido para uma instituição que cuida desses animais.

Saiba mais entrando no site:  https://charity-pets.vercel.app.

### O projeto consiste em:

* Contrato Inteligente padrão ERC-721, responsável pela criação de cada um dos itens da coleção de 50 NFTs de animais de estimação.
    O smart contrato está armazenado na rede Polygon em (por o polygonscan aqui).

    Foram utilizados as seguintes ferramentas:

    * Hardhat: Ferramenta que torna possível criar o contrato inteligente em uma blockchain local, automatizar processos de compilação e deploy do contrato, verificação do contrato no etherscan, upload de arquivos no IPFS, testes e muito mais.

    * Pinata: Pinata facilita o armazenando de arquivos no IPFS, tirando a necessidade de ter um node próprio para armazenar os arquivos (imagens e metadados dos NFTS) do projeto.

    * Ethers: Biblioteca que permite consultar dados e executar funções da blockchain e a carteira do usuário utilizando Javascript.

* Aplicação front-end desenvolvido em React contendo toda a explicação do projeto e permite usuários interagirem com o contrato inteligente e mintarem até 3 NFTs por carteira.

## Rodando o projeto localmente:

Entre na pasta smart_contract:
> cd smart_contract

Primeiramente, deve fazer implementar o contrato inteligente em uma blockchain local:
> yarn hardhat node

Em caso de sucesso, será criado um arquivo em artifacts/contracts/CharityPets.sol/CharityPets.json, esse arquivo contém a abi (Application Binary Interface), um mapeamento das funções e parâmetros do contrato inteligente que está armezado como binário na blockchain, o frontend precisa desse arquivo para saber como interagir com o contrato. 
Copie e cole esse arquivo dentro do projeto frontend:
> cp artifacts/contracts/CharityPets.sol/CharityPets.json ../frontend/src/contract/CharityPets.json

Após isso, é necessário dizer para o frontend qual é o endereço do contrato recém criado, para isso, copie o endereço que foi exibido no terminal no processo do deploy, esse endereço normalmente está após o 'deployed to: {address}' e se parece com isso `0x35F3F61b485b165A3D366161a342BeDb0a5F0511`.
Encontrado o endereço, adicione-o na variável ambiente `REACT_APP_CONTRACT_ADDRESS` localizado em `../frontend/.env`.

Agora basta rodar o projeto frontend executando:
> cd ../frontend && npm start

Com isso, você deve ser capaz de executar e interagir com o contrato inteligente armazenado em sua blockchain local.
