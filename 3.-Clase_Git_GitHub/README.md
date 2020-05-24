# Configurar herramientas
Configura la información del usuario para todos los respositorios locales
--

`$ git config --global user.name "[name]"`

Establece el nombre que estará asociado a tus commits

`$ git config --global user.email "[email address]"`

Establece el e-mail que estará asociado a sus commits

___

# Crear repositorios
Inicializa un nuevo repositorio u obtiene uno de una URL existente
--
`$ git init [project-name]`

Crea un nuevo repositorio local con el nombre especificado

`$ git clone [url]`

Descarga un proyecto y toda su historial de versiones


# El archivo .gitgnore 

A veces puede ser una buena idea excluir archivos de
rastreado con Git. Esto normalmente se hace en un archivo especial llamado
 .gitignore. Puedes encontrar plantillas útiles para .gitignore
archivos en github.com/github/gitignore.

 

# Efectuar cambios
Revisa cambios y crea un commit
--
`$ git status`

Enumera todos los archivos nuevos o modificados de los cuales se van a guardar cambios

`$ git diff`

Muestra las diferencias entre archivos que no se han enviado aún al área de espera

`$ git add [file]`

Guarda el estado del archivo en preparación para realizar un commit

`$ git diff --staged`

Muestra las diferencias del archivo entre el área de espera y la última versión del archivo

`$ git reset [file]`

Mueve el archivo del área de espera, pero preserva su contenido

`$ git commit -m"[descriptive message]"`

Registra los cambios del archivo permanentemente en el historial de versiones

# Cambios grupales
Nombra una serie de commits y combina esfuerzos ya completados
--

`$ git branch`

Enumera todas las ramas en el repositorio actual

`$ git branch [branch-name]`

Crea una nueva rama



`$ git branch -av`
Muestra todas las ramas, local y remoto


`$ git checkout [branch-name]`

Cambia a la rama especificada y actualiza el directorio activo

`$ git merge [branch-name]`

Combina el historial de la rama especificada con la rama actual

`$ git branch -d [branch-name]`

Borra la rama especificada



# Repasar historial
Navega e inspecciona la evolución de los archivos de proyecto
--
`$ git log`

Enumera el historial de versiones para la rama actual

`$ git log --follow [file]`

Enumera el historial de versiones para el archivo, incluidos los cambios de nombre

`$ git diff [first-branch]...[second-branch]`

Muestra las diferencias de contenido entre dos ramas

`$ git show [commit]`

Produce metadatos y cambios de contenido del commit especificado


# Rehacer commits
Borra errores y elabora un historial de reemplazo
--
`$ git reset [commit]`

Deshace todos los commits después de [commit], preservando los cambios localmente

`$ git reset --hard [commit]`

Desecha todo el historial y regresa al commit especificado


# Sincronizar cambios
Registrar un marcador para un repositorio e intercambiar historial de versiones
--
`$ git fetch [bookmark]`

Descarga todo el historial del marcador del repositorio

`$ git merge [bookmark]/[branch]`

Combina la rama del marcador con la rama local actual

`$ git push [alias] [branch]`

Sube todos los commits de la rama local a GitHub

`$ git pull`

Descarga el historial del marcador e incorpora cambios






![image](https://user-images.githubusercontent.com/32286800/80853124-cc5a3880-8bf3-11ea-9cf7-505f4da30d1a.png)
