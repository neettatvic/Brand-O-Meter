// File contains the basic configuration of box UI, home page , q&a page and thanks page 

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
var start_cta_text = landing_page.start_cta_text || 'Start Survey';

//thanks you page values from config
var thankyou_text = thankyou_page.ThankYouText || null;
var thankyou_text_color = thankyou_page.ThankYouTextColor || null;
// var thankyou_text = thankyou_page.brandLogoFlag || false;
var ending_brandLogoURL = thankyou_page.brandLogo || null;
var website_Link = thankyou_page.website_Link || null;
var website_Link_Text = thankyou_page.website_Link_Text || null;
var additionalInfo = thankyou_page.additionalInfo || null;
var couponCode = thankyou_page.couponCode || null;
var copybtnFontColor = thankyou_page.copybtnFontColor || rgba(49, 99, 210);
var copybtnBgColor = thankyou_page.copybtnBgColor || rgba(49, 99, 210);




//###################################################################################################################
//################################################ Refferance for HTMl Elements #####################################
//###################################################################################################################

// box size html elements
var ad_box = document.getElementById("ad_box");

// landing page html elements
var landing_container = document.querySelector(".landing_container");
var logo_div = document.getElementById("logo");
var landing_content = document.getElementById("landing_content");
var survey_btn = document.getElementById("survey-btn");

//thanks you page html elements
var coupon_container = document.querySelector(".coupon_container");
var thanks_text = document.getElementById("thanks_text");
var offer_info = document.getElementById("offer_info");
var coupon_code_box = document.getElementById("coupon_code_box");
var coupon_code = document.querySelector(".coupon_code");
var copyInput = document.querySelector("#copyvalue");
var copybtn = document.querySelector(".copybtn");
var offer_info_right = document.querySelector("#offer_info_right");
var ending_logo = document.getElementById("ending_logo");

//###################################################################################################################
//#################################################### Box Size setup code ##########################################
//###################################################################################################################

function box_size(selector, w, h) {
    selector.style.width = width + "px";
    selector.style.height = height + "px";
}
if (width != null && height != null) {
    box_size(ad_box, width, height);
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

if (bg.background_flag == "background_image") {
    setBackgroundImg(bg_img_url);
} else {
    setBackgroundColor(bg_color);
}

//###################################################################################################################
//################################################## Landing Page setup code ########################################
//###################################################################################################################

function setLog(LogoURL, w, h) {
    const image = document.createElement("img");
    image.setAttribute("src", LogoURL);
    image.setAttribute("alt", "logo");
    image.setAttribute("width", 55);
    image.setAttribute("height", 55);
    logo_div.appendChild(image);
}
if (landing_page.startscreen) {
    box_size(landing_container, width, height);
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
    thanks_text.style.color = thankyou_text_color;
}

// brand logo and web url dynamically setup
if (thankyou_page.brandLogoFlag == "brandLogo" && ending_brandLogoURL != null) {
    setEndLog(ending_brandLogoURL, website_Link);
}
function setEndLog(ending_brandLogoURL, website_Link) {
    const image = document.createElement("img");
    image.setAttribute("src", ending_brandLogoURL);
    image.setAttribute("alt", "logo");
    image.setAttribute("width", 40);
    image.setAttribute("height", 40);

    const ancerTag = document.createElement("a");
    ancerTag.setAttribute("href", website_Link);

    if (website_Link != null && website_Link != "") {
        ending_logo.appendChild(ancerTag);
        ancerTag.appendChild(image);
    } else {
        ending_logo.appendChild(image);
    }
}


//redeem code text dynamically setup
if (
    thankyou_page.brandLogoFlag == "website_Link_Text" &&
    website_Link_Text != null &&
    website_Link_Text != ""
) {
    setRedeemCodeText(website_Link_Text, website_Link);
}
function setRedeemCodeText(web_text, website_Link) {
    const ancerTag = document.createElement("a");
    ancerTag.setAttribute("href", website_Link);
    ancerTag.setAttribute("style", "text-decoration: none");
    ancerTag.innerText = web_text;
    ancerTag.style.color = thankyou_text_color;
    const underlineTag = document.createElement("u")
    underlineTag.append(ancerTag)
    ending_logo.appendChild(underlineTag);
}

function copyIt() {
    copyInput.select();
    document.execCommand("copy");
    // copybtn.innerText = "COPIED";
    offer_info_right.style.opacity = 1
    offer_info_right.style.color = copybtnFontColor
}

if (thankyou_page.couponBoxFlag) {
    // coupon_code_box.removeAttribute('class');
    coupon_code_box.setAttribute("class", "coupon_code");
    // document.querySelector(".copybtn").style.backgroundColor = start_cta_Bg_color;
    copybtn.style.backgroundColor = copybtnBgColor;
    copybtn.style.color = copybtnFontColor;
    copyvalue.value = couponCode;
    if (additionalInfo != null && additionalInfo != "") {
        offer_info.innerHTML = `<i>${additionalInfo}</i>`;
    }
} else {
    offer_info.setAttribute("class", "invisible");
}

// If logo and coupon are false, remove the divs so thx comes center
if (thankyou_page.couponBoxFlag == false && (thankyou_page.brandLogoFlag == "" || thankyou_page.brandLogoFlag == null || thankyou_page.brandLogoFlag == false)) {
    // const element = document.getElementById("demo");
    ending_logo.remove();
    coupon_container.remove();
}