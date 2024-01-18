"use strict";


(function(){

    function DisplayHomePage(){
        console.log("Call DisplayHomePage()");
        let AboutUsButton = document.getElementById("AboutUsBtn")

        AboutUsButton.addEventListener("click", function (){
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];

        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my first paragraph";
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} the main paragraph`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

    }

    function DisplayProductPage(){
        console.log("Call DisplayProductPage()");
    }

    function DisplayServicesPage(){
        console.log("Call DisplayServicesPage()");
    }
    function DisplayAboutPage(){
        console.log("Call DisplayAboutPage()");
    }
    function DisplayContactPage(){
        console.log("Call DisplayContactPage()");
    }


    function Start(){
        console.log("App Started");

        switch (document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Our Product":
                DisplayProductPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }
    window.addEventListener("load", Start);
})()