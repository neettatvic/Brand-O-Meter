//###################################################################################################################
//################################################# Refferance from UI Config File #####################################
//###################################################################################################################

var ui = finalConfiguration.ui_config;
var bg = ui.background;
var landing_page = ui.startscreen_configuration;
var thankyou_page = ui.lastscreen_configuration;

//box size values from config 
var width = ui.creative_size.width || 300;
var height = ui.creative_size.height || 250;

//background values from config 
var bg_img_url = bg.background_image || null;
var bg_color = bg.background_color || null;

//landing page values from config 
var brandLogoURL = landing_page.brandLogo || null;
var startScreenText = landing_page.startScreenText || null;
var startScreenTextColor = landing_page.startScreenTextColor || rgb(49, 99, 210);
var start_cta_Bg_color = landing_page.start_cta_Bg_color || rgb(49, 99, 210);
var start_cta_text = landing_page.start_cta_text || null;

//thanks you page values from config 
var thankyou_text = thankyou_page.ThankYouText || null;
// var thankyou_text = thankyou_page.brandLogoFlag || false;
var ending_brandLogoURL = thankyou_page.brandLogo || null;
var website_Link = thankyou_page.website_Link || null;
var website_Link_Text = thankyou_page.website_Link_Text || null;
var additionalInfo = thankyou_page.additionalInfo || null;
var couponCode = thankyou_page.couponCode || null;


//###################################################################################################################
//################################################ Refferance for HTMl Elements #####################################
//###################################################################################################################


// box size html elements
var ad_box = document.getElementById('ad_box');

// landing page html elements
var landing_container = document.querySelector(".landing_container");
var logo_div = document.getElementById('logo');
var landing_content = document.getElementById('landing_content');
var survey_btn = document.getElementById('survey-btn');

//thanks you page html elements
var coupon_container = document.querySelector('.coupon_container')
var thanks_text = document.getElementById('thanks_text');
var offer_info = document.getElementById('offer_info');
var coupon_code_box = document.getElementById('coupon_code_box');
var coupon_code = document.querySelector('.coupon_code');
var ending_logo = document.getElementById('ending_logo');

//###################################################################################################################
//#################################################### Box Size setup code ##########################################
//###################################################################################################################


function box_size(selector, w, h) {
    selector.style.width = width + 'px';
    selector.style.height = height + 'px';
}
if (width != null && height != null) {
    box_size(ad_box, width, height)
}

//###################################################################################################################
//################################################### Background setup code #########################################
//###################################################################################################################

function setBackgroundImg(url) {
    ad_box.style.backgroundImage = "url(" + url + ")";
    ad_box.style.backgroundSize = width + "px " + height + "px";
}
function setBackgroundColor(color) {
    ad_box.style.backgroundColor = color;
}

if (bg.background_flag == 'background_image') {
    setBackgroundImg(bg_img_url);
} else {
    setBackgroundColor(bg_color)
}

//###################################################################################################################
//################################################## Landing Page setup code ########################################
//###################################################################################################################

function setLog(LogoURL, w, h) {
    const image = document.createElement('img');
    image.setAttribute('src', LogoURL);
    image.setAttribute('alt', 'logo');
    image.setAttribute('width', 55);
    image.setAttribute('height', 55);
    logo_div.appendChild(image)
}
if (landing_page.startscreen) {
    box_size(landing_container, width, height)
}
if (landing_page.startscreen && brandLogoURL != null) {
    setLog(brandLogoURL);
}
if (landing_page.startscreen && startScreenText != null) {
    landing_content.style.color = startScreenTextColor;
    landing_content.innerText = startScreenText;

}
if (landing_page.startscreen && start_cta_text != null) {
    survey_btn.style.backgroundColor = start_cta_Bg_color;
    survey_btn.innerText = start_cta_text;
}

//###################################################################################################################
//################################################# Thank You Page setup code #######################################
//###################################################################################################################

// thanks text
if (thankyou_text != null) {
    thanks_text.innerText = thankyou_text;
}

// brand logo and web url dynamically setup
if ((thankyou_page.brandLogoFlag == 'brandLogo') && (ending_brandLogoURL != null)) {
    setEndLog(ending_brandLogoURL, website_Link)
}
function setEndLog(ending_brandLogoURL, website_Link) {
    const image = document.createElement('img');
    image.setAttribute('src', ending_brandLogoURL);
    image.setAttribute('alt', 'logo');
    image.setAttribute('width', 40);
    image.setAttribute('height', 40);

    const ancerTag = document.createElement('a');
    ancerTag.setAttribute('href', website_Link);

    if ((website_Link != null) && (website_Link != '')) {
        ending_logo.appendChild(ancerTag)
        ancerTag.appendChild(image);
    } else {
        ending_logo.appendChild(image);
    }
}

//redeem code text dynamically setup
if ((thankyou_page.brandLogoFlag == 'website_Link_Text') && (website_Link_Text != null) && (website_Link_Text != '')) {
    setRedeemCodeText(website_Link_Text, website_Link)
}
function setRedeemCodeText(web_text, website_Link) {
    const ancerTag = document.createElement('a');
    ancerTag.setAttribute('href', website_Link);
    ancerTag.innerText = web_text;
    ending_logo.appendChild(ancerTag);
}


// copy function 
let copybtn = document.querySelector(".copybtn");
function copyIt() {
    let copyInput = document.querySelector('#copyvalue');
    copyInput.select();
    document.execCommand("copy");
    copybtn.textContent = "COPIED";
}

if (thankyou_page.couponBoxFlag) {
    // coupon_code_box.removeAttribute('class');
    coupon_code_box.setAttribute('class', 'coupon_code');
    document.querySelector('.copybtn').style.backgroundColor = start_cta_Bg_color;
    document.querySelector('#copyvalue').value = couponCode;
    if (additionalInfo != null && additionalInfo != '') {
        offer_info.innerText = additionalInfo
    }
} else {
    offer_info.setAttribute('class', 'invisible')
}

// If logo and coupon are false, remove the divs so thx comes center 
if (thankyou_page.couponBoxFlag == false && (thankyou_page.brandLogoFlag == '' || thankyou_page.brandLogoFlag == null || thankyou_page.brandLogoFlag == false)) {
    // const element = document.getElementById("demo");
    ending_logo.remove();
    coupon_container.remove();
}
