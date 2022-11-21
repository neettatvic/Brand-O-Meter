var fullConfiguration = {
    "survey_config": {
        "response_server": "https://asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
        "id": "f3b17f26-94de-44c2-9bdc-56fbe4295c0a",
        "seg": "default",
        "questions": [
            {
            "id": "1",
            "type": "MULTIPLE_OPTION",
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
                "B": "2"
            },
            "next_question_multiple": {
                "A": "1",
                "B": "2",
                "AB": "3",
                "C": "4",
                "AC": "5",
                "BC": "10",
                "ABC": "21",
                "D": "11",
                "AD": "12",
                "BD": "123",
                "ABD": "13",
                "CD": "16",
                "ACD": "20",
                "BCD": "21",
                "ABCD": "22"
            },
            "ispersist": "true",
            "next_question_textInput": ""
        }, {
            "id": "2",
            "type": "MULTIPLE_OPTION",
            "text": "Are you aware that there are Tuberculosis (TB) related programs undertaken by the government?",
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
                "text": "Aware about such programs & aspire to participate"
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
            "next_question_multiple": "",
            "ispersist": "",
            "next_question_textInput": ""
        }, {
            "id": "3",
            "type": "MULTIPLE_OPTION",
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
            "next_question_multiple": {
                "A": "",
                "B": "",
                "C": "",
                "D": "",
                "AB": "",
                "AC": "",
                "AD": "",
                "ABC": "",
                "ABD": "",
                "ACD": "",
                "ABCD": "",
                "BC": "3",
                "BD": "3",
                "CD": "3",
                "BCD": "3"
            },
            "ispersist": "",
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
                "J": "8"
            },
            "next_question_multiple": "",
            "ispersist": "",
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
            "next_question_multiple": "",
            "ispersist": "",
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
                "A": "1",
                "B": "3",
                "AB": "",
                "C": "",
                "AC": "",
                "BC": "",
                "ABC": "",
                "D": "",
                "AD": "",
                "BD": "",
                "ABD": "",
                "CD": "",
                "ACD": "",
                "BCD": "",
                "ABCD": ""
            },
            "ispersist": "",
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
                "T": "end",
                "U": "end",
                "V": "end"
            },
            "next_question_multiple": "",
            "ispersist": "",
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
                "X": "end",
                "Y": "end",
                "Z": "end"
            },
            "next_question_multiple": "",
            "ispersist": "",
            "next_question_textInput": ""
        }],
        "exit_url": "https://www.google.com",
        "carousel_images": [],
        "thankyou_text": "Next",
        "trackers": ["https://www.googly.com", "https://www.googly.com"],
        "trackers_first_interaction": ["https://www.googly.com", "https://www.googly.com"],
        "trackers_creative_load": ["https://www.googly.com", "https://www.googly.com"],
        
        "global_tags": [{
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }, {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }],
        "global_tags_first_interaction": [{
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }, {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }],
        "global_tags_creative_load": [{
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }, {
            "Property_id": "G-XXXXXXX",
            "Event_String": "string",
            "send_to": "G-XXXXXXX"
        }]
    },
    "ui_config": {
        "creative_size": {
            "width": 300,
            "height": 250
        },
        "basic_creative_config": {
            "Question_Font_Size": "XX",
            "Answer_Font_Size": "XX",
            "Quention_Font_Color": "#ffffff",
            "Answer_Font_Color": "#ffffff",
            "Next_CTA_Color": "Blue",
            "Next CTA text": "Continue",
            "Hover Color": ""
        },
        "background": {
            "background_flag": "#ffffff",
            "Background_Color": "#000000",
            "Background_Image": ""
        },
        "startscreen_configuration": {
            "startscreen": true,
            "brandLogo": "",
            "startScreenText": "",
            "start_cta_Bg_color": "#ffffff",
            "start_cta_text": "",
            "startscreen_subInfo": ""
        },
        "lastscreen_configuration": {
            "ThankYouText": "Thank      YOU",
            "ThankYouLine": "",
            "couponBoxFlag": false,
            "additionalInfo": "",
            "couponCode": "",
            "brandLogoFlag": "brandLogo",
            "website_Link": "",
            "brandLogo": "",
            "website_Link_Text": ""
        }
    }
}