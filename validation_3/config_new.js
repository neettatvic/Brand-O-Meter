// var finalConfiguration = {
//     "survey_config": {
//         "response_server": "https://neet-testing-perk/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
//         "id": 'f3b17f26-94de-44c2-9bdc-56fbe4295c03',
//         "seg": "default",
//         "questions": [
//             {
//                 "id": "1",
//                 "type": "MULTIPLE_OPTION",
//                 "text": "Which chocolates do you like to eat?",
//                 "options": [{
//                     "role": "option",
//                     "id": "A",
//                     "text": "Perk"
//                 }, {
//                     "role": "option",
//                     "id": "B",
//                     "text": "Kitkat"
//                 }, {
//                     "role": "option",
//                     "id": "C",
//                     "text": "Snickers"
//                 }, {
//                     "role": "option",
//                     "id": "D",
//                     "text": "Munch"
//                 }],
// "next_question": {
//     "A": "2",
//     "B": "2",
//     "C": "2",
//     "D": "2",
// },
//                 "next_question_multiple": {
//                     "A": "2",
//                     "B": "2",
//                     "C": "2",
//                     "D": "2",
//                     "AB": "2",
//                     "AC": "2",
//                     "AD": "2",
//                     "BC": "2",
//                     "BD": "2",
//                     "CD": "2",
//                     "ABC": "2",
//                     "ACD": "2",
//                     "ABD": "2",
//                     "BCD": "2",
//                     "ABCD": "3",
//                 }
//             },
//             {
//                 "id": "2",
//                 "type": "SINGLE_OPTION",
//                 "text": "Which Programing Language did you learn ?",
//                 "options": [{
//                     "role": "option",
//                     "id": "E",
//                     "text": "Java"
//                 }, {
//                     "role": "option",
//                     "id": "F",
//                     "text": "JavaScript"
//                 }, {
//                     "role": "option",
//                     "id": "G",
//                     "text": "C#"
//                 }, {
//                     "role": "option2",
//                     "id": "H",
//                     "text": "Appscript"
//                 }],
//                 "next_question": {
//                     "E": "3",
//                     "F": "3",
//                     "G": "3",
//                     "H": "3",
//                 },
//                 "next_question_multiple": {
//                     "E": "3",
//                     "F": "3",
//                     "G": "3",
//                     "H": "3",
//                     "EF": "3",
//                     "EG": "3",
//                     "EH": "3",
//                     "FG": "3",
//                     "FH": "3",
//                     "GH": "3",
//                     "EFG": "3",
//                     "EFH": "3",
//                     "EGH": "3",
//                     "FGH": "3",
//                     "EFGH": "1",
//                 }
//             },
//             {
//                 "id": "3",
//                 "type": "MULTIPLE_OPTION",
//                 "text": "Which Food did you like ?",
//                 "options": [{
//                     "role": "option",
//                     "id": "I",
//                     "text": "Indian dish"
//                 }, {
//                     "role": "option",
//                     "id": "J",
//                     "text": "Italian dish"
//                 }, {
//                     "role": "option",
//                     "id": "K",
//                     "text": "Mexican dish"
//                 }, {
//                     "role": "option2",
//                     "id": "L",
//                     "text": "Chinese dish"
//                 }],
//                 "next_question": {
//                     "I": "4",
//                     "J": "4",
//                     "K": "4",
//                     "L": "4",
//                 },
//                 "next_question_multiple": {
//                     "I": "4",
//                     "J": "4",
//                     "K": "4",
//                     "L": "4",
//                     "IJ": "4",
//                     "IK": "4",
//                     "IL": "4",
//                     "JK": "4",
//                     "JL": "4",
//                     "KL": "4",
//                     "IJK": "4",
//                     "IKL": "4",
//                     "IJL": "4",
//                     "JKL": "4",
//                     "IJKL": "1",
//                 }
//             },
//             {
//                 "id": "4",
//                 "type": "SINGLE_OPTION",
//                 "text": "Would you like our team reach out to you?",
//                 "options": [{
//                     "role": "option",
//                     "id": "M",
//                     "text": "Yes"
//                 }, {
//                     "role": "option",
//                     "id": "N",
//                     "text": "No"
//                 }],
//                 "next_question": {
//                     "M": "5",
//                     "N": "end"
//                 },
//                 "next_question_multiple": "",
//                 "ispersist": "",
//                 "next_question_textInput": ""
//             },
//             {
//                 "id": "5",
//                 "type": "INPUT_OPTION",
//                 "text": "What is your email id? ",
//                 "label": "Email",
//                 "label_id": "O",
//                 "next_question": {
//                     "O": "6"
//                 },
//                 "next_question_multiple": "",
//                 "ispersist": "",
//                 "next_question_textInput": ""
//             },
//             {
//                 "id": "6",
//                 "type": "INPUT_OPTION",
//                 "text": "What is your phone number? ",
//                 "label": "Number/Email",
//                 "label_id": "P",
//                 "next_question": {
//                     "P": "end"
//                 },
//                 "next_question_multiple": "",
//                 "ispersist": "",
//                 "next_question_textInput": ""
//             }
//         ],
//         "exit_url": "https://www.google.com",
//         "carousel_images": [],
//         "thankyou_text": 'thankYouText',
//         "trackers": [
//             "https://www.googly.com/trackers_thanks_intreaction"
//         ],
//         "trackers_first_interaction": [
//             "https://www.googly.com/trackers_first_interaction"
//         ],
//         "trackers_creative_load": [
//             "https://www.googly.com/trackers_creative_load",
//             "https://www.google.com/trackers_creative_load",
//             "https://www.googleeeeee.com/trackers_creative_load"
//         ],
//         "Gtag_Details": [
//         {
//             "Property_id": "UA-123456-7",
//             "Domain": "www.example.com",
//         }],
//     },
//     "ui_config": {
//         "creative_size": {
//             "width": 300,
//             "height": 250,
//             "button_bg_color": "rgba(49, 99, 210)",
//         },
//         "basic_creative_config": {
//             "Question_Font_Size": "16px",
//             "Quention_Font_Color": "rgb(49, 99, 210)",
//             "Answer_Font_Size": "13px",
//             "Answer_Font_Color": "#545454", //option font is dark
//             "Options_bg_Color": "rgba(231, 208, 208, 0.76)", //option bg is light
//             "Options_Hover_bg_Color": "", // not configured 
//             "Answer_Font_Color_On_Option_Hover": "", // not configured 
//             "Answer_Font_Color_On_Option_selection": "White",  //selection font is light
//             "Option_selection_bg_Color": "rgb(49, 99, 210)",  //selection bg is dark
//             "Next_Btn_text": "Continue",
//             "Next_Font_Color": "White",
//             "Next_Bg_Color": "rgb(49, 99, 210)",
//         },
//         "background": {
//             "background_flag": "background_color",
//             "background_color": "#fff8f8",
//             "background_image": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//         },
//         "startscreen_configuration": {
// "startscreen": true,
// "brandLogo": "https://images.assettype.com/thecue/2019-05/dac0fb2f-a261-4a22-946f-ca1c22a6cfad/logo_2_x_3x.png",
// "startScreenText": "We would like to hear your opinion on current website behaviour",
// "startScreenTextColor": "rgb(49, 99, 210)",
// "start_cta_Bg_color": "rgba(49, 99, 210)",
// "start_cta_text": "Start Survey",
// "startscree_subInfo": ""
//         },
//         "lastscreen_configuration": {
//             "ThankYouText": "Thank you for your time!!",
//             "ThankYouTextColor": "rgb(49, 99, 210)",
//             "ThankYouLine": "",
//             "couponBoxFlag": true,
//             "additionalInfo": "Get 20% off on subscription",
//             "couponCode": "GET20",
//             "copybtnFontColor": "white",
//             "copybtnBgColor": "rgba(49, 99, 210)",
//             "brandLogoFlag": 'website_Link_Text',
//             "website_Link": "https://www.thecue.in/?cpncode=test20",
//             "brandLogo": "https://images.assettype.com/thecue/2019-05/dac0fb2f-a261-4a22-946f-ca1c22a6cfad/logo_2_x_3x.png",
//             "website_Link_Text": "Redeem your code !"
//         }
//     }
// }

