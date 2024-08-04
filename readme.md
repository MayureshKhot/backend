Chai aur backend 4.15 hrs onwards.

.gitkeep is used to push the empty folders on the github, cos git won't push empty folders usually.
.gitignore will prevent the confidential files. you can also use gitignore generator

nodemon: It will restart the server as soon as the file is saved, other wise you will have restart the server everytime you save something.

dev dependecy: is a dependecy that is only used in development but not in production.

utils (folder): it is a folder where all the utility code that is repeated is kept in files. Like mail, etc.

prettier plugin from npm website: cos it is used to define standard of code. you can set settings so that sab log ek jesa syntax follow kare.
- here you will have to manually add the file .prettierrc where you can define the settings
- You can read it's documentation
- Just like git, here is also .prettierignore file, that contains the files you want to ignore such as .env, node_modules, etc. files, cos it's syntax is different

## Mongodb atlas setup from 4.48(around)

### Remember:
1. You will face problems when connecting with database, therefore always wrap code in **Try and Catch**
2. Database is always in another continent. Therefore time lagega and hence always use **Async and Await**
   