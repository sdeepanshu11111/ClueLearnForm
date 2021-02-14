let layer = document.querySelector(".firstlayer");
let questionDiv = document.querySelector(".questions");

function testingAPI() {
  var key = "Bearer 12345667810802232";
  var url =
    "https://cors-anywhere.herokuapp.com/https://cluelearn.com/apidev/imageBased/RetreiveImageBasedQuestionDetail";
  postData(url, key).then((responseData) => {
    responseData.data.questions.push({
      questionIdOrg: "5fe6ec6427ec3b098ecbc597",
      IsSubquestionFromCategory: true,
      IsEnabled: true,
      _id: "60265fe15807b9f71b808979",
      question: "111111111111111",
    });
    responseData.data.questions.push({
      questionIdOrg: "5fe6ec6427ec3b098ecbc597",
      IsSubquestionFromCategory: false,
      IsEnabled: true,
      _id: "60265fe15807b9f71b808979",
      question: "22222222222222",
    });
    responseData.data.questions.push({
      questionIdOrg: "5fe6ec6427ec3b098ecbc597",
      IsSubquestionFromCategory: true,
      IsEnabled: true,
      _id: "60265fe15807b9f71b808979",
      question: "What is the name of this place?\t",
    });
    responseData.data.questions.push({
      questionIdOrg: "5fe6ec6427ec3b098ecbc597",
      IsSubquestionFromCategory: true,
      IsEnabled: true,
      _id: "60265fe15807b9f71b808979",
      question: "What is the name of this place?\t",
    });
    console.log(responseData);
    layer.insertAdjacentHTML(
      "afterBegin",
      `<div class="basicdetails">
    <img src="Vector.png" alt="">
    <h1>Shared By: <span>${responseData.data.ownerMobileNumber}</span></h1>
  </div>
  <div class="basicdetails">
    <img src="Vector(1).png" alt="">
    <h1>Shared On: <span></span>
    </h1>
  </div>
  <div class="basicdetails">
        <img src="Vector(2).png" alt="">
        <h1>Image Title: <span>Title of images</span></h1>
      </div>
      <div class="basicdetails">
        <img src="Vector(3).png" alt="">
        <h1>Image Type: <span>${responseData.data.category.categoryName}</span></h1>
      </div>
      <div class="name">
        <img src="Vector(4).png" alt="">
        <h1>Enter Your Name First </h1>
      </div>
      <input name="Name" placeholder="Enter Your Name" type="text">

      <div class="mainImage">
        <img src="${responseData.data.imageLink}" alt="">
        <h1>This is Image title</h1>
      </div>`
    );

    responseData.data.questions.forEach(function (e) {
      questionDiv.insertAdjacentHTML(
        "afterbegin",
        `
        
        <div class="question-div">


      <div class="question">
        <h1>Q1: ${e.question}</h1>

        ${
          e.IsSubquestionFromCategory
            ? `
            
            <div class="fifty">
            
            <div title="Click for clue" class="circle ac">
        <span class="tooltiptext ac2">clue so many
        </span>
      </div>
      </div>
      `
            : ""
        }

        <div class="fifty">
        
        <div title="Google Search" data-value="${
          e.question
        }" class="circle ac google">
        </div>
      </div>
      </div>

      <input name="question" placeholder="Enter your answer here" type="text">


    </div>`
      );
    });
    let google = document.querySelectorAll(".google");
    google.forEach(function (item) {
      item.addEventListener("click", (e) => {
        console.log(e.target.dataset.value);

        window.open("http://google.com/search?q=" + e.target.dataset.value);
      });
    });
  });
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  console.log("post");
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: new Headers({
      Authorization: data,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      questionId: "60265fd85807b9f71b808973",
    }), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

testingAPI();