// var finalConfiguration = {
//     "survey_config": {
//         "response_server": "https://asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
//         "id": "fb76f75e-af7b-4375-99f7-8510416245e4",
//         "seg": "default",
//         "questions": [{
//             "id": "1",
//             "type": "SINGLE_OPTION",
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
//                 "B": "3"
//             },
//             "next_question_multiple": {
//                 "A": "",
//                 "B": "",
//                 "AB": "",
//                 "C": "",
//                 "AC": "",
//                 "BC": "",
//                 "ABC": "",
//                 "D": "",
//                 "AD": "",
//                 "BD": "",
//                 "ABD": "",
//                 "CD": "",
//                 "ACD": "",
//                 "BCD": "",
//                 "ABCD": ""
//             },
//             "next_question_textInput": "8"
//         }, {
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
//                 "F": "3"
//             },
//             "next_question_multiple": {
//                 "E": "",
//                 "F": "2",
//                 "EF": "3",
//                 "G": "2",
//                 "EG": "",
//                 "FG": "",
//                 "EFG": "",
//                 "H": "",
//                 "EH": "",
//                 "FH": "",
//                 "EFH": "",
//                 "GH": "",
//                 "EGH": "",
//                 "FGH": "",
//                 "EFGH": ""
//             },
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
//                 "H": "4"
//             },
//             "next_question_multiple": {
//                 "I": "",
//                 "J": "",
//                 "K": "",
//                 "L": "",
//                 "IJ": "",
//                 "IK": "",
//                 "IL": "",
//                 "IJK": "",
//                 "IJL": "",
//                 "IKL": "",
//                 "IJKL": "",
//                 "JK": "3",
//                 "JL": "3",
//                 "KL": "3",
//                 "JKL": "3"
//             },
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
//                 "I": "5",
//                 "J": "6"
//             },
//             "next_question_multiple": "",
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
//                 "N": "6"
//             },
//             "next_question_multiple": {
//                 "Q": "6",
//                 "R": "6",
//                 "S": "6",
//                 "T": "6",
//                 "QR": "6",
//                 "QS": "6",
//                 "QT": "6",
//                 "QRS": "6",
//                 "QRT": "6",
//                 "QST": "6",
//                 "QRST": "6",
//                 "RS": "6",
//                 "RT": "6",
//                 "ST": "6",
//                 "RST": "6"
//             },
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
//             }],
//             "next_question": {
//                 "O": "7",
//                 "P": "7",
//                 "Q": "7",
//                 "R": "7"
//             },
//             "next_question_multiple": {
//                 "U": "7",
//                 "V": "7",
//                 "W": "7",
//                 "X": "7",
//                 "UV": "7",
//                 "UW": "7",
//                 "UX": "7",
//                 "UVW": "7",
//                 "UVX": "7",
//                 "UWX": "7",
//                 "UVWX": "7",
//                 "VW": "7",
//                 "VX": "7",
//                 "WX": "7",
//                 "VWX": "7"
//             },
//             "next_question_textInput": ""
//         }, {
//             "id": "7",
//             "type": "SINGLE_OPTION",
//             "text": "How long would you want to stay signed up for the program?",
//             "options": [{
//                 "role": "option",
//                 "id": "S",
//                 "text": "3 months"
//             }, {
//                 "role": "option",
//                 "id": "T",
//                 "text": "6 months"
//             }, {
//                 "role": "option",
//                 "id": "U",
//                 "text": "1 year"
//             }, {
//                 "role": "option",
//                 "id": "V",
//                 "text": "Less than 3 months"
//             }],
//             "next_question": {
//                 "S": "end",
//                 "T": "8",
//                 "U": "",
//                 "V": ""
//             },
//             "next_question_multiple": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "8",
//             "type": "SINGLE_OPTION",
//             "text": "What prevents you to join the cause?",
//             "options": [{
//                 "role": "option",
//                 "id": "W",
//                 "text": "No time"
//             }, {
//                 "role": "option",
//                 "id": "X",
//                 "text": "No interest"
//             }, {
//                 "role": "option",
//                 "id": "Y",
//                 "text": "Don’t believe in the purpose or the cause"
//             }, {
//                 "role": "option",
//                 "id": "Z",
//                 "text": "Any other"
//             }],
//             "next_question": {
//                 "W": "end",
//                 "X": "9",
//                 "Y": "",
//                 "Z": ""
//             },
//             "next_question_multiple": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "9",
//             "type": "INPUT_OPTION",
//             "text": "what is your email id ?",
//             "options": [],
//             "next_question": {},
//             "label": "Email/Number",
//             "label_id": "AA",
//             "next_question_multiple": "",
//             "next_question_textInput": "end "
//         }],
//         "exit_url": "https://www.google.com",
//         "carousel_images": [],
//         "thankyou_text": "Next",
//         "trackers": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_first_interaction": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_creative_load": ["https://www.googly.com", "https://www.googly.com"],
//         "Gtag_Details": [{
//             "Property_id": "",
//             "Domain": ""
//         }]
//     },
//     "ui_config": {
//         "creative_size": {
//             "width": 300,
//             "height": 250
//         },
//         "basic_creative_config": {
//             "Question_Font_Size": "16px",
//             "Quention_Font_Color": "#00ff00",
//             "Answer_Font_Size": "13px",
//             "Answer_Font_Color": "#00ffff",
//             "Options_bg_Color": "#9fc5e8",
//             "Options_Hover_bg_Color": "#ffff00",
//             "Answer_Font_Color_On_Option_Hover": "#000000",
//             "Option_selection_bg_Color": "#666666",
//             "Answer_Font_Color_On_Option_selection": "#93c47d",
//             "Next_Font_Color": "#ffffff",
//             "Next_Btn_text": "",
//             "Next_Bg_Color": "#45818e"
//         },
//         "background": {
//             "background_flag": "Background Color",
//             "Background Color": "#000000",
//             "Background Image": ""
//         },
//         "startscreen_configuration": {
//             "startscreen": true,
//             "brandLogo": "https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/d0/fc/29/d0fc2926-bcf8-88f4-285f-f852265aa9b7/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
//             "startScreenText": "We would like to hear your feedback",
//             "start_cta_Bg_color": "#45818e",
//             "start_cta_text": "Start Survey",
//             "startscreen_subInfo": "",
//             "startScreenTextColor": "Red"
//         },
//         "lastscreen_configuration": {
//             "ThankYouText": "Thank You for your time! ",
//             "ThankYouLine": "",
//             "couponBoxFlag": true,
//             "additionalInfo": "Get 40% off on subscription",
//             "couponCode": "40OFF",
//             "brandLogoFlag": "brandLogo",
//             "website_Link": "https://apps.apple.com/in/app/the-times-of-india/id427589329",
//             "brandLogo": "",
//             "website_Link_Text": "Download TOI APP ",
//             "ThankYouTextColor": "#b4a7d6",
//             "copybtnFontColor": "#741b47",
//             "copybtnBgColor": "#00ff00"
//         }
//     }
// }

