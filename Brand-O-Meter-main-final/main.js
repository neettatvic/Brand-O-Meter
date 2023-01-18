// File containes Quesion manupulation Functionality and Q7A page to thanks page redirection 
//###################################################################################################################
//##################################### File containes Quesion manupulation Functionality ###########################
//###################################################################################################################

var survey_config = finalConfiguration.survey_config;
var questions = survey_config.questions; // array
// window.next_question = questions[0].next_question;
// console.log(next_question)

// Refferance from ui config File
var ui = finalConfiguration.ui_config;
var landing_page = ui.startscreen_configuration;
var start_cta_Bg_color = landing_page.start_cta_Bg_color || null;

var basic_creative_config = ui.basic_creative_config;
var que_font_size = basic_creative_config.Question_Font_Size;
var que_font_color = basic_creative_config.Quention_Font_Color;
var Answer_Font_Size = basic_creative_config.Answer_Font_Size;
var Answer_Font_Color = basic_creative_config.Answer_Font_Color;
var Options_bg_Color = basic_creative_config.Options_bg_Color || rgba(231, 208, 208, 0.76);
var Option_selection_bg_Color = basic_creative_config.Option_selection_bg_Color;
var Answer_Font_Color_On_Option_selection = basic_creative_config.Answer_Font_Color_On_Option_selection;
var Next_Btn_text = basic_creative_config.Next_Btn_text;
var Next_Font_Color = basic_creative_config.Next_Font_Color;
var Next_Bg_Color = basic_creative_config.Next_Bg_Color;

// for server pixel 
var time_measurement = {
    start_time: null,
    q1_start_time: null,
    question_end_time: null
}


//#######Refferance of HTML elementes
// que text
var Qbox = document.querySelector(".Qbox");
Qbox.style.fontSize = que_font_size;
Qbox.style.color = que_font_color;

//line
var hr_35 = document.querySelector(".hr_35");
hr_35.style.border = `2px solid ${que_font_color}`;

//option comment of choos all applicable
var option_comment = document.querySelector("#Option_comment");
option_comment.style.color = Answer_Font_Color;

// options container
var options_container = document.querySelector(".options_container");
options_container.style.fontSize = Answer_Font_Size;
options_container.style.color = Answer_Font_Color;

// next button
var next_btn = document.querySelector("#next-btn");
next_btn.innerText = Next_Btn_text;
next_btn.style.color = Next_Font_Color;
next_btn.style.backgroundColor = Next_Bg_Color;

//next btn Click
var nextQueKey = "";
var next_que_id = undefined;
var que_obj_index = 0;
var final_next_que_id = 0;
var sortArr = []; // sorting the user selected OID
var que_type = "";

//Function: shuffling the options div in UI
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//Object: Store user Response of option selection in object
var responseStr = "";
var responseObj = {};
var visualObj = {};
for (var i = 1; i <= questions.length; i++) {
    responseObj[i] = null;
    visualObj[i] = null;
}
// console.log(responseObj);
// console.log(visualObj);

// for visual string 
var alphabets = ['A', 'B', 'C', 'D', 'E']
var option_id, option_index, visual_response, visualStr, visual_value = "";

// function visualObj_1(visual_response) {
//     visual_value = ''
//     option_id = option.getAttribute('ID');
//     option_index = option_id.split('_')[1];
//     visual_response = alphabets[option_index - 1]
//     visual_value += visual_response
//     console.log(visual_value);
// }

