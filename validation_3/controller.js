// File containes the Home page to Q&A page manupulation 

//###################################################################################################################
//################################################# Refferance from Config File #####################################
//###################################################################################################################

//UI_config Refferance
var ui = finalConfiguration.ui_config;
var landing_page = ui.startscreen_configuration;
var startscreen = landing_page.startscreen; //landing page flag


//###################################################################################################################
//########################################## Render the Q&A page from Home page  ####################################
//###################################################################################################################
var animateButton = function(e) {
    setTimeout(function () {
        // e.target.classList.remove('animate');
        document.querySelector('.landing_container').parentElement.classList.add("hide");
        document.querySelector('.qna_page').classList.remove("hide");
    }, 350);
};

if (startscreen) {
    document.querySelector("#survey-btn").addEventListener('click', animateButton)
} else {
    document.querySelector('.landing_container').parentElement.classList.add("hide");
    document.querySelector('.qna_page').classList.remove("hide");
}


//###################################################################################################################
//################################################# Render the Thanks page  #########################################
//###################################################################################################################
// logic used in main.js file 
// document.querySelector("#next-btn").addEventListener('click', function () {
//     document.querySelector('.qna_page').classList.add("hide");
//     document.querySelector('.thanks_page').classList.remove("hide");
//     lastPageIntreaction_Tracking();
// })