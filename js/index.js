
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


const aa1 = document.querySelector('#a1');
const a22 = document.querySelector('#a2');
const a33 = document.querySelector('#a3');
const a44 = document.querySelector('#a4');
const a55 = document.querySelector('#a5');
const a66 = document.querySelector('#a6');
const a77 = document.querySelector('#a7');
const a88 = document.querySelector('#a8');
const a99 = document.querySelector('#a9');
const a110 = document.querySelector('#a10');
const a111 = document.querySelector('#a11');
const a112 = document.querySelector('#a12');

const bb1 = document.querySelector('#b1');
const b22 = document.querySelector('#b2');
const b33 = document.querySelector('#b3');
const b44 = document.querySelector('#b4');
const b55 = document.querySelector('#b5');
const b66 = document.querySelector('#b6');
const b77 = document.querySelector('#b7');
const b88 = document.querySelector('#b8');
const b99 = document.querySelector('#b9');
const b110 = document.querySelector('#b10');
const b111 = document.querySelector('#b11');
const b112 = document.querySelector('#b12');

const cc1 = document.querySelector('#c1');
const c22 = document.querySelector('#c2');
const c33 = document.querySelector('#c3');
const c44 = document.querySelector('#c4');
const c55 = document.querySelector('#c5');
const c66 = document.querySelector('#c6');
const c77 = document.querySelector('#c7');
const c88 = document.querySelector('#c8');
const c99 = document.querySelector('#c9');
const c110 = document.querySelector('#c10');
const c111 = document.querySelector('#c11');
const c112 = document.querySelector('#c12');

const sadBlue = {
	a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
    a5: "#767E9B",
    a6: "#767E9B",
    a7: "#767E9B",
    a8: "#767E9B",
    a9: "#767E9B",
    a10: "#767E9B",
    a11: "#767E9B",
    a12: "#767E9B",

	b1: "#767E9B",
	b2: "#767E9B", 
	b3: "#767E9B",
	b4: "#767E9B",
    b5: "#767E9B",
    b6: "#767E9B",
    b7: "#767E9B",
    b8: "#767E9B",
    b9: "#767E9B",
    b10: "#767E9B",
    b11: "#767E9B",
    b12: "#767E9B",

	c1: "#767E9B",
	c2: "#767E9B", 
	c3: "#767E9B",
	c4: "#767E9B",
    c5: "#767E9B",
    c6: "#767E9B",
    c7: "#767E9B",
    c8: "#767E9B",
    c9: "#767E9B",
    c10: "#767E9B",
    c11: "#767E9B",
    c12: "#767E9B",
};

const happyYellow = {
	a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
    a5: "",
    a6: "",
    a7: "",
    a8: "",
    a9: "",
    a10: "",
    a11: "",
    a12: "",

	b1: "",
	b2: "", 
	b3: "",
	b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
    b10: "",
    b11: "",
    b12: "",

	c1: "",
	c2: "", 
	c3: "",
	c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
};

const freshGreen = {
	a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
    a5: "",
    a6: "",
    a7: "",
    a8: "",
    a9: "",
    a10: "",
    a11: "",
    a12: "",

	b1: "",
	b2: "", 
	b3: "",
	b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
    b10: "",
    b11: "",
    b12: "",

	c1: "",
	c2: "", 
	c3: "",
	c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: "",
    c12: "",
};

const pickAVibe = {
	a1: "#C9E1CA",
	a2: "#C9E1DA", 
	a3: "#C9D3E1",
	a4: "#C9CBE1",
    a5: "#D4C9E1",
    a6: "#DCC9E1",
    a7: "#E1C9DA",
    a8: "#E1CCC9",
    a9: "#E1D7C9",
    a10: "#E1E0C9",
    a11: "#DEE1C9",
    a12: "#D7E1C9",

	b1: "#7A9A7B",
	b2: "#689A8B", 
	b3: "#476696",
	b4: "#434983",
    b5: "#633D94",
    b6: "#893D9C",
    b7: "#87296D",
    b8: "#823429",
    b9: "#92631D",
    b10: "#8A8623",
    b11: "#7D8B23",
    b12: "#5C8E1C",

	c1: "#2E472F",
	c2: "#1E483C", 
	c3: "#192B46",
	c4: "#0D1242",
    c5: "#250F41",
    c6: "#2F0E37",
    c7: "#2F0924",
    c8: "#2F0F0A",
    c9: "#34230A",
    c10: "#343209",
    c11: "#32380A",
    c12: "#203308",
};

const colorBox = (userSelection) => {
	const { a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12} = userSelection;

	aa1.style.backgroundColor = a1;
	a22.style.backgroundColor = a2;
	a33.style.backgroundColor = a3;
	a44.style.backgroundColor = a4;
    a55.style.backgroundColor = a5;
    a66.style.backgroundColor = a6;
    a77.style.backgroundColor = a7;
    a88.style.backgroundColor = a8;
    a99.style.backgroundColor = a9;
    a110.style.backgroundColor = a10;
    a111.style.backgroundColor = a11;
    a112.style.backgroundColor = a12;

	bb1.style.backgroundColor = b1;
	b22.style.backgroundColor = b2;
	b33.style.backgroundColor = b3;
	b44.style.backgroundColor = b4;
    b55.style.backgroundColor = b5;
    b66.style.backgroundColor = b6;
    b77.style.backgroundColor = b7;
    b88.style.backgroundColor = b8;
    b99.style.backgroundColor = b5;
    b10.style.backgroundColor = b6;
    b77.style.backgroundColor = b7;
    b88.style.backgroundColor = b8;
    b99.style.backgroundColor = b9;
    b10.style.backgroundColor = b10;
    b111.style.backgroundColor = b11;
    b112.style.backgroundColor = b12;

	cc1.style.backgroundColor = c1;
	c22.style.backgroundColor = c2;
	c33.style.backgroundColor = c3;
	c44.style.backgroundColor = c4;
    c55.style.backgroundColor = c5;
    c66.style.backgroundColor = c6;
    c77.style.backgroundColor = c7;
    c88.style.backgroundColor = c8;
    c99.style.backgroundColor = c9;
    c110.style.backgroundColor = c10;
    c111.style.backgroundColor = c11;
    c112.style.backgroundColor = c12;
    

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
