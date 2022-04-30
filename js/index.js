
// Define the referents to HTML objects;
// Create function to paint canvas / 
// Capture the user selections;
    // Launch the paint canvas function;

// dropDown.addEventListener('change', function (event) {
//     const { value } = event.target;
//     switch
    // const color = this.value;
    // if(color === 'default'){
    //     document.querySelector('.color-block').style.background = 'white';
    // } else {
    //     document.querySelector('#a1').style.background = color;
    
    // document.querySelector('#a2').style.background = color;
    
    // document.querySelector('#a3').style.background = color;
    
    // document.querySelector('#a4').style.background = color;
    // }
// })

const dropDown = document.querySelector('#colorSelector');


const a11 = document.querySelector('#a1');
const a22 = document.querySelector('#a2');
const a33 = document.querySelector('#a3');
const a44 = document.querySelector('#a4');

const sadBlue = {
	a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
};

const happyYellow = {
	a1: "#E7D88B",
	a2: "#C7AD29", 
	a3: "#C7ad29",
	a4: "#B79900",
};

const freshGreen = {
	a1: "#C2DDAC",
	a2: "#93BD72", 
	a3: "#6EA046",
	a4: "#3A6D11",
};

const pickAVibe = {
	a1: "#FFFFFF",
	a2: "#FFFFFF", 
	a3: "#FFFFFF",
	a4: "#FFFFFF",
};

const colorBox = (userSelection) => {
	const { a1, a2, a3, a4 } = userSelection;
	a11.style.backgroundColor = a1;
	a22.style.backgroundColor = a2;
	a33.style.backgroundColor = a3;
	a44.style.backgroundColor = a4;
};


dropDown.addEventListener('change', (event) => {
	const { value } = event.target;
	switch(value) {
		case "sadBlue":
			colorBox(sadBlue)
			break;
		case "happyYellow":
			colorBox(happyYellow)
			break;
		case "freshGreen":
			colorBox(freshGreen)
			break;
		default:
            colorBox(pickAVibe)
			return;
	}
});
