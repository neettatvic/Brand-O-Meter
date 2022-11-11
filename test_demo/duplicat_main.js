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


var que_obj_index = 0
//questions and option rendering 
// for (var i = 0; i < questions.length; i++) {
    // render_quee(que_obj_index)
    // function render_quee(que_obj_index) {
    // if (i == que_obj_index) {
        // debugger
        document.querySelector(".Qbox").innerText = questions[que_obj_index].text
        console.log(questions[que_obj_index].text)
        Qbox.setAttribute('qid', questions[que_obj_index].id)

        //option fetching 
        var option = questions[i].options
        console.log(option);

        //fetched option populating in dom 
        for (var j = 0; j < option.length; j++) {
            var options_container = document.querySelector('.options_container')
            var div = document.createElement('div')
            div.setAttribute('class', 'Abox')
            div.setAttribute('role', option[j].role)
            div.setAttribute('oid', option[j].id)
            div.setAttribute('id', 'option_' + (j + 1))
            // div.setAttribute('onclick', 'optionSelection(this)')
            // div.setAttribute('selected', true)
            div.innerText = option[j].text
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
                    e.target.style.backgroundColor = start_cta_Bg_color;
                    e.target.style.color = 'white';
                } else {
                    console.log("Clicked option will mark as selected false!");
                    e.target.removeAttribute('selected');
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#545454';
                }
            })
        }
    // }
// }


        //next btn Click
        var nextQueKey = ''
        var next_que_id
        document.querySelector("#next-btn").addEventListener('click', function () {
            var allAbox = document.querySelectorAll('.Abox')

            for (let k = 0; k < allAbox.length; k++) {
                if (allAbox[k].hasAttribute('selected')) {
                    var oidOfSelectedOption = document.getElementById('option_' + (k + 1)).getAttribute('oid')
                    nextQueKey = nextQueKey + oidOfSelectedOption;
                }
            }
            // console.log(nextQueKey)

            var next_que_list = questions[que_obj_index].next_question;
            // console.log(next_que_list) 
            for (var s = 0; s < Object.keys(next_que_list).length; s++) {
                if (Object.keys(next_que_list)[s] == nextQueKey) {
                    // console.log(s)
                    // console.log(Object.values(next_que_list)[s])
                    next_que_id = Object.values(next_que_list)[s]
                    final_next_que_id = next_que_id
                    console.log(final_next_que_id)

                    for (var i = 0; i < questions.length; i++) {
                        if (final_next_que_id == questions[i].id) {
                            console.log(questions[i].text)
                        }
                    }
                }
            }
        })


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



