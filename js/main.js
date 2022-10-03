const inputs = document.querySelectorAll(".input");

var icon=document.getElementById("icon");
		icon.onclick = function(){
			document.body.classList.toggle("dark-theme");

			/*if(document.body.classList.toggle("dark-theme"))
			{
				icon.src = "img/sun.png";
			} else{
				icon.src ="img/moon.png";
			}*/
		}
		function logFn(){
			window.location.assign("home.html");
		}
		function myFunction() {
			var input, filter, table, tr, td, i, txtValue;
			input = document.getElementById("myInput");
			filter = input.value.toUpperCase();
			table = document.getElementById("myTable");
			tr = table.getElementsByTagName("tr");
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
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
