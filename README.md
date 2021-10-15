# START

## configuração

 - token
    vá para `config.json` e cole o token do bot. 
 - prefixo
   vá para `config.json` e cole o prefixo do bot.

## instalação
abra o terminal e rode o comando para instalar todos os packages: 
```js
npm install
```
#### sobre a database

> para criar uma nova variável, vá para `database/base_values.json` e defina o nome da chave e o seu valor **base** (caso o usuario ainda não tenha recebido essa key, ele obterá o valor base)

- **await setData("user_id", "key(nome da variavel)", "value(novo valor a atribuir)")**
   usado para setar o "valor" à "chave" de um usuário.
   exemplo:
 ```js
 await setData(message.author.id, "money", 999999)
 //define que o money do autor do comando é 999999
 //todo valor setado deve estár previamente definido em "base_values.json"  
```

- **let someData = await setData("user_id", "key(nome da variavel)")**
   usado para puxar o valor previamente definido por setData() (ou valor base).
   exemplo:
 ```js
 let meu_dindin = await getData(message.author.id, "money") //puxa o money do autor do comando. caso o usuario nunca tenha sido setado por setData(), será retornado o valor base, em "base_values.json"
message.channel.send(`${message.author.tag} tem ${meu_dindin} dinheirinhos`) //enviando seu money pro chat  
```

exemplo de "puxar, somar, setar"

```js
let meu_dindin = await getData(message.author.id, "money") //puxa o money do autor do 
meu_dindin += 900 //soma 900
//ou
meu_dindin -= 900 //subtrai 900
await setData(message.author.id, "money", meu_dindin) // seta novamente o valor alterado
```

**para baixar o bot clique no botão verde no canto superior direito(escrito "code") > download zip**


