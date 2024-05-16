# Entrega Teste 2024 EngWeb Luiz Rodrigues

## Ex1

### 1.1 Setup

dataset.csv -> dataset.json

com o meu container docker para a utilização do mongoDB tendo o nome mongoEW

passos para fazer import do ficheiro para o mongoDB

```bash
docker start mongoEW
docker cp dataset.json mongoEW:/tmp
docker exec -it mongoEW bash
mongoimport -d contratos -c contratos /tmp/dataset.json --jsonArray
mongosh
```

### 1.2(Queries)

#### 1.2.1

Q: Quantos registos estão na base de dados?

A: db.contratos.find().count() ; 34986

#### 1.2.2

Q: Quantos registos de contratos têm o tipo de procedimento com valor "Ajuste Direto Regime Geral"?

A: db.contratos.find({tipoprocedimento:'Ajuste Direto Regime Geral'}).count() ;
16470

#### 1.2.3

Q: Qual a lista de entidades comunincantes(ordenada alfabeticamente e sem repetições)

A: db.contratos.distinct("entidade_comunicante") ; resultado muito grande para pôr no ficheiro

#### 1.2.4

Q: Qual a distribuição de contratos por tipo de procedimento (quantos contratos tem cada tipo de procedimento)

A:

```javascript
db.contratos.aggregate([
  {
    $group: {
      _id: "$tipoprocedimento",
      count: { $sum: 1 }
    }
  }
])
```

#### 1.2.5

Q: Qual o montante global por entidade comunicante (somatório dos contratos associados a uma entidade) ?

A:

```javascript
db.contratos.aggregate([
  {
    $group: {
      _id: "$entidade_comunicante",
      totalMontante: { $sum: { $toDouble: "$precoContratual" } }
    }
  }
])
```

### 1.3 API de dados

Utilizando o pacote mongoose é possível realizar conexões com o mongoDB. OS resultados obtidos ao buscar os valores da base de dados serão colocados no corpo da página no formato JSON

Para executar a API deve-se correr os seguintes comandos:

```bash
cd ex1/app
npm i
npm start
```

## Ex2

Para buscar as informações relevantes para este exercício deve-se utilizar o pacote axios que vai buscar as informações à nossa API de dados

Para executar o servidor deve-se correr os seguintes comandos:

```bash
cd ex2/server
npm i
npm start
```
