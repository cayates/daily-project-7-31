// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let dataField = document.getElementById("fields");



let firstInput = document.createElement("input");
fields.appendChild(firstInput);
firstInput.setAttribute("placeholder", "First Name");

let lastInput = document.createElement("input");
fields.appendChild(lastInput);
lastInput.setAttribute("placeholder", "Last Name");

let emailInput = document.createElement("input");
fields.appendChild(emailInput);
emailInput.setAttribute("placeholder", "Email Address");

let webInput = document.createElement("input");
fields.appendChild(webInput);
webInput.setAttribute("placeholder", "Current website url");

let languageInput = document.createElement("select");
fields.appendChild(languageInput);
languageInput.setAttribute("placeholder", "Select language...");     


// let languageText = document.createElement("p");
// languageInput.appendChild(languageText);
// languageText.innerText = "test"



// let languageOptions = document.createElement("options");
// fields.appendChild(languageOptions);
// languageOptions.setAttribute("English", "EN");

// var newOption = document.createElement("option");
// newOption.text = 'the options text';
// newOption.value = 'some value if you want it';
// daySelect.appendChild(newOption);

let dropdownOptions = document.createElement("option");
languageInput.appendChild(dropdownOptions);
dropdownOptions.value = ("EN", "EN");
dropdownOptions.label = ("English", "English");
dropdownOptions.value = ("FR", "FR");
dropdownOptions.label - ("French", "French");




let commentInput = document.createElement("textarea");
fields.appendChild(commentInput);
commentInput.setAttribute("placeholder", "Your comment...");

// let yourComment = document.createElement ("textarea")
// fields.appendChild(yourComment);
// // yourComment.setAttribute( "type", formData[5].type);
// yourComment.setAttribute( "placeholder", formData[5].label);
// // yourComment.setAttribute( "id", formData[5].id);

let mobileInput = document.createElement("input");
fields.appendChild(mobileInput);
mobileInput.setAttribute("placeholder", "Mobile number");

let homeInput = document.createElement("input");
fields.appendChild(homeInput);
homeInput.setAttribute("placeholder", "Home number");






// newInput.setAttribute("type", formData[i]);
// newInput.setAttribute("label", formData[i]);
// newInput.setAttribute("id", formData[i]);
// newInput.setAttribute("icon", formData[i]);
// newInput.setAttribute("options", formData[i]);
// let second = formData[1];
// let third = formData[2];
// let fourth = formData[3];
// let fifth = formData[4];
// let sixth = formData[5];
// let seventh = formData[6];
// let eighth = formData[7];


// for (let i = 0; i < formData.length; i++);