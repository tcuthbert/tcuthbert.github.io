sudo -E docker run --name gh-page -d \
	-p $(docker-machine ip default):8080:80 gh-page-img
