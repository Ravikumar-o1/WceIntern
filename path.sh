
readFile(){
	while read line
	do
		echo "$line"
	done < "$1"
}


traverseDirectory(){
    for fileName in `ls $1/`
    do

		if [ -f $1/$fileName ]; then
			echo ""
			echo "Contents of: $1/$fileName :"
			echo "==========================="
			readFile $1/$fileName
			echo ""
		fi
		
    if [ -d $1/$fileName ]; then
            echo "$1/$fileName"
            traverseDirectory "$1/$fileName"
            #rm -rf 1/fileName
    fi
    
    done
}
