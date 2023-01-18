//###################################################################################################################
//############################################# Refferance from survey_config File ##################################
//###################################################################################################################

// Refferance from survey_config File
var survey_config = finalConfiguration.survey_config;
var trackers_creative_load = survey_config.trackers_creative_load;
var trackers_first_interaction = survey_config.trackers_first_interaction;
var trackers_first_interaction_flag = true;
var trackers_thanks_intreaction = survey_config.trackers;
var trackers_thanks_intreaction_flag = true;
var property_id_array = []
// var property_id = survey_config.Gtag_Details[0].Property_id;
// var pageview_domain = survey_config.Gtag_Details[0].Domain;


//GA event on creative load 
var global_tags_creative_load = survey_config.global_tags_creative_load
// console.log(global_tags_creative_load.length)

//GA event on first interaction 
var global_tags_first_interaction = survey_config.global_tags_first_interaction
// console.log(global_tags_first_interaction.length)

//GA event on thanks you page 
var global_tags = survey_config.global_tags
// console.log(global_tags.length)


// Refferance from ui config File
var ui = finalConfiguration.ui_config;
var landing_page = ui.startscreen_configuration;
var start_cta_Bg_color = landing_page.start_cta_Bg_color || null;


// console.log("survey_config.id : " + survey_config.id)
// console.log("survey_config.seg : " + survey_config.seg)
// console.log("survey_config.response_server : " + survey_config.response_server)
// console.log("ui.creative_size.width : " + ui.creative_size.width)
// console.log("ui.creative_size.height : " + ui.creative_size.height)

//###################################################################################################################
//#################################################### tracker set up code ##########################################
//###################################################################################################################

function sendCollectedResponseToServer(resStr, visStr) {
    this.resStr = resStr
    this.visStr = visStr
    insert_pixel(survey_config.response_server, true, resStr, visStr);
}

// Global Pixel iframe preparation  function 
function insert_pixel(url, is_server_event, resStr, visStr) {
    // var macroFilledUrl = url;
    var macroFilledUrl = is_server_event ? fillMacrosInUrl(url, resStr, visStr) : url;

    var pixelFrame = document.createElement('iframe');
    pixelFrame.setAttribute('width', '0');
    pixelFrame.setAttribute('height', '0');
    pixelFrame.setAttribute('src', macroFilledUrl);
    document.body.appendChild(pixelFrame);
}

function getEncodedResponseString(responses) {
    return encodeURIComponent(Object.keys(responses)
        .map(function (x) {
            return String(x) + ':' +
                responses[x].join('');
        }.bind(this))
        .join('|'));
}

function fillMacrosInUrl(url, resStr, visStr) {
    return url
        .replace(
            /\{bomid\}/g, encodeURIComponent(this.getOrGenerateCookieId()))
        .replace(/\{survey_id\}/g, encodeURIComponent(survey_config.id))
        .replace(
            /\{responses\}/g, encodeURIComponent(resStr))
        .replace(
            /\{visual_responses\}/g, encodeURIComponent(visStr))
        .replace(/\{seg\}/g, encodeURIComponent(survey_config.seg))
        .replace(/\{time_measurement\}/g, this.measureSurveyTimes())
        .replace(
            /\{size\}/g,
            encodeURIComponent(
                String(ui.creative_size.width) + 'x' +
                String(ui.creative_size.height)))
        .replace(
            /\{random_timestamp\}/g,
            encodeURIComponent(this.getRandomTimestamp()));
}

function getRandomTimestamp() {
    return String(10000000 * Math.random());
}

function measureSurveyTimes() {
    return '' +
        (this.time_measurement.q1_start_time -
            this.time_measurement.start_time) +
        '|' +
        (this.time_measurement.question_end_time -
            this.time_measurement.q1_start_time);
}

// Check cookie to get User ID or Drop a new one
function getOrGenerateCookieId() {
    var cookieIdRegexMatch = /bomu=([^;]+)/.exec(document.cookie);
    return (cookieIdRegexMatch == null) ? this.setCookieId() :
        cookieIdRegexMatch[1];
}

