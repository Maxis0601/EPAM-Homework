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
        html+="<th>"+"Имя"+"</td>";
        html+="<th>"+"Возраст"+"</td>";

        html+="</tr>";
       

    for (var i = 0; i < rows.length; i++) {
        html+="<tr>";
        html+="<td>"+rows[i].name+"</td>";
        html+="<td>"+rows[i].age+"</td>";
        

        html+="</tr>";

        sum += rows[i].age;

    }

    html+="</table>";

    var avarage_age = sum / rows.length;
    html +="<p>" + "Средний возраст - " + avarage_age + "</p>";
document.getElementById("box").innerHTML = html;