#             PASOS PARA TRABAJAR CON GIT Y GITHUB

##            CONFIGURAR USUARIO DE GIT REMOTO 

  git config --global user.name "nombre"
  git config --global user.email "email"
  git config --global -e (muestra todo el contenido)
-------------------------------------------------
-     TOKEN PARA EL REPO DE DESARROLLO

*         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


--------------------------------------------------


  - En la carpeta .git esta todo y para remover el repositorio tenemos que eliminarlo 
##    COMANDOS BASICOS PARA TRABAJAR CON GIT Y GITHUB
  - git init = para iniciar el repositorio
  - git status= muestra el estado de nuestro repositorio
  - git add= *.txt || . || .txt1 .txt2 .txt3 
  - git commit -m "mensaje al añadir el commit"
  - git log = historial de commits
  - git restore= restaura a una version anterior

##               Etapas

###          Stage

  etapa intermedia entre el repositorio y los cambios hechos
  campo donde se verifican o seleccionen nuestros cambios antes de pasarlo a un repositorio repito cambios no archivos literalmente
  cuando queremos eliminar un archivo debemos agregarlo aca pero como eliminado para tomar registro y eliminarlo del repositorio
###          Commit
  etapa commit despues de stage donde se commitea los cambios

###          Server

  ultima etapa para enviar a un servidor mayormente github

##    COMANDOS ADICIONALES

  - git rm archivo.txt= pero este esta listo para commitear 
  - git restore --staged archivo1 (rehace un cambio al stage)
  - git mv archivo1.txt archivo.txt(lo mismo pero listo para commitear)
  - git status -s= me muestra imformacion mas precisa de los archivos(-M modificado:rojo no esta en el stage, verde esta en el stage
  - git diff(muestra los cambio especificos del archivo)
  - git diff --staged(los mismo pero del stage si es q ya fue add)
  - git log --oneline(los mismo pero solo muestra el id y el mensaje)
  - git push -u origin main(para enviar el commit de la rama al servidor)
  - git push -u origin ramaB(cambiar de rama y enviar la rama)
  - git branch(indica la rama en la que te encuentras)
  - git checkout -- . reconstruira todo al ultimo commit
  - git checkout -b ramab(para crear nuevas ramas del main)
  - git checkout main(para cambiar de rama)
  - git checkout fichero o folder(para restaurar al ultimo commit)
  - git checkout id del commit(te mandara a ese commit)
  - git marge ramab(desde el main para traer los cambios desde una rama)

##             .gitignore

  - se puede crear un archivo .gitignore para omitir dichos arhivos
  - para ficheros con el mismo nombre en cualquier sitio
* **/ nombre del fichero