// var finalConfiguration = {
//     "survey_config": {
//         "response_server": "https://neet-asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
//         "id": "63743482-4a84-4988-8d9b-b0a767244c57",
//         "seg": "default",
//         "questions": [{
//             "id": "1",
//             "type": "SINGLE_OPTION",
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
//                 "B": "3"
//             },
//             "next_question_multiple": {
//                 "A": "",
//                 "B": "",
//                 "AB": "",
//                 "C": "",
//                 "AC": "",
//                 "BC": "",
//                 "ABC": "",
//                 "D": "",
//                 "AD": "",
//                 "BD": "",
//                 "ABD": "",
//                 "CD": "",
//                 "ACD": "",
//                 "BCD": "",
//                 "ABCD": ""
//             },
//             "next_question_textInput": "8"
//         }, {
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
//                 "F": "3"
//             },
//             "next_question_multiple": {
//                 "C": "",
//                 "D": "2",
//                 "CD": "3",
//                 "E": "2",
//                 "CE": "",
//                 "DE": "",
//                 "CDE": "",
//                 "F": "",
//                 "CF": "",
//                 "DF": "",
//                 "CDF": "",
//                 "EF": "",
//                 "CEF": "",
//                 "DEF": "",
//                 "CDEF": ""
//             },
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
//                 "H": "4"
//             },
//             "next_question_multiple": {
//                 "G": "",
//                 "H": "",
//                 "C": "",
//                 "D": "",
//                 "GH": "",
//                 "AC": "",
//                 "AD": "",
//                 "ABC": "",
//                 "ABD": "",
//                 "ACD": "",
//                 "ABCD": "",
//                 "BC": "3",
//                 "BD": "3",
//                 "CD": "3",
//                 "BCD": "3"
//             },
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
//                 "I": "5",
//                 "J": "6"
//             },
//             "next_question_multiple": "",
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
//                 "N": "6"
//             },
//             "next_question_multiple": {
//                 "K": "6",
//                 "L": "6",
//                 "M": "6",
//                 "N": "6",
//                 "KL": "6",
//                 "KM": "6",
//                 "KN": "6",
//                 "KLM": "6",
//                 "KLN": "6",
//                 "KMN": "6",
//                 "KLMN": "6",
//                 "LM": "6",
//                 "LN": "6",
//                 "MN": "6",
//                 "LMN": "6"
//             },
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
//             }],
//             "next_question": {
//                 "O": "7",
//                 "P": "7",
//                 "Q": "7",
//                 "R": "7"
//             },
//             "next_question_multiple": {
//                 "O": "7",
//                 "P": "7",
//                 "Q": "7",
//                 "R": "7",
//                 "OP": "7",
//                 "OQ": "7",
//                 "OR": "7",
//                 "OPQ": "7",
//                 "OPR": "7",
//                 "OQR": "7",
//                 "OPQR": "7",
//                 "PQ": "7",
//                 "PR": "7",
//                 "QR": "7",
//                 "PQR": "7"
//             },
//             "next_question_textInput": ""
//         }, {
//             "id": "7",
//             "type": "SINGLE_OPTION",
//             "text": "How long would you want to stay signed up for the program?",
//             "options": [{
//                 "role": "option",
//                 "id": "S",
//                 "text": "3 months"
//             }, {
//                 "role": "option",
//                 "id": "T",
//                 "text": "6 months"
//             }, {
//                 "role": "option",
//                 "id": "U",
//                 "text": "1 year"
//             }, {
//                 "role": "option",
//                 "id": "V",
//                 "text": "Less than 3 months"
//             }],
//             "next_question": {
//                 "S": "end",
//                 "T": "8",
//                 "U": "8",
//                 "V": "8"
//             },
//             "next_question_multiple": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "8",
//             "type": "SINGLE_OPTION",
//             "text": "What prevents you to join the cause?",
//             "options": [{
//                 "role": "option",
//                 "id": "W",
//                 "text": "No time"
//             }, {
//                 "role": "option",
//                 "id": "X",
//                 "text": "No interest"
//             }, {
//                 "role": "option",
//                 "id": "Y",
//                 "text": "Don’t believe in the purpose or the cause"
//             }, {
//                 "role": "option",
//                 "id": "Z",
//                 "text": "Any other"
//             }],
//             "next_question": {
//                 "W": "end",
//                 "X": "9",
//                 "Y": "9",
//                 "Z": "9"
//             },
//             "next_question_multiple": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "9",
//             "type": "INPUT_OPTION",
//             "text": "what is your email id ?",
//             "options": [],
//             "next_question": {},
//             "label": "Email/Number",
//             "label_id": "AA",
//             // "next_question": {
//             //     "AA": "end"
//             // },
//             "next_question_multiple": "",
//             "next_question_textInput": "end"
//         }],
//         "exit_url": "https://www.google.com",
//         "carousel_images": [],
//         "thankyou_text": "Next",
//         "trackers": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_first_interaction": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_creative_load": ["https://www.googly.com", "https://www.googly.com"],
//         "Gtag_Details": [{
//             "Property_id": "UA-1234567-8",
//             "Domain": "www.domain.com",  
//         }]
//     },
//     "ui_config": {
//         "creative_size": {
//             "width": 300,
//             "height": 250
//         },
//         "basic_creative_config": {
//             "Question_Font_Size": "16px",
//             "Quention_Font_Color": "#00ff00",
//             "Answer_Font_Size": "13px",
//             "Answer_Font_Color": "#00ffff",
//             "Options_bg_Color": "#9fc5e8",
//             "Options_Hover_bg_Color": "#ffff00",
//             "Answer_Font_Color_On_Option_Hover": "#000000",
//             "Option_selection_bg_Color": "#666666",
//             "Answer_Font_Color_On_Option_selection": "#93c47d",
//             "Next_Font_Color": "#ffffff",
//             "Next_Btn_text": "Next",
//             "Next_Bg_Color": "#45818e"
//         },
//         "background": {
//             "background_flag": "Background Color",
//             "background_color": "#000000",
//             "background_image": ""
//         },
//         "startscreen_configuration": {
//             "startscreen": true,
//             "brandLogo": "https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/d0/fc/29/d0fc2926-bcf8-88f4-285f-f852265aa9b7/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
//             "startScreenText": "We would like to hear your feedback",
//             "start_cta_Bg_color": "#45818e",
//             "start_cta_text": "Start Survey",
//             "startscreen_subInfo": "",
//             "startScreenTextColor": "#ffffff"
//         },
//         "lastscreen_configuration": {
//             "ThankYouText": "Thank You for your time! ",
//             "ThankYouLine": "",
//             "couponBoxFlag": true,
//             "additionalInfo": "Get 40% off on subscription",
//             "couponCode": "40OFF",
//             "brandLogoFlag": "website_Link_Text",
//             "website_Link": "https://apps.apple.com/in/app/the-times-of-india/id427589329",
//             "brandLogo": "",
//             "website_Link_Text": "Download TOI APP ",
//             "ThankYouTextColor": "#b4a7d6",
//             "copybtnFontColor": "#741b47",
//             "copybtnBgColor": "#b4a7d6"
//         }
//     }
// }


