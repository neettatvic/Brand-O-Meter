var finalConfiguration = {
    "survey_config": {
        "response_server": "https://asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
        "id": 'uuid',
        "seg": "default",
        "questions": [
            {
                "id": "1",
                "type": "MULTIPLE_OPTION",
                "text": "Which chocolates do you like to eat?",
                "options": [{
                    "role": "option",
                    "id": "A",
                    "text": "Perk"
                }, {
                    "role": "option",
                    "id": "B",
                    "text": "Kitkat"
                }, {
                    "role": "option",
                    "id": "C",
                    "text": "Snickers"
                }, {
                    "role": "option",
                    "id": "D",
                    "text": "Munch"
                }],
                "next_question": {
                    "A": "2",
                    "B": "2",
                    "C": "2",
                    "D": "2",
                },
                "next_question_multiple": {
                    "A": "2",
                    "B": "2",
                    "C": "2",
                    "D": "2",
                    "AB": "2",
                    "AC": "2",
                    "AD": "2",
                    "BC": "2",
                    "BD": "2",
                    "CD": "2",
                    "ABC": "2",
                    "ABD": "2",
                    "BCD": "2",
                    "ABCD": "3",
                }
            },
            {
                "id": "2",
                "type": "SINGLE_OPTION",
                "text": "Which Programing Language did you learn ?",
                "options": [{
                    "role": "option",
                    "id": "E",
                    "text": "Java"
                }, {
                    "role": "option",
                    "id": "F",
                    "text": "JavaScript"
                }, {
                    "role": "option",
                    "id": "G",
                    "text": "C#"
                }, {
                    "role": "option2",
                    "id": "H",
                    "text": "Appscript"
                }],
                "next_question": {
                    "E": "3",
                    "F": "3",
                    "G": "3",
                    "H": "3",
                },
                "next_question_multiple": {
                    "E": "3",
                    "F": "3",
                    "G": "3",
                    "H": "3",
                    "EF": "3",
                    "EG": "3",
                    "EH": "3",
                    "FG": "3",
                    "FH": "3",
                    "GH": "3",
                    "EFG": "3",
                    "EFH": "3",
                    "FGH": "3",
                    "EFGH": "1",
                }
            },
            {
                "id": "3",
                "type": "MULTIPLE_OPTION",
                "text": "Which Food did you like ?",
                "options": [{
                    "role": "option",
                    "id": "I",
                    "text": "Indian dish"
                }, {
                    "role": "option",
                    "id": "J",
                    "text": "Italic dish"
                }, {
                    "role": "option",
                    "id": "K",
                    "text": "Maxican dish"
                }, {
                    "role": "option2",
                    "id": "L",
                    "text": "Desi Khichdi"
                }],
                "next_question": {
                    "I": "4",
                    "J": "4",
                    "K": "4",
                    "L": "4",
                },
                "next_question_multiple": {
                    "I": "4",
                    "J": "4",
                    "K": "4",
                    "L": "4",
                    "IJ": "4",
                    "IK": "4",
                    "IL": "4",
                    "JK": "4",
                    "JL": "4",
                    "KL": "4",
                    "IJK": "4",
                    "IKL": "4",
                    "JKL": "4",
                    "IJKL": "1",
                }
            },
            {
                "id": "4",
                "type": "SINGLE_OPTION",
                "text": "Would you like to be the Changemaker/Volunteer for a National level program to impact a million lives of Tuberculosis (TB) patients?",
                "options": [{
                    "role": "option",
                    "id": "M",
                    "text": "Yes"
                }, {
                    "role": "option",
                    "id": "N",
                    "text": "No"
                }],
                "next_question": {
                    "M": "end",
                    "N": "end"
                },
                "next_question_multiple": "",
                "ispersist": "",
                "next_question_textInput": ""
            }    
        ],
        "exit_url": "https://www.google.com",
        "carousel_images": [],
        "thankyou_text": 'thankYouText',
        "trackers": [
            "https://www.googly.com/trackers_thanks_intreaction"
        ],
        "trackers_first_interaction": [
            "https://www.googly.com/trackers_first_interaction"
        ], 
        "trackers_creative_load": [
            "https://www.googly.com/trackers_creative_load",
            "https://www.google.com/trackers_creative_load",
            "https://www.googleeeeee.com/trackers_creative_load"
        ],
    },
    "ui_config": {
        "creative_size": {
            "width": 300,
            "height": 250,
            "button_bg_color":"rgba(49, 99, 210)",
        },
        "basic_creative_config": {
            "Question_Font_Size": "16px",
            "Quention_Font_Color": "rgb(49, 99, 210)",
            "Answer_Font_Size": "13px",
            "Answer_Font_Color": "#545454",
            "Options_bg_Color":"rgba(231, 208, 208, 0.76)",
            "Options_Hover_bg_Color": "",
            "Answer_Font_Color_On_Option_Hover":"",
            "Option_selection_bg_Color":"rgb(49, 99, 210)",
            "Answer_Font_Color_On_Option_selection":"black",
            "Next_Btn_text": "Continue",
            "Next_Front_Color": "Black",
            "Next_Bg_Color": "rgb(49, 99, 210)",
        },
        "background": {
            "background_flag": "background_color",
            "background_color": "#fff8f8",
            "background_image": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        },
        "startscreen_configuration": {
            "startscreen": true,
            "brandLogo": "https://images.assettype.com/thecue/2019-05/dac0fb2f-a261-4a22-946f-ca1c22a6cfad/logo_2_x_3x.png",
            "startScreenText": "We would like to hear youy opinion on current call quality",
            "start_cta_Bg_color": "rgba(49, 99, 210)",
            "start_cta_text": "Start Survey",
            "startscree_subInfo": ""
        },
        "lastscreen_configuration": {
            "ThankYouText": "Thank you for your time!!",
            "ThankYouLine": "",
            "couponBoxFlag": true,
            "additionalInfo": "Get 20% off on subscription",
            "couponCode": "GET20",
            "brandLogoFlag": 'brandLogo',
            "website_Link": "https://www.thecue.in/?cpncode=test20",
            "brandLogo": "https://images.assettype.com/thecue/2019-05/dac0fb2f-a261-4a22-946f-ca1c22a6cfad/logo_2_x_3x.png",
            "website_Link_Text": "Redeem your code !"
        }
    }
}


