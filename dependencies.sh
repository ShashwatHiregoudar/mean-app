echo "SHashsawt Scrippt"
echo " "
echo " "
echo " "
echo " "
echo " "
echo "Installing Mongobd"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo apt-get install -y mongodb


echo "Now Installing Node "
echo "Now Installing Node "
echo "Now Installing Node "
echo "Now Installing Node "
sudo apt-get install -y python-software-properties
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs -y
echo "############################################################################################################################################################################################## "
echo "############################################################################################################################################################################################## "
echo "############################################################################################################################################################################################## "
echo "############################################################################################################################################################################################## "
echo "############################################################################################################################################################################################## "
echo " This may take a while  "

echo " "

echo "Now installing angular "
echo " "
echo " "
echo " "
echo " "
echo " "
npm install -g @angular/cli
