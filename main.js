
let request= file =>{
	return new Promise((resolve,reject) =>{

		let getFile =new XMLHttpRequest();
			 getFile.open("GET",file);
			 getFile.send();
			 getFile.addEventListener('readystatechange',()=>{
				if(getFile.readyState==4){
					getFile.status < 400 ? resolve( JSON.parse(getFile.response)) : reject(getFile.status)
				}   
			});
	});
};

let fileArr=[];


request('data.json')
	.then (
		firstFile =>{
			if(firstFile){
				for ( let key in firstFile){
					fileArr.push(firstFile[key]);
				}
				return request('data_2.json')
			}
		}
	)

	.then(
		secondFile =>{
			if(secondFile){
				for ( let key in secondFile){
					fileArr.push(secondFile[key]);
				}
		}
		console.log('fileArr: ', fileArr);
		}
)

.catch(
	() => console.log(' File not found')
)
	
