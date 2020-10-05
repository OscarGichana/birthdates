function generateName () {

	let daysOfTheWeek = [
		"Sunday",
	  "Monday",
	  "Tuesday",
	  "Wednesday",
	  "Thursday",
	  "Friday",
	  "Saturday"
	];
	let maleNames = [
		"Kwasi",
		"Kwadwo",
		"Kwabena",
		"Kwaku",
		"Yaw",
		"Kofi",
		"Kwame"
	];
  let femaleNames = [
		"Akosua",
		"Adwoa",
		"Abenaa",
		"Akua",
		"Yaa",
		"Afua",
		"Ama"
  ];

	let monthOfBirth = Number(document.getElementById('month').value);
  let yearOfBirth = document.getElementById('year').value;
	let dayOfBirth = Number(document.getElementById('day').value);
	let gender = document.querySelector('input[name="gender"]:checked').value;

	// ******** VALIDATION FUNCTIONS *******

	// Function to validate that the month entered is correct
	function monthValidator() {
		if (monthOfBirth < 1 || monthOfBirth > 12) {
			return false;
		} else {
			return true;
		}
	}

	// Function to validate the day entered is correct
	function dayValidator () {
		//For Leap Years
		if (monthOfBirth === 2 && yearOfBirth % 4===0) {
			if (dayOfBirth > 28 || dayOfBirth < 1) {
				return false;
			} else if (monthOfBirth===2 && dayOfBirth > 29) {
				return false;
			} else if (monthOfBirth===2 && dayOfBirth < 1) {
				return false;
			} else {
				return true;
			}
			//For Normal Days
		} else if (dayOfBirth < 1 || dayOfBirth > 31) {
			return false;
		} else {
			return true;
		}
	}

	//validation variables
  let monthValid = monthValidator();
	let dayValid = dayValidator();


	//formula to determine day of birth i.e Sunday = 1, Monday = 2)etc..
  let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
					((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

//generating an index value to select items on arrays
  let index;
  // fix formula bug
  if (dayOfWeekNumber == 0){
    index = 6;
  } else {
    index = dayOfWeekNumber - 1;
  }

	// console.log(index);

	//For Male Names
  if (gender == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfTheWeek[index] + " , your Akan name is " + maleNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";

		return false;
		//For Female Names
  } else if (gender == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfTheWeek[index] + " , your Akan name is " + femaleNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";

    return false;
  } else {
    alert("You entered an invalid day or month, please try again");
	}

}

	//Clear the form
	function clearForm() {
		document.getElementById('month').value = null;
		document.getElementById('year').value = null;
		document.getElementById('day').value = null;
		document.getElementById('male').checked = false;
		document.getElementById('female').checked = false;
	}
