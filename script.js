
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


  
  //login_section code

//   const loginForm = document.querySelector("form.login");
//   const signupForm = document.querySelector("form.signup");
//   const loginBtn = document.querySelector("label.login");
//   const signupBtn = document.querySelector("label.signup");
//   const signupLink = document.querySelector(".signup-link a");
//    let   newyear = document.getElementById("policy_expiry_date")
  
//   loginBtn.onclick = (()=>{
// 	loginForm.style.marginLeft = "0%"
//   })
 
  
 
//   //
//   Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzUeMfhReZ9dEoPL6VpsKd8lwclEjl4fY",
  authDomain: "lic-project1.firebaseapp.com",
  projectId: "lic-project1",
  storageBucket: "lic-project1.appspot.com",
  messagingSenderId: "484390798910",
  appId: "1:484390798910:web:f0dca562c5be1234e9736f"
  };
  //////////////////////////



// // // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const database = firebase.database()
  //set up your register function
  function register(content,content_2,content_3,content_4,content_5){
	DisplayTodos()
	
	 email = document.getElementById("content_1").value
	 console.log(email)
	 password = document.getElementById("content_2").value
	 full_name = document.getElementById('content_3').value
	 policy_prize = document.getElementById('content_4').value
	 policy_name= document.getElementById('content_5').value
	// console.log(email,password,full_name,policy_name,policy_prize,)
     
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
  // Don't continue running the code
  }
  if(validate_field(full_name) == false || validate_field(policy_prize) == false ||validate_field(policy_name) == false){
  alert('One or More Extra Field is Outta Line?? ')
   
} 
//move with Auth
auth.createUserWithEmailAndPassword(email,password)
.then(function(){
//decalre user variable
var user = auth.currentUser
//add this user t ofirebase database

//create user data
var database_ref = database.ref()


//add this user to fireabse
var user_data = {
	email: email,
	full_name: full_name,
	password :  password,
	policy_prize: policy_prize,
    policy_name:policy_name,
	last_login: Date.now()

}

database_ref.child('user/' + full_name).set(user_data)





alert('User Created')
})
.catch(function(error){
 var error_code = error.code
 var error_message = error.message

 alert(error_message)
})
  }
  function validate_email(email) {
	expression = /^[^@]+@\w+(\.\w+)+\w$/
	if ( expression.test(email)==true){
		//email is good
		return true
	}else{
        //email is not good
		return false
	}
  }
  function validate_password(password){
	if(password < 6){
		return false
	}else{
		return true
	}
  }
  function validate_field(field) {
	if (field == null) {
	  return false
	}
  
	if (field.length <= 0) {
	  return false
	} else {
	  return true
	}
  }
//   var  LICRef = firebase.database().ref("players/");

//   playersRef.on("child_added", function(data, prevChildKey) {
// 	 var newPlayer = data.val();
// 	 console.log("name: " + newPlayer.name);
// 	 console.log("age: " + newPlayer.age);
// 	 console.log("number: " + newPlayer.number);
// 	 console.log("Previous Player: " + prevChildKey);
//   });
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
	  if (user.email == 'coldplane567@gmail.com'){
		checkOpacity()
	  }
	  else{
		console.log("email unauthorized")
	  }
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
	  
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
   unCheckOpacity()
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}

///
function checkOpacity(){
	document.getElementById('hide').style.opacity ="100%"
}
 function unCheckOpacity(){
	document.getElementById('hide').style.opacity ="0%"
}
 
 //////////////
 const aYearFromNow = new Date();
console.log(aYearFromNow);
 function calender(){
	
    aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
	const newYear = aYearFromNow;

const daysEl = document.querySelector('.day');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.seconds');

function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);
 }
 const newYear = Date.now +  " 12/12";

const daysEl = document.querySelector('.day');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.seconds');

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

var date = new Date();

console.log(date.addDays(5)); 
function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);


window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const nameInput = document.querySelector('#name');
	const newTodoForm = document.querySelector('#new-todo-form');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		const todo = {
			content_1: e.target.elements.content.value,
			content_2 : e.target.elements.content_2.value,
			content_3 : e.target.elements.content_3.value,
			content_4 : e.target.elements.content_4.value,
			content_5 : e.target.elements.content_5.value,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		e.target.reset();

		DisplayTodos()
	})

	DisplayTodos()
})

function DisplayTodos () {
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content_1 = document.createElement('div');
		const content_2 = document.createElement('div')
		const content_3 = document.createElement('div')
		const content_4 = document.createElement('div')
		const content_5 = document.createElement('div')
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}
		content.classList.add('todo-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		content_2.innerHTML = `<input type="text" value="${todo.content_2}" readonly>`;
		content_3.innerHTML = `<input type="text" value="${todo.content_3}" readonly>`;
		content_4.innerHTML = `<input type="text" value="${todo.content_4}" readonly>`;
		
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content_1);
		todoItem.appendChild(content_2)
		todoItem.appendChild(content_3)
		todoItem.appendChild(content_4)
		todoItem.appendChild(content_5)
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (todo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				todo.content_2 = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	})
}

///////////////////////////////////////////////////
window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const nameInput = document.querySelector('#name');
	const newTodoForm = document.querySelector('#new-todo-form');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		const todo = {
			content: e.target.elements.content_1.value,
			content_2 : e.target.elements.content_2.value,
			content_3 : e.target.elements.content_3.value,
			content_4 : e.target.elements.content_4.value,
			content_5 : e.target.elements.content_5.value,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		e.target.reset();

		DisplayTodos()
	})
        
	DisplayTodos()
	
})

function DisplayTodos () {
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content_1 = document.createElement('div');
		const content_2 = document.createElement('div')
		const content_3 = document.createElement('div')
		const content_4 = document.createElement('div')
		const content_5 = document.createElement('div')
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}
		content.classList.add('todo-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content_1.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		content_2.innerHTML = `<input type="text" value="${todo.content_2}" readonly>`;
		content_3.innerHTML = `<input type="text" value="${todo.content_3}" readonly>`;
		content_4.innerHTML = `<input type="text" value="${todo.content_4}" readonly>`;
		content_5.innerHTML = `<input type="text" value="${todo.content_5}" readonly>`
		
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content_1);
		todoItem.appendChild(content_2)
		todoItem.appendChild(content_3)
		todoItem.appendChild(content_4)
		todoItem.appendChild(content_5)
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (todo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content_1 = e.target.value;
				todo.content_2 = e.target.value;
				todo.content_3 = e.target.value;
				todo.content_4 = e.target.value;
				todo.content_5 = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	})
	
}