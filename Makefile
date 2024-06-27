
GREEN = /bin/echo -e "\x1b[32m\#\# $1\x1b[0m"
RED = /bin/echo -e "\x1b[31m\#\# $1\x1b[0m"

# Fonction pour afficher des messages colorés
define color_echo
    @$(call $(1), $(2))
endef

# ----- Programs -----


init: ## Initialize project
	$(MAKE) install-router



## -------- SYMFONY COMMAND --------
install-router:
	npm install react-router-dom
