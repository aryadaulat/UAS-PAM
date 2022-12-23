document.addEventListener("DOMContentLoaded", init, false);
let data = [
	{	
		id:1,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 9,
		Status: true,
	},
	{
		id:2,
		Nama: "Manarul Hidayat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 8,
		Status: true,
	},
	{
		id:3,
		Nama: "Arre Pangestu",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 7,
		Status: true,
	},
	{
		id:4,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 6,
		Status: true,
	},
	{
		id:5,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 5,
		Status: true,
	},
	{
		id:6,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 4,
		Status: true,
	},
	{
		id:7,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 3,
		Status: true,
	},
	{
		id:8,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 2,
		Status: true,
	},
	{
		id:9,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 1,
		Status: true,
	},
	{
		id:10,
		Nama: "Arya Daulat",
		NIM: "118140128",
		ProgramStudi: "Teknik Informatika",
		ProgramPendidikan: "S1",
		Semester: 0,
		Status: true,
	},
];
async function init() {
  // Select the table (well, tbody)
  let table = document.querySelector("#datamahasiswa tbody");
  // get the cats
  // let resp = await fetch('https://www.raymondcamden.com/.netlify/functions/get-cats');
  // let data = await resp.json();
  
  // create html
  let result = "";
  data.forEach((c) => {
    result += `<tr>
     <td>${c.Nama}</td>
     <td>${c.NIM}</td>
     <td>${c.ProgramStudi}</td>
     <td>${c.ProgramPendidikan}</td>
		 <td>${c.Semester}</td>
		 <td><button onclick="detaildata('${c.id}')">Detail</button></td>
     </tr>`;
  });
  table.innerHTML = result;
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("datamahasiswa");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("datamahasiswa");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

const detaildata=(id) =>{
  let cfm = confirm("Lihat Detail Buku ?");

  if (cfm == true) {
    // const data = data.filter((a) => a.id == id);
    // const data = data.filter((a) => a.id != id);
		data.filter((a) => a.id == id);
    // localStorage.setItem(storageKey, JSON.stringify(bookData));
// 		var xhr = new XMLHttpRequest();
// 			xhr.open("POST", "/detail.html", true);
// 			xhr.setRequestHeader('Content-Type', 'application/json');
// 			xhr.send(JSON.stringify({
//     			title: bookDataDetail[0].title
// }));	
		const url = `detail.html?id=${id}`; 	
		window.location.href = url;
    // alert(`[Buku ${bookDataDetail[0].title}] telah terhapus dari rak`);
  } else {
    return 0;
  }
}