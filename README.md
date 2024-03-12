# Full Stack Todo List

## 🚀 Iniciando

Estas instruções permitirão que você obtenha uma cópia funcional do projeto em sua máquina local para fins de desenvolvimento e teste.

### 🔧 Instalação para front

```bash
cd front

npm install

npm run start
```

### 🔧 Instalação para backend

Arquivo .env api utilizado do site Weather Bit
```bash
API_KEY_WEATHERBIT=""
```
Iniciando:
```bash
cd backend

npm install

npm run start
```

## Documentação da API

#### Cadastrar uma tarefa
```http
  POST /tasks
```
| Corpo   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório** |

#### Atualizar uma tarefa
```http
  PUT /tasks/:id
```
| Corpo   | Tipo       |
| :---------- | :--------- 
| `title` | `string` |  
| `status` | `string` | 

#### Deleta uma tarefa
```http
  DELETE /tasks/:id
```

#### Busca diversas tarefas
```http
  GET /tasks
```


#### Busca uma tarefa
```http
  GET /tasks/:id
```


#### Inicializar preenchimento formulario - RPA
```http
  POST /auto-form
```

#### exibir a previsão do tempo
```http
  GET /weather-forecast?lat={lat}&long={long}
```
| Query   | Tipo       |
| :---------- | :--------- 
| `lat` | `string` |  
| `long` | `string` | 

## ✒️ Authors

[nivaldeir](https://github.com/nivaldeir).

---
⌨️ with ❤️ per [nivaldeir](https://github.com/Nivaldeir) 😊