// var finalConfiguration = {
//     "survey_config": {
//         "response_server": "https://test-asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
//         "id": "b04fd261-d810-453f-bddb-915bf38fb25b",
//         "seg": "default",
//         "questions": [{
//             "id": "1",
//             "type": "SINGLE_OPTION",
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
//                 "B": "3"
//             },
//             "next_question_multiple": "",
//             "next_question_textInput": "8"
//         }, {
//             "id": "2",
//             "type": "MULTIPLE_OPTION",
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
//                 "F": "3"
//             },
//             "next_question_multiple": {
//                 "C": "3",
//                 "D": "3",
//                 "CD": "3",
//                 "E": "3",
//                 "CE": "3",
//                 "DE": "3",
//                 "CDE": "3",
//                 "F": "3",
//                 "CF": "3",
//                 "DF": "3",
//                 "CDF": "3",
//                 "EF": "3",
//                 "CEF": "3",
//                 "DEF": "3",
//                 "CDEF": "3"
//             },
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
//                 "H": "4"
//             },
//             "next_question_multiple": "",
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
//                 "I": "5",
//                 "J": "6"
//             },
//             "next_question_multiple": "",
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
//                 "N": "6"
//             },
//             "next_question_multiple": {
//                 "K": "6",
//                 "L": "6",
//                 "M": "6",
//                 "N": "6",
//                 "KL": "6",
//                 "KM": "6",
//                 "KN": "6",
//                 "KLM": "6",
//                 "KLN": "6",
//                 "KMN": "6",
//                 "KLMN": "6",
//                 "LM": "6",
//                 "LN": "6",
//                 "MN": "6",
//                 "LMN": "6"
//             },
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
//             }],
//             "next_question": {
//                 "O": "7",
//                 "P": "7",
//                 "Q": "7",
//                 "R": "7"
//             },
//             "next_question_multiple": {
//                 "O": "7",
//                 "P": "7",
//                 "Q": "7",
//                 "R": "7",
//                 "OP": "7",
//                 "OQ": "7",
//                 "OR": "7",
//                 "OPQ": "7",
//                 "OPR": "7",
//                 "OQR": "7",
//                 "OPQR": "7",
//                 "PQ": "7",
//                 "PR": "7",
//                 "QR": "7",
//                 "PQR": "7"
//             },
//             "next_question_textInput": ""
//         }, {
//             "id": "7",
//             "type": "SINGLE_OPTION",
//             "text": "How long would you want to stay signed up for the program?",
//             "options": [{
//                 "role": "option",
//                 "id": "S",
//                 "text": "3 months"
//             }, {
//                 "role": "option",
//                 "id": "T",
//                 "text": "6 months"
//             }, {
//                 "role": "option",
//                 "id": "U",
//                 "text": "1 year"
//             }, {
//                 "role": "option",
//                 "id": "V",
//                 "text": "Less than 3 months"
//             }],
//             "next_question": {
//                 "S": "end",
//                 "T": "8",
//                 "U": "8",
//                 "V": "8"
//             },
//             "next_question_multiple": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "8",
//             "type": "SINGLE_OPTION",
//             "text": "What prevents you to join the cause?",
//             "options": [{
//                 "role": "option",
//                 "id": "W",
//                 "text": "No time"
//             }, {
//                 "role": "option",
//                 "id": "X",
//                 "text": "No interest"
//             }, {
//                 "role": "option",
//                 "id": "Y",
//                 "text": "Don’t believe in the purpose or the cause"
//             }, {
//                 "role": "option",
//                 "id": "Z",
//                 "text": "Any other"
//             }],
//             "next_question": {
//                 "W": "end",
//                 "X": "9",
//                 "Y": "9",
//                 "Z": "9"
//             },
//             "next_question_multiple": "",
//             "next_question_textInput": ""
//         }, {
//             "id": "9",
//             "type": "INPUT_OPTION",
//             "text": "what is your email id ?",
//             "options": [],
//             "next_question": {},
//             "label": "Email/Number",
//             "label_id": "AA",
//             "next_question_multiple": "",
//             "next_question_textInput": "end "
//         }],
//         "exit_url": "https://www.google.com",
//         "carousel_images": [],
//         "thankyou_text": "Next",
//         "trackers": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_first_interaction": ["https://www.googly.com", "https://www.googly.com"],
//         "trackers_creative_load": ["https://www.googly.com", "https://www.googly.com"],
//         "Gtag_Details": [{
//             "Property_id": "UA-1234567-8",
//             "Domain": ""
//         }]
//     },
//     "ui_config": {
//         "creative_size": {
//             "width": 300,
//             "height": 250
//         },
//         "basic_creative_config": {
//             "Question_Font_Size": "16px",
//             "Quention_Font_Color": "#3c78d8",
//             "Answer_Font_Size": "13px",
//             "Answer_Font_Color": "#666666",
//             "Options_bg_Color": "#9fc5e8",
//             "Options_Hover_bg_Color": "#ffffff",
//             "Answer_Font_Color_On_Option_Hover": "#ffffff",
//             "Option_selection_bg_Color": "#3c78d8",
//             "Answer_Font_Color_On_Option_selection": "#ffffff",
//             "Next_Font_Color": "#ffffff",
//             "Next_Btn_text": "Next",
//             "Next_Bg_Color": "#3c78d8"
//         },
//         "background": {
//             "background_flag": "background_color",
//             "background_color": "#fce5cd",
//             "background_image": ""
//         },
//         "startscreen_configuration": {
//             "startscreen": true,
//             "brandLogo": "https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/d0/fc/29/d0fc2926-bcf8-88f4-285f-f852265aa9b7/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
//             "startScreenText": "We would like to hear your feedback",
//             "start_cta_Bg_color": "#3c78d8",
//             "start_cta_text": "Start Survey",
//             "startscreen_subInfo": "",
//             "startScreenTextColor": "#e06666"
//         },
//         "lastscreen_configuration": {
//             "ThankYouText": "Thank You for your time! ",
//             "ThankYouLine": "",
//             "couponBoxFlag": true,
//             "additionalInfo": "Get 40% off on subscription",
//             "couponCode": "40OFF",
//             "brandLogoFlag": "website_Link_Text",
//             "website_Link": "https://apps.apple.com/in/app/the-times-of-india/id427589329",
//             "brandLogo": "",
//             "website_Link_Text": "Download TOI APP ",
//             "ThankYouTextColor": "#741b47",
//             "copybtnFontColor": "#741b47",
//             "copybtnBgColor": "#b4a7d6"
//         }
//     }
// }

