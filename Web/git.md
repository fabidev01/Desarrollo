-----------------instalacion git---------------------
  git config --global user.name "nombre"
  git config --global user.email "email"

------------------------------------------------------
  token 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
todo esta en object el codigo
el la carpeta .git esta todo
  git log:historial de confirmaciones

  2 tipos de espacios en blanco de autocompletacion
   CR  generada por windows 
   LF  generada por windows/mac/linux

  ls    ls -a=muestra hasta los archivos ocultos
  pwd   cd   cd ..  cd .git
  git init= para iniciar el repositorio
  para remover el repositorio hay que eliminar el archivo .git
  git status= muestra el estado de nuestro repositorio
  git add= *.txt . añadir archivos si son varios archivos los puedo añadir con un espacio 
  git add . añade todos los archivos
  git commit -m "mensaje al añadir el commit"
  git commit= abre vsc para escribir el mensaje
  rm archivo.txt= eliminar un archivo del stage
  git rm archivo.txt= pero este esta listo para commitear 
  git restore= restaura a una version anterior
  git restore --staged archivo1 (rehace un cambio al stage)
  mv archivo1.txt archivo.txt(cambia el nombre del archivo)
  git mv archivo1.txt archivo.txt(lo mismo pero listo para commitear)
  crear nuevo archivo en repositorio .gitignore
  git status -s= me muestra imformacion mas precisa de los archivos(-M modificado:rojo no esta en el stage, verde esta en el stage
  -?? sin agregar  A agregado al stage listo para commitear)
  git diff(muestra los cambio especificos del archivo)
  git diff --staged(los mismo pero del stage si es q ya fue add)
  git log(muestra historial de cambios o commits)
  git log --oneline(los mismo pero solo muestra el id y el mensaje)
  git push -u origin main(para enviar el commit de la rama al servidor)
  git push -u origin ramaB(cambiar de rama y enviar la rama)
            q para salir pa
  git branch(indica la rama en la que te encuentras)
  git checkout -- . reconstruira todo al ultimo commit
  git checkout -b ramab(para crear nuevas ramas del main)
  git checkout main(para cambiar de rama)
  git checkout fichero o folder(para restaurar al ultimo commit)
  git checkout id del commit(te mandara a ese commit)
  cat archivo1.txt mostrara el contenido del archivo
  git marge ramab(desde el main para traer los cambios desde una rama)
------------------Etapas--------------------
*          STAGE
  etapa intermedia entre el repositorio y los cambios hechos
  campo donde se verifican o seleccionen nuestros cambios antes de pasarlo a un repositorio repito cambios no archivos literalmente
    -cuando queresmos eliminar un archivo debemos agregarlo aca pero como eliminado para tomar registro y eliminarlo del repositorio
*          commit
  etapa commit despues de stage
  donde se commitea los cambios
*          Server
  ultima etapa para enviar a un servidor mayormente github