function setCookieId() {
    var cookieId = this.uuidv4();
    document.cookie = 'bomu=' + cookieId + ';samesite=none;secure;';
    // console.log(document.cookie)
    return cookieId;
}

function uuidv4() {
    var uuid = null;
    try {
        uuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
            .replace(
                /[018]/g,
                function (c) {
                    return (c ^
                        crypto.getRandomValues(new Uint8Array(1))[0] &
                        15 >> c / 4)
                        .toString(16);
                });
    } catch (e) {
        uuid = 'xxxxxxxx-xxxx-0xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }

    return uuid;
}

// Gtag 
function insertScript(scriptString, srcString, position) {
    var scriptTag = document.createElement('script');
    if (srcString == null) {
        scriptTag.innerHTML = scriptString;
    } else {
        scriptTag.setAttribute('src', srcString);
    }

    if (position == null || position == 'body') {
        document.body.appendChild(scriptTag);
    } else {
        document.head.appendChild(scriptTag);
    }
}

function setupGlobalTags(property_id) {
    // if (this.surveyConfig.global_tags != null && this.surveyConfig.global_tags.length > 0) {
    // Insert master tag
    this.insertScript(
        null, `https://www.googletagmanager.com/gtag/js?id=${property_id}`,
        'head');

    this.insertScript(
        'window.dataLayer = window.dataLayer || [];\n' +
        'function gtag(){dataLayer.push(arguments);}\n' +
        'gtag(\'js\', new Date());\n' +
        `gtag('config', '${property_id}', {'send_page_view': false})`,
        null, 'head');
    // }
}

// setupGlobalTags()

// function fireGlobalTagsEvents() {
//     if (this.surveyConfig.global_tags != null &&
//         this.surveyConfig.global_tags.length > 0) {
//         this.insertScript(this.surveyConfig.global_tags.map(function (gTag) {
//             return 'gtag(' + gTag.event_details + ');';
//         }).join('\n'));
//     }
// }

//###################################################################################################################
//################################################ creativeLoad pixel tracking  #####################################
//###################################################################################################################
function creativeLoad_Tracking() {
    // console.log('doc ready')
    if ((trackers_creative_load) && (trackers_creative_load.length > 0) && (document.querySelector('.thankyou_container').parentElement.className.match("hide"))) {
        if (global_tags_creative_load.length > 0 && global_tags_creative_load != null) {
            for (var i = 0; i < global_tags_creative_load.length; i++) {
                var pageview_domain = global_tags_creative_load[i].Domain
                var pageview_url = pageview_domain + '/vp/creativeLoad';
                var property_id = global_tags_creative_load[i].Property_id
                // console.log(i + ": " + pageview_domain)
                // console.log(i +": "+ property_id)
                // debugger
                if (!property_id_array.includes(property_id)) {
                    setupGlobalTags(property_id)
                    property_id_array.push(property_id)
                }
                // insertScript(`gtag('event', 'page_view', { page_title: 'Home Page', page_location: '${pageview_domain}/vp/creativeLoad'});`, null, 'head');
                insertScript(`gtag('event', 'page_view', { page_title: '${document.title}', page_location: '${pageview_url}' , send_to: '${property_id}'});`, null, 'head');
            }
        }
        trackers_creative_load.forEach(function (src) {
            // console.log('inserting creativeLoad GA event');
            insert_pixel(src, false)
        })
    }
}


//###################################################################################################################
//############################################## first_interaction pixel tracking  ##################################
//###################################################################################################################
function firstInteraction_Tracking() {
    // first_interaction pixel tracking in landing page 
    if (trackers_first_interaction_flag && landing_page.startscreen) {
        document.querySelector("#survey-btn").addEventListener('click', function () {
            //fire the GA event 
            if (global_tags_first_interaction.length > 0 && global_tags_first_interaction != null) {
                for (var i = 0; i < global_tags_first_interaction.length; i++) {
                    var pageview_domain = global_tags_first_interaction[i].Domain
                    var pageview_url = pageview_domain + '/vp/firstInteraction';
                    var property_id = global_tags_first_interaction[i].Property_id
                    // console.log(i +": "+ property_id)
                    // console.log(i +": "+ pageview_domain)
                    if (!property_id_array.includes(property_id)) {
                        setupGlobalTags(property_id)
                        property_id_array.push(property_id)
                    }
                    // insertScript(`gtag('event', 'page_view', { page_title: 'Home Page', page_location: '${pageview_domain}${i}/vp/firstInteraction'});`, null, 'head');
                    insertScript(`gtag('event', 'page_view', { page_title: '${document.title}', page_location: '${pageview_url}' , send_to: '${property_id}'});`, null, 'head');
                }
            }
            // fire the server pixel
            if (trackers_first_interaction_flag) {
                trackers_first_interaction.forEach(function (src) {
                    // console.log('inserting firstInteraction GA event start screen');
                    insert_pixel(src, false)

                    // Measure render time
                    this.time_measurement.start_time = new Date();
                })
            }
            trackers_first_interaction_flag = false
        })
    }
    // first_interaction pixel tracking in Q&A page 
    if (trackers_first_interaction_flag && landing_page.startscreen == false) {
        document.body.addEventListener('click', function () {
            if (trackers_first_interaction_flag) {
                if (global_tags_first_interaction.length > 0 && global_tags_first_interaction != null) {
                    for (var i = 0; i < global_tags_first_interaction.length; i++) {
                        var pageview_domain = global_tags_first_interaction[i].Domain
                        var property_id = global_tags_first_interaction[i].Property_id
                        var pageview_url = pageview_domain + '/vp/firstInteraction';

                        // console.log(i + ": " + property_id)
                        // console.log(i + ": " + pageview_domain)
                        if (!property_id_array.includes(property_id)) {
                            setupGlobalTags(property_id)
                            property_id_array.push(property_id)
                        }
                        // insertScript(`gtag('event', 'page_view', { page_title: 'Q&A Page', page_location: '${pageview_domain}/vp/firstInteraction'});`, null, 'head');
                        insertScript(`gtag('event', 'page_view', { page_title: '${document.title}', page_location: '${pageview_url}' , send_to: '${property_id}'});`, null, 'head');

                    }
                }
                trackers_first_interaction.forEach(function (src) {
                    // console.log('inserting firstInteraction GA event QnA page');
                    insert_pixel(src, false)

                    // Measure render time
                    this.time_measurement.start_time = new Date();
                })
            }
            trackers_first_interaction_flag = false
        })
    }
}

//###################################################################################################################
//############################################## thanks_interaction pixel tracking  #################################
//###################################################################################################################
function lastPageIntreaction_Tracking() {
    if (trackers_thanks_intreaction_flag) {
        // debugger;
        var thanks_page_visiblity = document.querySelector('.thankyou_container').parentElement.className.match("hide")
        if (!thanks_page_visiblity) {
            if (global_tags.length > 0 && global_tags != null) {
                for (var i = 0; i < global_tags.length; i++) {
                    var pageview_domain = global_tags[i].Domain
                    var property_id = global_tags[i].Property_id
                    var pageview_url = pageview_domain + '/vp/lastPageIntreaction';

                    // console.log(i + ": " + property_id)
                    // console.log(i + ": " + pageview_domain)
                    if (!property_id_array.includes(property_id)) {
                        setupGlobalTags(property_id)
                        property_id_array.push(property_id)
                    }
                    // insertScript(`gtag('event', 'page_view', { page_title: 'Thank You Page', page_location: '${pageview_domain}/vp/lastPageIntreaction'});`, null, 'head');
                    insertScript(`gtag('event', 'page_view', { page_title: '${document.title}', page_location: '${pageview_url}' , send_to: '${property_id}'});`, null, 'head');

                }
            }
            trackers_thanks_intreaction.forEach(function (src) {
                // console.log('inserting lastPageIntreaction GA event');
                insert_pixel(src, false)
            })
            trackers_thanks_intreaction_flag = false;
        }
    }
}



