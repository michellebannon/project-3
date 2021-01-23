var rawData = document.currentScript.getAttribute("indata")
var decodeData = decodeURIComponent(JSON.parse('"'+rawData+'"'));
console.log(decodeData)
var data = JSON.parse(JSON.parse('"'+decodeData+'"'))
console.log(typeof data)

d3.select('#panel1')
    .selectAll('div')
    .data(data).enter()
    .append('div')
    .html(
        d => `<table>
            <tr>
                <th>Id</th>
                <th>${d['id']}</th>
            </tr>
            <tr>
                <td>Title</td>
                <td>${d['title']}</td>
            </tr>
            <tr>
                <td>Company</td>
                <td>${d['company']}</td>
            </tr>  
        </table>`)
