var rows = [{
 	name: 'Саша',
	age: 15
},{
	name: 'Артем',
 	age: 27
},{
 	name: 'Андрей',
 	age: 18
}, {
 	name: 'Ира',
 	age: 15
},{
 	name: 'Алексей',
 	age: 27
},{
 	name: 'Андрей',
 	age: 18
}]

    var html = "<table border='1|1'>";
    var sum = 0;

    	html+="<tr>";
        html+="<th>"+"Имя"+"</th>";
        html+="<th>"+"Возраст"+"</th>";
        html+="<th>"+"Количество людей с таким же именем"+"</th>";
        html+="</tr>";
       

    for (var i = 0; i < rows.length; i++) {
       

        var counter = 0;
        for (var j = 0; j < rows.length; j++){
            if(rows[i].name === rows[j].name) {
                counter++;
            }
        }

        html+="<tr>";
        html+="<td>"+rows[i].name+"</td>";
        html+="<td>"+rows[i].age+"</td>";
        html+="<td>"+counter+"</td>";
        html+="</tr>";

        sum += rows[i].age;
    }

    html+="</table>";

    var avarage_age = sum / rows.length;
    html +="<p>" + "Средний возраст - " + avarage_age + "</p>";
document.getElementById("box").innerHTML = html;