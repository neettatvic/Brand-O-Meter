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
                    "ACD": "2",
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
                    "EGH": "3",
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
                    "text": "Italian dish"
                }, {
                    "role": "option",
                    "id": "K",
                    "text": "Mexican dish"
                }, {
                    "role": "option2",
                    "id": "L",
                    "text": "Chinese dish"
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
                    "IJL": "4",
                    "JKL": "4",
                    "IJKL": "1",
                }
            },
            {
                "id": "4",
                "type": "SINGLE_OPTION",
                "text": "Would you like our team reach out to you?",
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
                    "M": "5",
                    "N": "end"
                },
                "next_question_multiple": "",
                "ispersist": "",
                "next_question_textInput": ""
            },
            {
                "id": "5",
                "type": "INPUT_OPTION",
                "text": "What is your email id? ",
                "label":"Email",
                "label_id":"O",
                "next_question": {
                    "O": "6"
                },
                "next_question_multiple": "",
                "ispersist": "",
                "next_question_textInput": ""
            },
            {
                "id": "6",
                "type": "INPUT_OPTION",
                "text": "What is your phone number? ",
                "label":"Number/Email",
                "label_id":"P",
                "next_question": {
                    "P": "end"
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

        "global_tags": [
        {
            "Property_id": "UA-123456-7",
            "Event_String": "'event', 'login0', {'method': 'Google'}",
            "send_to": "UA-123456-7"
        }, 
        {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }],
        "global_tags_first_interaction": [
            {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }, 
        {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }],
        "global_tags_creative_load": [
        {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }, 
        {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }]
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
            "Answer_Font_Color": "#545454", //option font is dark
            "Options_bg_Color":"rgba(231, 208, 208, 0.76)", //option bg is light
            "Options_Hover_bg_Color": "", // not configured 
            "Answer_Font_Color_On_Option_Hover":"", // not configured 
            "Answer_Font_Color_On_Option_selection":"White",  //selection font is light
            "Option_selection_bg_Color":"rgb(49, 99, 210)",  //selection bg is dark
            "Next_Btn_text": "Continue",
            "Next_Font_Color": "White",
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
            "startScreenText": "We would like to hear your opinion on current website behaviour",
            "startScreenTextColor": "rgb(49, 99, 210)",
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