//Function: question_render for q&a manipulation 
function question_render(que_obj_index) {
    que_type = questions[que_obj_index].type;


    if (que_type == "MULTIPLE_OPTION") {
        option_comment.classList.remove("hide");
        option_comment.innerText = "Choose all applicable";
        next_btn.classList.remove("hide");

        next_btn.style.opacity = "0.7";
        next_btn.disabled = true;
        next_btn.style.cursor = "not-allowed";
    } else if (que_type == "SINGLE_OPTION") {
        // option_comment.classList.add("hide");
        option_comment.innerText = "Choose only one";
        next_btn.classList.add("hide");
    } else {
        next_btn.classList.remove("hide");
        // next_btn.disabled = true
        next_btn.style.opacity = "0.7";
        next_btn.disabled = true;
        next_btn.style.cursor = "not-allowed";
        option_comment.classList.add("hide");
    }


    if (que_type == "SINGLE_OPTION" || que_type == "MULTIPLE_OPTION") {
        if (questions[que_obj_index].id == 0) {
            this.time_measurement.q1_start_time = new Date();
        }

        //question div render
        Qbox.innerText = questions[que_obj_index].text;
        // console.log(questions[que_obj_index].text)
        Qbox.setAttribute("qid", questions[que_obj_index].id);
        // Record time of first response

        //option fetching
        var option = questions[que_obj_index].options;
        // console.log(option);

        //fetched option populating in dom
        option = shuffleArray(option);
        // console.log('option1')
        // console.log(option1)
        for (var j = 0; j < option.length; j++) {
            var div = document.createElement("div");
            div.setAttribute("class", "Abox");
            div.classList.add("option_ui");
            div.setAttribute("role", option[j].role);
            div.setAttribute("oid", option[j].id);
            div.setAttribute("id", "option_" + (j + 1));
            div.setAttribute("selected", "false");
            div.innerText = option[j].text;
            div.style.backgroundColor = Options_bg_Color;
            options_container.appendChild(div);
        }

        // document.querySelector(".Abox").style.setProperty('--optionBgColor', Options_bg_Color)
        //option selection function
        var allAbox = document.querySelectorAll(".Abox");
        for (let k = 0; k < allAbox.length; k++) {
            allAbox[k].addEventListener("click", function (e) {
                var selected = e.target.getAttribute("selected");
                if (selected == "false") {
                    // console.log("Clicked option will mark as selected true!");
                    e.target.setAttribute("selected", true);
                    e.target.style.backgroundColor = Option_selection_bg_Color;
                    e.target.style.color = Answer_Font_Color_On_Option_selection;
                    nextButtonStatusUpdation();
                    if (que_type == "SINGLE_OPTION") {
                        nextQueKey = "";
                        visual_value = "";

                        responseStr = "";
                        visualStr = "";
                        var oidOfSelectedOption = document.getElementById("option_" + (k + 1)).getAttribute("oid");
                        nextQueKey = nextQueKey + oidOfSelectedOption;
                        // console.log("nextQueKey: " + nextQueKey)
                        visual_response = alphabets[k];
                        visual_value += visual_response;

                        // updating the responseObj keys value
                        responseObj[que_obj_index + 1] = nextQueKey;
                        // console.log(responseObj);
                        // updating the visualObj keys value
                        visualObj[que_obj_index + 1] = visual_value;
                        // console.log(visualObj);

                        // preparing the response String
                        responseStrCreating(responseObj);
                        // preparing the visual String 
                        // console.log(visualObj)
                        visualStrCreating(visualObj);

                        //remove the question text and all the options
                        document.querySelectorAll(".Abox").forEach((e) => e.remove());
                        Qbox.innerText = "";

                        //next_question_iteration
                        next_question_iteration(que_obj_index);
                    }
                } else {
                    // console.log("Clicked option will mark as selected false!");
                    e.target.setAttribute("selected", "false");
                    e.target.style.backgroundColor = Options_bg_Color;
                    e.target.style.color = Answer_Font_Color;
                    nextButtonStatusUpdation();
                }
            });
        }
    } else {
        nextButtonStatusUpdation();

        // Record time of first response
        if (questions[que_obj_index].id == 0) {
            this.time_measurement.q1_start_time = new Date();
        }

        //question div render
        Qbox.innerText = questions[que_obj_index].text;
        Qbox.setAttribute("qid", questions[que_obj_index].id);

        //lable info from config file 
        var lableText = questions[que_obj_index].label;
        var lableID = questions[que_obj_index].label_id;

        //populate the input html
        options_container.innerHTML = `
        <div class="container_lable">
            <div class="group">                    
                <input type="text" class="input_que Abox" oid =${lableID} id="option_1" style="margin-top:0px;width: 0px;padding-left :0px;padding-right: 0px;background-color:${Options_bg_Color};border: none;border-radius: 0px;height: 40px;line-height: 0px; font-size: 18px;padding: 10px 10px 10px 5px;display: block;width: 250px;border: none;border-bottom: 1px solid #757575;" onkeyup="userInputValidation(this)" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label class="label">${lableText}</label>                
            </div>
        </div>`;

        document.querySelector(".bar").style.setProperty("--inputBoxBar", que_font_color);
        document.querySelector(".label").style.setProperty("--inputBoxBar", que_font_color);
        // document.querySelector(".input").style.setProperty('--inputBoxBar', que_font_color)
    }
}

