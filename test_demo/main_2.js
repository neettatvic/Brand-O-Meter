// File containes Quesion manupulation 
//###################################################################################################################
//################################################# Refferance from Config File #####################################
//###################################################################################################################

var survey_config = finalConfiguration.survey_config;
var questions = survey_config.questions; // array
// window.next_question = questions[0].next_question;
// console.log(next_question)


// Refferance from ui config File
var ui = finalConfiguration.ui_config;
var landing_page = ui.startscreen_configuration;
var start_cta_Bg_color = landing_page.start_cta_Bg_color || null;


//Refferance of HTML elementes
var Qbox = document.querySelector(".Qbox");
var QboxInnerText = Qbox.innerText;
var options_container = document.querySelector('.options_container')
var option_comment = document.querySelector("#Option_comment")
var next_btn = document.querySelector("#next-btn")


