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

var basic_creative_config = ui.basic_creative_config;
var que_font_size = basic_creative_config.Question_Font_Size;
var que_font_color = basic_creative_config.Quention_Font_Color;
var Answer_Font_Size = basic_creative_config.Answer_Font_Size;
var Answer_Font_Color = basic_creative_config.Answer_Font_Color;
var Options_bg_Color = basic_creative_config.Options_bg_Color;
var Option_selection_bg_Color = basic_creative_config.Option_selection_bg_Color;
var Answer_Font_Color_On_Option_selection = basic_creative_config.Answer_Font_Color_On_Option_selection;
var Next_Btn_text = basic_creative_config.Next_Btn_text;
var Next_Front_Color = basic_creative_config.Next_Front_Color;
var Next_Bg_Color = basic_creative_config.Next_Bg_Color;


//#######Refferance of HTML elementes
// que test
var Qbox = document.querySelector(".Qbox");
Qbox.style.fontSize = que_font_size
Qbox.style.color = que_font_color

//line
var hr_35 = document.querySelector(".hr_35");
hr_35.style.border = `2px solid ${que_font_color}`

//option comment of choos all applicable
var option_comment = document.querySelector("#Option_comment");

// options container
var options_container = document.querySelector('.options_container');
options_container.style.fontSize = Answer_Font_Size
options_container.style.color = Answer_Font_Color

// next button
var next_btn = document.querySelector("#next-btn");

next_btn.innerText = Next_Btn_text;
next_btn.style.color = Next_Front_Color;
next_btn.style.backgroundColor = Next_Bg_Color



//next btn Click
var nextQueKey = ''
var next_que_id = undefined
var que_obj_index = 0
var final_next_que_id = 0
//questions and option rendering 
// for (var i = 0; i < questions.length; i++) {
// render_quee(que_obj_index)
// function render_quee(que_obj_index) {
// if (i == que_obj_index) {
// debugger

function question_render(que_obj_index) {

    var que_type = questions[que_obj_index].type

    if (que_type == 'MULTIPLE_OPTION') {
        // if (option_comment.hasAttribute('hide') && next_btn.hasAttribute('hide')) {
        option_comment.classList.remove("hide");
        next_btn.classList.remove("hide");
        // }
        // next_btn.disabled = true
        next_btn.style.opacity = "0.6";
        next_btn.disabled = true;
        next_btn.style.cursor = "not-allowed";
    }
    else {
        option_comment.classList.add("hide");
        next_btn.classList.add("hide");
    }

    //question div render 
    Qbox.innerText = questions[que_obj_index].text
    console.log(questions[que_obj_index].text)
    Qbox.setAttribute('qid', questions[que_obj_index].id)

    //option fetching 
    var option = questions[que_obj_index].options
    console.log(option);

    //fetched option populating in dom 
    for (var j = 0; j < option.length; j++) {
        var div = document.createElement('div')
        div.setAttribute('class', 'Abox')
        div.setAttribute('role', option[j].role)
        div.setAttribute('oid', option[j].id)
        div.setAttribute('id', 'option_' + (j + 1))
        // div.setAttribute('onclick', 'optionSelection(this)')
        // div.setAttribute('selected', true)
        div.innerText = option[j].text
        div.style.backgroundColor = Options_bg_Color
        options_container.appendChild(div)

    }

    //option selection function 
    var allAbox = document.querySelectorAll('.Abox')
    for (let k = 0; k < allAbox.length; k++) {
        allAbox[k].addEventListener('click', function (e) {
            var selected = e.target.getAttribute('selected')
            if (selected == null) {
                console.log("Clicked option will mark as selected true!");
                e.target.setAttribute('selected', true)
                e.target.style.backgroundColor = Option_selection_bg_Color;
                e.target.style.color = Answer_Font_Color_On_Option_selection;
                nextButtonStatusUpdation()
                if (que_type != 'MULTIPLE_OPTION') {
                    nextQueKey = ''
                    var oidOfSelectedOption = document.getElementById('option_' + (k + 1)).getAttribute('oid')
                    nextQueKey = nextQueKey + oidOfSelectedOption;

                    //remove the question text and all the options 
                    document.querySelectorAll(".Abox").forEach(e => e.remove());
                    Qbox.innerText = ''

                    //next_question_iteration 
                    next_question_iteration(que_obj_index)
                }
            } else {
                console.log("Clicked option will mark as selected false!");
                e.target.removeAttribute('selected');
                e.target.style.backgroundColor = Options_bg_Color;
                e.target.style.color = Answer_Font_Color;
                nextButtonStatusUpdation()
            }
        })
    }
}

