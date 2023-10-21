#!/bin/bash

USR='devops'

for host in `cat remhosts`
do
        echo "#############################"
        echo "connecting and pushing script to $host"
        scp multios_websetup.sh $USR@$host:/tmp/
        echo "executing script on $host"
        ssh $USR@$host sudo /tmp/multios_websetup.sh
        ssh $USR@$host sudo rm -rf /tmp/multios_websetup.sh
        echo "#############################"
        echo
done