//user input validation function inorder enable-disable the next button UI for input_question type only
function userInputValidation(obj) {
    // console.log("typed")
    var inputBox = document.querySelector(".Abox");
    var inputValue = inputBox.value.length > 0;
    if (inputValue) {
        inputBox.setAttribute("selected", "true");
        nextButtonStatusUpdation();
    } else {
        inputBox.setAttribute("selected", "false");
        nextButtonStatusUpdation();
    }
}

//que_render function call for first question
question_render(que_obj_index);

//next button enable-disable function
function nextButtonStatusUpdation() {
    var selectedOptionCount = document.querySelectorAll('.Abox[selected="true"]').length;
    // console.log('selectedOptionCount: ' + selectedOptionCount)
    if (selectedOptionCount > 0) {
        next_btn.disabled = false;
        next_btn.style.opacity = "1";
        next_btn.style.cursor = "pointer";
        //css need to add for hover
    } else {
        next_btn.disabled = true;
        next_btn.style.opacity = "0.7";
        next_btn.style.cursor = "not-allowed";
    }
}

// Next Button Intreaction
next_btn.addEventListener("click", function () {
    var selectedOptionCount = document.querySelectorAll('.Abox[selected="true"]').length;
    if (selectedOptionCount > 0) {
        var allAbox = document.querySelectorAll(".Abox");
        visual_response = ""
        nextQueKey = "";
        visual_value = "";
        responseStr = "";
        visualStr = "";
        next_que_id = undefined;
        sortArr = [];
        for (let k = 0; k < allAbox.length; k++) {
            if (allAbox[k].getAttribute("selected") == "true") {
                var oidOfSelectedOption = document.getElementById("option_" + (k + 1)).getAttribute("oid");

                visual_response = alphabets[k];
                visual_value += visual_response;
                sortArr.push(oidOfSelectedOption);
            }
        }
        // console.log('visual_value: ' + visual_value);
        nextQueKey = sortArr.sort().join("");
        // console.log("nextQueKey: " + nextQueKey)
    }


    // updating the responseObj & visualObj value of key (where the key is question id)
    if (que_type == "INPUT_OPTION") {
        var inputValue = document.querySelector(".input_que").value;
        responseObj[que_obj_index + 1] = inputValue;
        // console.log(responseObj);
        visualObj[que_obj_index + 1] = inputValue;
        // console.log(responseObj);
        if (document.querySelector(".container_lable")) {
            document.querySelector(".container_lable").style.display = 'none'
        }
    } else {
        responseObj[que_obj_index + 1] = nextQueKey;
        visualObj[que_obj_index + 1] = visual_value;
        // console.log(responseObj);
        // console.log(visualObj);

    }
    // preparing the response String & visual String 
    responseStrCreating(responseObj);
    visualStrCreating(visualObj);


    //remove the question text and all the options
    document.querySelectorAll(".Abox").forEach((e) => e.remove());
    Qbox.innerText = "";

    //next_question_iteration
    next_question_iteration(que_obj_index);
});

