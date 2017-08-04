
let formData = [
  
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

// let dataContainer = document.createElement('div');

// const inputs = []
//   for (let i=0; i < formData.length; i++){
//     const isInput = formData[i].type === "text" || formData[i].type === "email" || formData[i].type === "tel";
//       if (isInput){
//         inputs.push(formData[i])
//       }
    
//   }




// const textareas = []
//   for (i=0; i < formData.length; i++){
//     const isSelect = formData[i].type === "select";
//       if (isSelect){
//         textareas.push(formData[i]);
//       }      
//     }
  





// const selects = []
//     for (i=0; i < formData.length; i++){
//       const isTextArea = formData[i].type === "textarea";
//       if (isTextArea){
//         selects.push(formData[i]);
//       }
//       }
    






( function(){
  
  let first = formData[ 0 ];
  
  console.log( first );
  
  console.log( first.label );
} )();



// let languageOptions = formData[4].options;


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

// languageInput.setAttribute("placeholder", "English");     

let dropdownOptions = document.createElement("option");
languageInput.appendChild(dropdownOptions);        
dropdownOptions.label = ("Select Language");

for (i=0; i < formData[4].options.length; i++){
  let dropdownOptionSelections = document.createElement("option");
  dropdownOptionSelections.setAttribute("label", formData[4].options[i].label);
  dropdownOptionSelections.setAttribute("value", formData[4].options[i].value);
  languageInput.appendChild(dropdownOptionSelections);
}

// selectObject.add(option, [1]);

// for (let i = 0; i < formData[4].options.length; i++){
//   select.appendChild(dropdownOptions);
// }







// dropdownOptions.formData[4].options[0].value = ("EN", "EN");
// dropdownOptions.formData[4].options[0].label = ("English", "English");
// dropdownOptions.formData[4].options[1].value = ("FR", "FR");
// dropdownOptions.formData[4].options[1].label = ("French", "French");






let commentInput = document.createElement("textarea");
fields.appendChild(commentInput);
commentInput.setAttribute("placeholder", "Your comment...");



let mobileInput = document.createElement("input");
fields.appendChild(mobileInput);
mobileInput.setAttribute("placeholder", "Mobile number");

let homeInput = document.createElement("input");
fields.appendChild(homeInput);
homeInput.setAttribute("placeholder", "Home number");