//que_render function call for first question 
question_render(que_obj_index)

var selectedOptionCount = document.querySelectorAll('.Abox[selected="true"]').length
if (selectedOptionCount > 0) {
    var allAbox = document.querySelectorAll('.Abox')
    for (let k = 0; k < allAbox.length; k++) {
        if (allAbox[k].hasAttribute('selected')) {
            var oidOfSelectedOption = document.getElementById('option_' + (k + 1)).getAttribute('oid')
            nextQueKey = nextQueKey + oidOfSelectedOption;
        }
    }
}


//next button enable-disable function 
function nextButtonStatusUpdation() {
    var selectedOptionCount = document.querySelectorAll('.Abox[selected="true"]').length
    console.log('selectedOptionCount: ' + selectedOptionCount)
    if (selectedOptionCount > 0) {
        next_btn.disabled = false
        next_btn.style.opacity = "1";
        next_btn.style.cursor = "pointer";
    } else {
        next_btn.disabled = true
        next_btn.opta
        next_btn.style.opacity = "0.6";
        next_btn.style.cursor = "not-allowed";
    }
}

var selectedOptionCount = document.querySelectorAll('.Abox[selected="true"]').length

next_btn.addEventListener('click', function () {
    var allAbox = document.querySelectorAll('.Abox')
    nextQueKey = ''
    next_que_id = undefined;
    for (let k = 0; k < allAbox.length; k++) {
        if (allAbox[k].hasAttribute('selected')) {
            var oidOfSelectedOption = document.getElementById('option_' + (k + 1)).getAttribute('oid')
            nextQueKey = nextQueKey + oidOfSelectedOption;
        }
    }
    // console.log(nextQueKey)

    //remove the question text and all the options 
    document.querySelectorAll(".Abox").forEach(e => e.remove());
    Qbox.innerText = ''

    //next_question_iteration 
    next_question_iteration(que_obj_index)

})


function next_question_iteration(index) {
    //next question rendering logic
    var que_type = questions[index].type
    if (que_type != 'MULTIPLE_OPTION') {
        var next_que_list = questions[index].next_question;
    } else {
        var next_que_list = questions[index].next_question_multiple;
    }
    // console.log(next_que_list) 
    for (var s = 0; s < Object.keys(next_que_list).length; s++) {
        if (Object.keys(next_que_list)[s] == nextQueKey) {
            // console.log(s)
            // console.log(Object.values(next_que_list)[s])
            next_que_id = Object.values(next_que_list)[s]
            final_next_que_id = next_que_id - 1
            console.log(final_next_que_id)

            for (var i = 0; i < questions.length; i++) {
                if (final_next_que_id == questions[i].id) {
                    // index = final_next_que_id
                    que_obj_index = final_next_que_id
                    // que_obj_index = 2
                    // console.log(questions[i].text)
                    question_render(que_obj_index)
                    // debugger;
                    // break;
                } else {
                    if (!final_next_que_id) {
                        document.querySelector('.qna_page').classList.add("hide");
                        document.querySelector('.thanks_page').classList.remove("hide");
                        lastPageIntreaction_Tracking();
                    }
                }
            }
        }
    }
}

// document.querySelector("#next-btn").addEventListener('click', function () {
//     var allAbox = document.querySelectorAll('.Abox')
//     var nextQueKey = ''

//     for (let k = 0; k < allAbox.length; k++) {
//         if (allAbox[k].hasAttribute('selected')) {
//             var oidOfSelectedOption = document.getElementById('option_' + (k + 1)).getAttribute('oid')
//             nextQueKey = nextQueKey + oidOfSelectedOption;
//         }
//     }
//     console.log(nextQueKey)
// })



// response: 1:BA|2:GFE|3:|4:|5:|6:
// visual: 1:BC|2:ABC|3:|4:|5:|6:
// questions.forEach((row) => {
//     // console.log(i)
//     // console.log()
//     console.log(row][i].id)
//     console.log(row[i].text)
//     console.log(row[i].type)
//     console.log(row[i].options)
//     console.log(row[i].next_question)


//     QboxInnerText = row.text
//     Qbox.setAttribute('qid',row.id)

// })