// var fullConfiguration = {
//     "survey_config": {
//         "response_server": "https://asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
//         "id": "c96467ae-9008-4af6-b7a4-9e92c01cde70",
//         "seg": "default",
//         "questions": [
//         {
//             "id": "1",
//             "type": "TEXT_INPUT",
//             "text": "Are you aware about Tuberculosis (TB) as a disease?",
//             "options": [{
//                 "role": "option",
//                 "id": "A",
//                 "text": "Yes"
//             }, {
//                 "role": "option",
//                 "id": "B",
//                 "text": "No"
//             }],
//             "next_question": {
//                 "A": "2",
//                 "B": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "true",
//             "next_question_textInput": ""
//         }, 
        
//         {
//             "id": "2",
//             "type": "SINGLE_OPTION",
//             "text": "Are you aware that there are Tuberculosis (TB) related programs undertaken by the government?",
//             "options": [{
//                 "role": "option",
//                 "id": "C",
//                 "text": "No"
//             }, {
//                 "role": "option",
//                 "id": "D",
//                 "text": "Aware"
//             }, {
//                 "role": "option",
//                 "id": "E",
//                 "text": "Aware about such programs & aspire to participate"
//             }, {
//                 "role": "option",
//                 "id": "F",
//                 "text": "Aware & participated"
//             }],
//             "next_question": {
//                 "C": "3",
//                 "D": "3",
//                 "E": "3",
//                 "F": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "3",
//             "type": "SINGLE_OPTION",
//             "text": "Have you volunteered in past in any such programs undertaken by the government or private institutions?",
//             "options": [{
//                 "role": "option",
//                 "id": "G",
//                 "text": "Yes"
//             }, {
//                 "role": "option",
//                 "id": "H",
//                 "text": "No"
//             }],
//             "next_question": {
//                 "G": "4",
//                 "H": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "4",
//             "type": "SINGLE_OPTION",
//             "text": "Would you like to be the Changemaker/Volunteer for a National level program to impact a million lives of Tuberculosis (TB) patients?",
//             "options": [{
//                 "role": "option",
//                 "id": "I",
//                 "text": "Yes"
//             }, {
//                 "role": "option",
//                 "id": "J",
//                 "text": "No"
//             }],
//             "next_question": {
//                 "I": "8",
//                 "J": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "5",
//             "type": "MULTIPLE_OPTION",
//             "text": "What would motivate you to volunteer?",
//             "options": [{
//                 "role": "option",
//                 "id": "K",
//                 "text": "Certification /Recognition"
//             }, {
//                 "role": "option",
//                 "id": "L",
//                 "text": "New skills development"
//             }, {
//                 "role": "option",
//                 "id": "M",
//                 "text": "Self Satisfaction and Passion"
//             }, {
//                 "role": "option",
//                 "id": "N",
//                 "text": "None of the above"
//             }],
//             "next_question": {
//                 "K": "6",
//                 "L": "6",
//                 "M": "6",
//                 "N": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "6",
//             "type": "MULTIPLE_OPTION",
//             "text": "What kind of volunteering activities would you be interested in? ",
//             "options": [{
//                 "role": "option",
//                 "id": "O",
//                 "text": "Online Activation"
//             }, {
//                 "role": "option",
//                 "id": "P",
//                 "text": "Working with Community"
//             }, {
//                 "role": "option",
//                 "id": "Q",
//                 "text": "Internship with State/National Govt "
//             }, {
//                 "role": "option",
//                 "id": "R",
//                 "text": "Working with Health Care Centers"
//             }, {
//                 "role": "option",
//                 "id": "S",
//                 "text": "All of the above"
//             }],
//             "next_question": {
//                 "O": "7",
//                 "P": "7",
//                 "Q": "7",
//                 "R": "7",
//                 "S": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "7",
//             "type": "SINGLE_OPTION",
//             "text": "How long would you want to stay signed up for the program?",
//             "options": [{
//                 "role": "option",
//                 "id": "T",
//                 "text": "3 months"
//             }, {
//                 "role": "option",
//                 "id": "U",
//                 "text": "6 months"
//             }, {
//                 "role": "option",
//                 "id": "V",
//                 "text": "1 year"
//             }, {
//                 "role": "option",
//                 "id": "W",
//                 "text": "Less than 3 months"
//             }],
//             "next_question": {
//                 "T": "end",
//                 "U": "end",
//                 "V": "end",
//                 "W": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "8",
//             "type": "SINGLE_OPTION",
//             "text": "What prevents you to join the cause?",
//             "options": [{
//                 "role": "option",
//                 "id": "X",
//                 "text": "No time"
//             }, {
//                 "role": "option",
//                 "id": "Y",
//                 "text": "No interest"
//             }, {
//                 "role": "option",
//                 "id": "Z",
//                 "text": "Don’t believe in the purpose or the cause"
//             }, {
//                 "role": "option",
//                 "id": "AA",
//                 "text": "Any other"
//             }],
//             "next_question": {
//                 "X": "end",
//                 "Y": "end",
//                 "Z": "end",
//                 "AA": ""
//             },
//             "next_question_multiple": "",
//             "ispersist": "",
//             "next_question_textInput": ""
//         }],
//         "exit_url": "https://www.google.com",
//         "carousel_images": [],
//         "thankyou_text": "Next",
//         "trackers": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_first_interaction": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_creative_load": ["https://www.googly.com", "https://www.googly.com"],
//         "global_tags": [{
//             "Property_id": "G-XXXXXXX",
//             "Event_String": "string",
//             "send_to": "G-XXXXXXX"
//         }, {
//             "Property_id": "G-XXXXXXX",
//             "Event_String": "string",
//             "send_to": "G-XXXXXXX"
//         }],
//         "global_tags_first_interaction": [{
//             "Property_id": "G-XXXXXXX",
//             "Event_String": "string",
//             "send_to": "G-XXXXXXX"
//         }, {
//             "Property_id": "G-XXXXXXX",
//             "Event_String": "string",
//             "send_to": "G-XXXXXXX"
//         }],
//         "global_tags_creative_load": [{
//             "Property_id": "G-XXXXXXX",
//             "Event_String": "string",
//             "send_to": "G-XXXXXXX"
//         }, {
//             "Property_id": "G-XXXXXXX",
//             "Event_String": "string",
//             "send_to": "G-XXXXXXX"
//         }]
//     },
//     "ui_config": {
//         "creative_size": {
//             "width": 300,
//             "height": 250
//         },
//         "background": {
//             "background_flag": "#ffffff",
//             "Background_Color": "#000000",
//             "Background_Image": ""
//         },
//         "startscreen_configuration": {
//             "startscreen": true,
//             "brandLogo": "",
//             "startScreenText": "",
//             "start_cta_Bg_color": "#ffffff",
//             "start_cta_text": "",
//             "startscreen_subInfo": ""
//         },
//         "lastscreen_configuration": {
//             "ThankYouText": "Thank      YOU",
//             "ThankYouLine": "",
//             "couponBoxFlag": false,
//             "additionalInfo": "",
//             "couponCode": "",
//             "brandLogoFlag": "brandLogo",
//             "website_Link": "",
//             "brandLogo": "",
//             "website_Link_Text": ""
//         }
//     }
// }

