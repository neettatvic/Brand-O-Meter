var finalConfiguration = {
    "survey_config": {
        "response_server": "https://test-asia-south1-brandometer-radiom.cloudfunctions.net/receiver?type=survey&id={survey_id}&seg={seg}&response={responses}&visual={visual_responses}&creative_size={size}&randomtimestamp={random_timestamp}&bomid={bomid}&times={time_measurement}",
        "id": "c20b25a9-2312-4f7d-9512-f92b971fd83e",
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
            "text": "Are you aware that there are Tuberculosis (TB) related programs undertaken by the government? ",
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
        "global_tags": [{
            "Property_id": "UA-1234567-12",
            "Domain": "www.domain.com"
        }, {
            "Property_id": "UA-1234567-13",
            "Domain": "www.domain.com"
        }],
        "global_tags_first_interaction": [{
            "Property_id": "UA-1234567-10",
            "Domain": "www.domain.com"
        }, {
            "Property_id": "UA-1234567-11",
            "Domain": "www.domain.com"
        }],
        "global_tags_creative_load": [{
            "Property_id": "UA-1234567-8",
            "Domain": "www.domain.com"
        }, {
            "Property_id": "UA-1234567-9",
            "Domain": "www.domain.com"
        }]
    },
        "ui_config": {
        "creative_size": {
            "width": 300,
            "height": 250
        },
        "basic_creative_config": {
            "Question_Font_Size": "14px",
            "Quention_Font_Color": "#1155cc",
            "Answer_Font_Size": "12px",
            "Answer_Font_Color": "#000000",
            "Options_bg_Color": "#6fa8dc",
            "Option_selection_bg_Color": "#1155cc",
            "Answer_Font_Color_On_Option_selection": "#efefef",
            "Next_Font_Color": "#f3f3f3",
            "Next_Btn_text": "Next",
            "Next_Bg_Color": "#741b47"
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
            "startScreenTextColor": "#1155cc"
        },
        "lastscreen_configuration": {
            "ThankYouText": "Thank You for your time! test",
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