function next_question_iteration(index) {
    //next question rendering logic
    var que_type = questions[index].type;
    var next_que_list
    if (que_type == "SINGLE_OPTION") {
        next_que_list = questions[index].next_question;
    }
    else if (que_type == "MULTIPLE_OPTION") {
        next_que_list = questions[index].next_question_multiple;
    } else {
        next_que_list = questions[index].next_question_textInput;
        next_que_id = next_que_list;
        final_next_que_id = next_que_id - 1;

        for (var i = 0; i < questions.length; i++) {
            if (final_next_que_id == questions[i].id) {

                //server call 
                // console.log("responseStr : " + responseStr);
                // console.log("visualStr : " + visualStr);
                sendCollectedResponseToServer(responseStr, visualStr)

                que_obj_index = final_next_que_id;
                question_render(que_obj_index);
            } else {
                if (!final_next_que_id) {
                    // Record time of last response
                    this.time_measurement.question_end_time = new Date();

                    //server call 
                    // console.log("responseStr : " + responseStr);
                    // console.log("visualStr : " + visualStr);
                    sendCollectedResponseToServer(responseStr, visualStr);

                    // redirect to thanks page
                    document.querySelector(".qna_page").classList.add("hide");
                    document.querySelector(".thanks_page").classList.remove("hide");
                    lastPageIntreaction_Tracking();

                    break;
                }
            }
        }
    }

    // console.log(next_que_list)

    for (var s = 0; s < Object.keys(next_que_list).length; s++) {
        if (Object.keys(next_que_list)[s] == nextQueKey) {
            next_que_id = Object.values(next_que_list)[s];
            final_next_que_id = next_que_id - 1;
            // console.log(final_next_que_id)

            for (var i = 0; i < questions.length; i++) {
                if (final_next_que_id == questions[i].id) {

                    //server call 
                    // console.log("responseStr : " + responseStr);
                    // console.log("visualStr : " + visualStr);
                    sendCollectedResponseToServer(responseStr, visualStr)

                    que_obj_index = final_next_que_id;
                    question_render(que_obj_index);
                } else {
                    if (!final_next_que_id) {
                        // Record time of last response
                        this.time_measurement.question_end_time = new Date();

                        //server call 
                        // console.log("responseStr : " + responseStr);
                        // console.log("visualStr : " + visualStr);
                        sendCollectedResponseToServer(responseStr, visualStr);

                        document.querySelector(".qna_page").classList.add("hide");
                        document.querySelector(".thanks_page").classList.remove("hide");
                        lastPageIntreaction_Tracking();

                        break;
                    }
                }
            }
        }
    }
}

function responseStrCreating(responseObj) {
    var keyNameArr = Object.keys(responseObj);
    var keyvalueArr = Object.values(responseObj);
    var length = keyNameArr.length;
    responseStr = "";
    for (var j = 1; j <= length; j++) {
        var keyvalueStr = keyvalueArr[j - 1] != null ? keyvalueArr[j - 1] : "";
        if (j < length) {
            responseStr += keyNameArr[j - 1] + ":" + keyvalueStr + "|";
        } else {
            responseStr += keyNameArr[j - 1] + ":" + keyvalueStr;
        }
    }
    // console.log("responseStrOriginal : " + responseStr);
}

function visualStrCreating(visualObj) {
    var keyNameArr = Object.keys(visualObj);
    var keyvalueArr = Object.values(visualObj);
    var length = keyNameArr.length;
    // var keyvalueStr = ''
    visualStr = "";
    for (var j = 1; j <= length; j++) {
        var keyvalueStr = keyvalueArr[j - 1] != null ? keyvalueArr[j - 1] : "";
        if (j < length) {
            visualStr += keyNameArr[j - 1] + ":" + keyvalueStr + "|";
        } else {
            visualStr += keyNameArr[j - 1] + ":" + keyvalueStr;
        }
    }
    // console.log("visualStrOriginal : " + visualStr);
}