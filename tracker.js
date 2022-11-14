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
    var pixelFrame = document.createElement('iframe');
    pixelFrame.setAttribute('width', '0');
    pixelFrame.setAttribute('height', '0');
    pixelFrame.setAttribute('src', macroFilledUrl);
    document.body.appendChild(pixelFrame);
}

//###################################################################################################################
//################################################ creativeLoad pixel tracking  #####################################
//###################################################################################################################
function creativeLoad_Tracking() {
    console.log('doc ready')
    if ((trackers_creative_load) && (trackers_creative_load.length > 0) && (document.querySelector('.thankyou_container').parentElement.className.match("hide"))) {
        trackers_creative_load.forEach(function (src) {
            insert_pixel (src)
        })
    }
}


//###################################################################################################################
//############################################## first_interaction pixel tracking  ##################################
//###################################################################################################################
function firstInteraction_Tracking() {
    // first_interaction pixel tracking in landing page 
    // debugger;
    if (trackers_first_interaction_flag && landing_page.startscreen) {
        document.querySelector("#survey-btn").addEventListener('click', function () {
            if (trackers_first_interaction_flag) {
                trackers_first_interaction.forEach(function (src) {
                    insert_pixel (src)
                })
            }
            trackers_first_interaction_flag = false
        })
    }
    // first_interaction pixel tracking in Q&A page 
    if (trackers_first_interaction_flag && landing_page.startscreen == false) {
        document.body.addEventListener('click', function () {
            if (trackers_first_interaction_flag) {
                trackers_first_interaction.forEach(function (src) {
                    insert_pixel (src)
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
            trackers_thanks_intreaction.forEach(function (src) {
                insert_pixel (src)
            })
            trackers_thanks_intreaction_flag = false;
        }
    }
}