var finalConfiguration = {
    "survey_config": {
        "response_server": "https://test-asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
        "id": "3a4f8d88-0ae6-4b79-a90b-3efb9a7bef0e",
        "seg": "default",
        "questions": [{
            "id": "1",
            "type": "SINGLE_OPTION",
            "text": "Are you aware about Tuberculosis (TB) as a disease?",
            "options": [{
                "role": "option",
                "id": "A",
                "text": "Yes"
            }, {
                "role": "option",
                "id": "B",
                "text": "No"
            }],
            "next_question": {
                "A": "2",
                "B": "3"
            },
            "next_question_multiple": "",
            "next_question_textInput": "8"
        }, {
            "id": "2",
            "type": "MULTIPLE_OPTION",
            "text": "Are you aware there are Tuberculosis related programs taken by the government?",
            "options": [{
                "role": "option",
                "id": "C",
                "text": "No"
            }, {
                "role": "option",
                "id": "D",
                "text": "Aware"
            }, {
                "role": "option",
                "id": "E",
                "text": "Aware about programs & aspire to participate"
            }, {
                "role": "option",
                "id": "F",
                "text": "Aware & participated"
            }],
            "next_question": {
                "C": "3",
                "D": "3",
                "E": "3",
                "F": "3"
            },
            "next_question_multiple": {
                "C": "3",
                "D": "3",
                "CD": "3",
                "E": "3",
                "CE": "3",
                "DE": "3",
                "CDE": "3",
                "F": "3",
                "CF": "3",
                "DF": "3",
                "CDF": "3",
                "EF": "3",
                "CEF": "3",
                "DEF": "3",
                "CDEF": "3"
            },
            "next_question_textInput": ""
        }, {
            "id": "3",
            "type": "SINGLE_OPTION",
            "text": "Have you volunteered in past in any such programs undertaken by the government or private institutions?",
            "options": [{
                "role": "option",
                "id": "G",
                "text": "Yes"
            }, {
                "role": "option",
                "id": "H",
                "text": "No"
            }],
            "next_question": {
                "G": "4",
                "H": "4"
            },
            "next_question_multiple": "",
            "next_question_textInput": ""
        }, {
            "id": "4",
            "type": "SINGLE_OPTION",
            "text": "Would you like to be the Changemaker/Volunteer for a National level program to impact a million lives of Tuberculosis (TB) patients?",
            "options": [{
                "role": "option",
                "id": "I",
                "text": "Yes"
            }, {
                "role": "option",
                "id": "J",
                "text": "No"
            }],
            "next_question": {
                "I": "5",
                "J": "6"
            },
            "next_question_multiple": "",
            "next_question_textInput": ""
        }, {
            "id": "5",
            "type": "MULTIPLE_OPTION",
            "text": "What would motivate you to volunteer?",
            "options": [{
                "role": "option",
                "id": "K",
                "text": "Certification /Recognition"
            }, {
                "role": "option",
                "id": "L",
                "text": "New skills development"
            }, {
                "role": "option",
                "id": "M",
                "text": "Self Satisfaction and Passion"
            }, {
                "role": "option",
                "id": "N",
                "text": "None of the above"
            }],
            "next_question": {
                "K": "6",
                "L": "6",
                "M": "6",
                "N": "6"
            },
            "next_question_multiple": {
                "K": "6",
                "L": "6",
                "M": "6",
                "N": "6",
                "KL": "6",
                "KM": "6",
                "KN": "6",
                "KLM": "6",
                "KLN": "6",
                "KMN": "6",
                "KLMN": "6",
                "LM": "6",
                "LN": "6",
                "MN": "6",
                "LMN": "6"
            },
            "next_question_textInput": ""
        }, {
            "id": "6",
            "type": "MULTIPLE_OPTION",
            "text": "What kind of volunteering activities would you be interested in? ",
            "options": [{
                "role": "option",
                "id": "O",
                "text": "Online Activation"
            }, {
                "role": "option",
                "id": "P",
                "text": "Working with Community"
            }, {
                "role": "option",
                "id": "Q",
                "text": "Internship with State/National Govt "
            }, {
                "role": "option",
                "id": "R",
                "text": "Working with Health Care Centers"
            }],
            "next_question": {
                "O": "7",
                "P": "7",
                "Q": "7",
                "R": "7"
            },
            "next_question_multiple": {
                "O": "7",
                "P": "7",
                "Q": "7",
                "R": "7",
                "OP": "7",
                "OQ": "7",
                "OR": "7",
                "OPQ": "7",
                "OPR": "7",
                "OQR": "7",
                "OPQR": "7",
                "PQ": "7",
                "PR": "7",
                "QR": "7",
                "PQR": "7"
            },
            "next_question_textInput": ""
        }, {
            "id": "7",
            "type": "SINGLE_OPTION",
            "text": "How long would you want to stay signed up for the program?",
            "options": [{
                "role": "option",
                "id": "S",
                "text": "3 months"
            }, {
                "role": "option",
                "id": "T",
                "text": "6 months"
            }, {
                "role": "option",
                "id": "U",
                "text": "1 year"
            }, {
                "role": "option",
                "id": "V",
                "text": "Less than 3 months"
            }],
            "next_question": {
                "S": "end",
                "T": "8",
                "U": "8",
                "V": "8"
            },
            "next_question_multiple": "",
            "next_question_textInput": ""
        }, {
            "id": "8",
            "type": "SINGLE_OPTION",
            "text": "What prevents you to join the cause?",
            "options": [{
                "role": "option",
                "id": "W",
                "text": "No time"
            }, {
                "role": "option",
                "id": "X",
                "text": "No interest"
            }, {
                "role": "option",
                "id": "Y",
                "text": "Don’t believe in the purpose or the cause"
            }, {
                "role": "option",
                "id": "Z",
                "text": "Any other"
            }],
            "next_question": {
                "W": "end",
                "X": "9",
                "Y": "9",
                "Z": "9"
            },
            "next_question_multiple": "",
            "next_question_textInput": ""
        }, {
            "id": "9",
            "type": "INPUT_OPTION",
            "text": "what is your email id ?",
            "options": [],
            "next_question": {},
            "label": "Email/Number",
            "label_id": "AA",
            "next_question_multiple": "",
            "next_question_textInput": "end "
        }],
        "exit_url": "https://www.google.com",
        "carousel_images": [],
        "thankyou_text": "Next",
        "trackers": ["https://www.googly.com", "https://www.googly.com"],
        "trackers_first_interaction": ["https://www.googly.com", "https://www.googly.com"],
        "trackers_creative_load": ["https://www.googly.com", "https://www.googly.com"],
        "Gtag_Details": [{
            "Property_id": "UA-1234567-8",
            "Domain": "www.domain.com"
        }]
    },
    "ui_config": {
        "creative_size": {
            "width": 300,
            "height": 250
        },
        "basic_creative_config": {
            "Question_Font_Size": "16px",
            "Quention_Font_Color": "#1155cc",
            "Answer_Font_Size": "13px",
            "Answer_Font_Color": "black",
            "Options_bg_Color": "#6fa8dc",
            "Options_Hover_bg_Color": "#ffffff",
            "Answer_Font_Color_On_Option_Hover": "#ffffff",
            "Option_selection_bg_Color": "#1155cc",
            "Answer_Font_Color_On_Option_selection": "#ffffff",
            "Next_Font_Color": "#ffffff",
            "Next_Btn_text": "Next",
            "Next_Bg_Color": "#1155cc"
        },
        "background": {
            "background_flag": "background_color",
            "background_color": "#cfe2f3",
            "background_image": ""
        },
        "startscreen_configuration": {
            "startscreen": true,
            "brandLogo": "https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/d0/fc/29/d0fc2926-bcf8-88f4-285f-f852265aa9b7/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp",
            "startScreenText": "We would like to hear your feedback",
            "start_cta_Bg_color": "#1155cc",
            "start_cta_text": "Start Survey",
            "startscreen_subInfo": "",
            "startScreenTextColor": "#1155cc"
        },
        "lastscreen_configuration": {
            "ThankYouText": "Thank You for your time! ",
            "ThankYouLine": "",
            "couponBoxFlag": true,
            "additionalInfo": "Get 40% off on subscription",
            "couponCode": "40OFF",
            "brandLogoFlag": "website_Link_Text",
            "website_Link": "https://apps.apple.com/in/app/the-times-of-india/id427589329",
            "brandLogo": "",
            "website_Link_Text": "Download TOI APP ",
            "ThankYouTextColor": "#741b47",
            "copybtnFontColor": "#741b47",
            "copybtnBgColor": "#b4a7d6"
        }
    }
}   