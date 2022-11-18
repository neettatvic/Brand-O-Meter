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

// Refferance from ui config File
var ui = finalConfiguration.ui_config;
var landing_page = ui.startscreen_configuration;
var start_cta_Bg_color = landing_page.start_cta_Bg_color || null;

//###################################################################################################################
//#################################################### tracker set up code ##########################################
//###################################################################################################################

// Global Pixel iframe preparation  function 
function insert_pixel(url) {
    var macroFilledUrl = url;
    // var macroFilledUrl = fillMacrosInUrl(url)
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

function fillMacrosInUrl(url) {
    return url
        .replace(
            /\{bomid\}/g, encodeURIComponent(this.getOrGenerateCookieId()))
        .replace(/\{survey_id\}/g, encodeURIComponent(survey_config.id))
        .replace(
            /\{responses\}/g,
            this.getEncodedResponseString(this.collectedResponses))
        .replace(
            /\{visual_responses\}/g,
            this.getEncodedResponseString(this.visualOptions))
        .replace(/\{seg\}/g, encodeURIComponent(surveyConfig.seg))
        .replace(/\{time_measurement\}/g, this.measureSurveyTimes())
        .replace(
            /\{size\}/g,
            encodeURIComponent(
                String(uiConfig.creative_size.width) + 'x' +
                String(uiConfig.creative_size.height)))
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
    console.log(document.cookie)
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

function setupGlobalTags() {
    // if (this.surveyConfig.global_tags != null && this.surveyConfig.global_tags.length > 0) {
    // Insert master tag
    this.insertScript(
        null, 'https://www.googletagmanager.com/gtag/js?id=UA-219325708-4',
        'head');

    this.insertScript(
        'window.dataLayer = window.dataLayer || [];\n' +
        'function gtag(){dataLayer.push(arguments);}\n' +
        'gtag(\'js\', new Date());\n' +
        `gtag('config', 'UA-219325708-4', {'send_page_view': false})`,
        null, 'head');
    // }
}

setupGlobalTags()

function fireGlobalTagsEvents() {
    if (this.surveyConfig.global_tags != null &&
        this.surveyConfig.global_tags.length > 0) {
        this.insertScript(this.surveyConfig.global_tags.map(function (gTag) {
            return 'gtag(' + gTag.event_details + ');';
        }).join('\n'));
    }
}

//###################################################################################################################
//################################################ creativeLoad pixel tracking  #####################################
//###################################################################################################################
function creativeLoad_Tracking() {
    console.log('doc ready')
    if ((trackers_creative_load) && (trackers_creative_load.length > 0) && (document.querySelector('.thankyou_container').parentElement.className.match("hide"))) {
        insertScript(`gtag('event', 'page_view', { page_title: 'My Profile', page_location: 'https://example.com/vp/creativeLoad'});`, null, 'head');
        trackers_creative_load.forEach(function (src) {
            insert_pixel(src)
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
            // debugger
            insertScript(`gtag('event', 'page_view', { page_title: 'My Profile', page_location: 'https://example.com/vp/firstInteraction'});`, null, 'head');
            if (trackers_first_interaction_flag) {
                trackers_first_interaction.forEach(function (src) {
                    insert_pixel(src)
                })
            }
            trackers_first_interaction_flag = false
        })
    }
    // first_interaction pixel tracking in Q&A page 
    if (trackers_first_interaction_flag && landing_page.startscreen == false) {
        document.body.addEventListener('click', function () {
            if (trackers_first_interaction_flag) {
                insertScript(`gtag('event', 'page_view', { page_title: 'My Profile', page_location: 'https://example.com/vp/firstInteraction'});`, null, 'head');
                trackers_first_interaction.forEach(function (src) {
                    insert_pixel(src)
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
            insertScript(`gtag('event', 'page_view', { page_title: 'My Profile', page_location: 'https://example.com/vp/lastPageIntreaction'});`, null, 'head');
            trackers_thanks_intreaction.forEach(function (src) {
                insert_pixel(src)
            })
            trackers_thanks_intreaction_flag = false;
        }
    }
}



