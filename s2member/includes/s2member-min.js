jQuery(document).ready(function(d){window.ws_plugin__s2member_skip_all_file_confirmations=window.ws_plugin__s2member_skip_all_file_confirmations||false;var c='<?php echo c_ws_plugin__s2member_utils_conds::bp_is_installed("query-active-plugins") ? "1" : ""; ?>',a='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(c_ws_plugin__s2member_utils_dirs::basename_dir_app_data($GLOBALS["WS_PLUGIN__"]["s2member"]["c"]["files_dir"])); ?>',b=ws_plugin__s2member_skip_all_file_confirmations?true:false,e=[];if(!b&&S2MEMBER_CURRENT_USER_IS_LOGGED_IN&&S2MEMBER_CURRENT_USER_DOWNLOADS_CURRENTLY<S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED){d('a[href*="s2member_file_download="], a[href*="/s2member-files/"], a[href^="s2member-files/"], a[href*="/'+a.replace(/([\:\.\[\]])/g,"\\$1")+'/"], a[href^="'+a.replace(/([\:\.\[\]])/g,"\\$1")+'/"]').click(function(){if(!/s2member[_\-]file[_\-]download[_\-]key[\=\-].+/i.test(this.href)){var f='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Confirm File Download —", "s2member-front", "s2member")); ?>\n\n';f+=d.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("You`ve downloaded %s protected %s in the last %s.", "s2member-front", "s2member")); ?>',S2MEMBER_CURRENT_USER_DOWNLOADS_CURRENTLY,((S2MEMBER_CURRENT_USER_DOWNLOADS_CURRENTLY===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("file", "s2member-front", "s2member")); ?>':'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("files", "s2member-front", "s2member")); ?>'),((S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED_DAYS===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("24 hours", "s2member-front", "s2member")); ?>':d.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("%s days", "s2member-front", "s2member")); ?>',S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED_DAYS)))+"\n\n";f+=(S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED_IS_UNLIMITED)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("You`re entitled to UNLIMITED downloads though (so, no worries).", "s2member-front", "s2member")); ?>':d.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("You`re entitled to %s unique %s %s.", "s2member-front", "s2member")); ?>',S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED,((S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("download", "s2member-front", "s2member")); ?>':'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("downloads", "s2member-front", "s2member")); ?>'),((S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED_DAYS===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("each day", "s2member-front", "s2member")); ?>':d.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("every %s-day period", "s2member-front", "s2member")); ?>',S2MEMBER_CURRENT_USER_DOWNLOADS_ALLOWED_DAYS)));if((/s2member[_\-]skip[_\-]confirmation/i.test(this.href)&&!/s2member[_\-]skip[_\-]confirmation[\=\-](0|no|false)/i.test(this.href))||confirm(f)){if(d.inArray(this.href,e)===-1){S2MEMBER_CURRENT_USER_DOWNLOADS_CURRENTLY++,e.push(this.href)}return true}return false}return true})}if(!/\/wp-admin([\/?#]|$)/.test(location.href)){d("input#ws-plugin--s2member-profile-password1, input#ws-plugin--s2member-profile-password2").keyup(function(){ws_plugin__s2member_passwordStrength(d("input#ws-plugin--s2member-profile-login"),d("input#ws-plugin--s2member-profile-password1"),d("input#ws-plugin--s2member-profile-password2"),d("div#ws-plugin--s2member-profile-password-strength"))});d("form#ws-plugin--s2member-profile").submit(function(){var h=this,g="",f="",l="",j=d("input#ws-plugin--s2member-profile-password1",h),i=d("input#ws-plugin--s2member-profile-password2",h);var k=d("input#ws-plugin--s2member-profile-submit",h);d(":input",h).each(function(){var m=d.trim(d(this).attr("id")).replace(/---[0-9]+$/g,"");if(m&&(g=d.trim(d('label[for="'+m+'"]',h).first().children("strong").first().text().replace(/[\r\n\t]+/g," ")))){if(f=ws_plugin__s2member_validationErrors(g,this,h)){l+=f+"\n\n"}}});if(l=d.trim(l)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+l);return false}else{if(d.trim(j.val())&&d.trim(j.val())!==d.trim(i.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(d.trim(j.val())&&d.trim(j.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}}}ws_plugin__s2member_animateProcessing(k);return true})}if(/\/wp-signup\.php/.test(location.href)){d("div#content > div.mu_register > form#setupform").submit(function(){var h=this,g="",f="",j="",i=d('p.submit input[type="submit"]',h);d("input#user_email",h).attr("data-expected","email");d("input#user_name, input#user_email, input#blogname, input#blog_title, input#captcha_code",h).attr({"aria-required":"true"});d(":input",h).each(function(){var k=d.trim(d(this).attr("id")).replace(/---[0-9]+$/g,"");if(k&&(g=d.trim(d('label[for="'+k+'"]',h).first().text().replace(/[\r\n\t]+/g," ")))){if(f=ws_plugin__s2member_validationErrors(g,this,h)){j+=f+"\n\n"}}});if(j=d.trim(j)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+j);return false}ws_plugin__s2member_animateProcessing(i);return true})}if(/\/wp-login\.php/.test(location.href)){d("div#login > form#registerform input#user_login").attr("tabindex","10");d("div#login > form#registerform input#user_email").attr("tabindex","20");d("div#login > form#registerform input#wp-submit").attr("tabindex","1000");d("input#ws-plugin--s2member-custom-reg-field-user-pass1, input#ws-plugin--s2member-custom-reg-field-user-pass2").keyup(function(){ws_plugin__s2member_passwordStrength(d("input#user_login"),d("input#ws-plugin--s2member-custom-reg-field-user-pass1"),d("input#ws-plugin--s2member-custom-reg-field-user-pass2"),d("div#ws-plugin--s2member-custom-reg-field-user-pass-strength"))});d("div#login > form#registerform").submit(function(){var h=this,g="",f="",l="",k=d('input#ws-plugin--s2member-custom-reg-field-user-pass1[aria-required="true"]',h),i=d("input#ws-plugin--s2member-custom-reg-field-user-pass2",h),j=d("input#wp-submit",h);d("input#user_email",h).attr("data-expected","email");d("input#user_login, input#user_email, input#captcha_code",h).attr({"aria-required":"true"});d(":input",h).each(function(){var m=d.trim(d(this).attr("id")).replace(/---[0-9]+$/g,"");if(d.inArray(m,["user_login","user_email","captcha_code"])!==-1){if((g=d.trim(d(this).parent("label").text().replace(/[\r\n\t]+/g," ")))){if(f=ws_plugin__s2member_validationErrors(g,this,h)){l+=f+"\n\n"}}}else{if(m&&(g=d.trim(d('label[for="'+m+'"]',h).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(f=ws_plugin__s2member_validationErrors(g,this,h)){l+=f+"\n\n"}}}});if(l=d.trim(l)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+l);return false}else{if(k.length&&d.trim(k.val())!==d.trim(i.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(k.length&&d.trim(k.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}}}ws_plugin__s2member_animateProcessing(j);return true})}if(/\/wp-admin\/(?:user\/)?profile\.php/.test(location.href)){d("form#your-profile").submit(function(){var h=this,g="",f="",i="";d("input#email",h).attr("data-expected","email");d(':input[id^="ws-plugin--s2member-profile-"]',h).each(function(){var j=d.trim(d(this).attr("id")).replace(/---[0-9]+$/g,"");if(j&&(g=d.trim(d('label[for="'+j+'"]',h).first().text().replace(/[\r\n\t]+/g," ")))){if(f=ws_plugin__s2member_validationErrors(g,this,h)){i+=f+"\n\n"}}});if(i=d.trim(i)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+i);return false}return true})}if(c){d("body.registration form div#ws-plugin--s2member-custom-reg-fields-4bp-section").closest("form").submit(function(){var h=this,g="",f="",i="";d("input#signup_email",h).attr("data-expected","email");d("input#signup_username, input#signup_email, input#signup_password, input#field_1",h).attr({"aria-required":"true"});d(":input",h).each(function(){var j=d.trim(d(this).attr("id")).replace(/---[0-9]+$/g,"");if(j&&(g=d.trim(d('label[for="'+j+'"]',h).first().text().replace(/[\r\n\t]+/g," ")))){if(f=ws_plugin__s2member_validationErrors(g,this,h)){i+=f+"\n\n"}}});if(i=d.trim(i)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+i);return false}return true});d("body.logged-in.profile.profile-edit :input.ws-plugin--s2member-profile-field-4bp").closest("form").submit(function(){var h=this,g="",f="",i="";d("input#field_1",h).attr({"aria-required":"true"});d(":input",h).each(function(){var j=d.trim(d(this).attr("id")).replace(/---[0-9]+$/g,"");if(j&&(g=d.trim(d('label[for="'+j+'"]',h).first().text().replace(/[\r\n\t]+/g," ")))){if(f=ws_plugin__s2member_validationErrors(g,this,h)){i+=f+"\n\n"}}});if(i=d.trim(i)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+i);return false}return true})}window.ws_plugin__s2member_passwordStrengthMeter=function(h,f){var g=0;if((h!=f)&&f.length>0){return"mismatch"}else{if(h.length<1){return"empty"}else{if(h.length<6){return"short"}}}if(h.match(/[0-9]/)){g+=10}if(h.match(/[a-z]/)){g+=10}if(h.match(/[A-Z]/)){g+=10}if(h.match(/[^0-9a-zA-Z]/)){g=(g===30)?g+20:g+10}if(g<30){return"bad"}if(g<50){return"good"}return"strong"};window.ws_plugin__s2member_passwordStrength=function(h,k,i,g){if(h instanceof jQuery&&k instanceof jQuery&&i instanceof jQuery&&g instanceof jQuery){var j={empty:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Strength indicator", "s2member-front", "s2member")); ?>',"short":'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Very weak", "s2member-front", "s2member")); ?>',bad:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Weak", "s2member-front", "s2member")); ?>',good:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Medium", "s2member-front", "s2member")); ?>',strong:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Strong", "s2member-front", "s2member")); ?>',mismatch:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Mismatch", "s2member-front", "s2member")); ?>'};g.removeClass("ws-plugin--s2member-password-strength-short");g.removeClass("ws-plugin--s2member-password-strength-bad");g.removeClass("ws-plugin--s2member-password-strength-good");g.removeClass("ws-plugin--s2member-password-strength-strong");g.removeClass("ws-plugin--s2member-password-strength-mismatch");g.removeClass("ws-plugin--s2member-password-strength-empty");var f=ws_plugin__s2member_passwordStrengthMeter(k.val(),i.val());g.addClass("ws-plugin--s2member-password-strength-"+f).html(j[f])}};window.ws_plugin__s2member_validationErrors=function(r,q,g,m,l){if(typeof r==="string"&&r&&typeof q==="object"&&typeof g==="object"){if(typeof q.tagName==="string"&&/^(input|textarea|select)$/i.test(q.tagName)&&!q.disabled){var t=q.tagName.toLowerCase(),p=d(q),o=d.trim(p.attr("type")).toLowerCase(),f=d.trim(p.attr("name")),s=p.val();m=(typeof m==="boolean")?m:(p.attr("aria-required")==="true"),l=(typeof l==="string")?l:d.trim(p.attr("data-expected"));var k=('<?php echo strlen($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["custom_reg_force_personal_emails"]); ?>'>0);var i=new RegExp('^(<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (implode ("|", preg_split ("/[\r\n\t ;,]+/", preg_quote ($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["custom_reg_force_personal_emails"], "/")))); ?>)@',"i");if(t==="input"&&o==="checkbox"&&/\[\]$/.test(f)){if(typeof q.id==="string"&&/-0$/.test(q.id)){if(m&&!d('input[name="'+ws_plugin__s2member_escjQAttr(f)+'"]:checked',g).length){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please check at least one of the boxes.", "s2member-front", "s2member")); ?>'}}}else{if(t==="input"&&o==="checkbox"){if(m&&!q.checked){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Required. This box must be checked.", "s2member-front", "s2member")); ?>'}}else{if(t==="input"&&o==="radio"){if(typeof q.id==="string"&&/-0$/.test(q.id)){if(m&&!d('input[name="'+ws_plugin__s2member_escjQAttr(f)+'"]:checked',g).length){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please select one of the options.", "s2member-front", "s2member")); ?>'}}}else{if(t==="select"&&p.attr("multiple")){if(m&&(!(s instanceof Array)||!s.length)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please select at least one of the options.", "s2member-front", "s2member")); ?>'}}else{if(typeof s!=="string"||(m&&!(s=d.trim(s)).length)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("This is a required field, please try again.", "s2member-front", "s2member")); ?>'}else{if((s=d.trim(s)).length&&((t==="input"&&/^(text|password)$/i.test(o))||t==="textarea")&&typeof l==="string"&&l.length){if(l==="numeric-wp-commas"&&(!/^[0-9\.,]+$/.test(s)||isNaN(s.replace(/,/g,"")))){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be numeric (with or without decimals, commas allowed).", "s2member-front", "s2member")); ?>'}else{if(l==="numeric"&&(!/^[0-9\.]+$/.test(s)||isNaN(s))){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be numeric (with or without decimals, no commas).", "s2member-front", "s2member")); ?>'}else{if(l==="integer"&&(!/^[0-9]+$/.test(s)||isNaN(s))){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be an integer (a whole number, without any decimals).", "s2member-front", "s2member")); ?>'}else{if(l==="integer-gt-0"&&(!/^[0-9]+$/.test(s)||isNaN(s)||s<=0)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be an integer > 0 (whole number, no decimals, greater than 0).", "s2member-front", "s2member")); ?>'}else{if(l==="float"&&(!/^[0-9\.]+$/.test(s)||!/[0-9]/.test(s)||!/\./.test(s)||isNaN(s))){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a float (floating point number, decimals required).", "s2member-front", "s2member")); ?>'}else{if(l==="float-gt-0"&&(!/^[0-9\.]+$/.test(s)||!/[0-9]/.test(s)||!/\./.test(s)||isNaN(s)||s<=0)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a float > 0 (floating point number, decimals required, greater than 0).", "s2member-front", "s2member")); ?>'}else{if(l==="date"&&!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a date (required date format: dd/mm/yyyy).", "s2member-front", "s2member")); ?>'}else{if(l==="email"&&!/^[a-zA-Z0-9_!#$%&*+=?`{}~|\/\^\'\-]+(?:\.?[a-zA-Z0-9_!#$%&*+=?`{}~|\/\^\'\-]+)*@[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9]+)*(?:\.[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9]+)*)*(?:\.[a-zA-Z][a-zA-Z0-9]+)?$/.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a valid email address.", "s2member-front", "s2member")); ?>'}else{if(l==="email"&&k&&i.test(s)){return r+"\n"+d.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please use a personal email address.\nAddresses like <%s@> are problematic.", "s2member-front", "s2member")); ?>',s.split("@")[0])}else{if(l==="url"&&!/^https?\:\/\/.+$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a full URL (starting with http or https).", "s2member-front", "s2member")); ?>'}else{if(l==="domain"&&!/^[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9]+)*(?:\.[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9]+)*)*(?:\.[a-zA-Z][a-zA-Z0-9]+)?$/.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a domain name (domain name only, without http).", "s2member-front", "s2member")); ?>'}else{if(l==="phone"&&(!/^[0-9 ()\-]+$/.test(s)||s.replace(/[^0-9]+/g,"").length!==10)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a phone # (10 digits w/possible hyphens, spaces, brackets).", "s2member-front", "s2member")); ?>'}else{if(l==="uszip"&&!/^[0-9]{5}(?:\-[0-9]{4})?$/.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a US zipcode (5-9 digits w/ possible hyphen).", "s2member-front", "s2member")); ?>'}else{if(l==="cazip"&&!/^[0-9A-Z]{3} ?[0-9A-Z]{3}$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a Canadian zipcode (6 alpha-numerics w/possible space).", "s2member-front", "s2member")); ?>'}else{if(l==="uczip"&&!/^[0-9]{5}(?:\-[0-9]{4})?$/.test(s)&&!/^[0-9A-Z]{3} ?[0-9A-Z]{3}$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be a zipcode (either a US or Canadian zipcode).", "s2member-front", "s2member")); ?>'}else{if(/^alphanumerics\-spaces\-punctuation\-[0-9]+(?:\-e)?$/.test(l)&&!/^[a-z 0-9\/\\\\,.?:;"\'{}[\]\^|+=_()*&%$#@!`~\-]+$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please use alphanumerics, spaces & punctuation only.", "s2member-front", "s2member")); ?>'}else{if(/^alphanumerics\-spaces\-[0-9]+(?:\-e)?$/.test(l)&&!/^[a-z 0-9]+$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please use alphanumerics & spaces only.", "s2member-front", "s2member")); ?>'}else{if(/^alphanumerics\-punctuation\-[0-9]+(?:\-e)?$/.test(l)&&!/^[a-z0-9\/\\\\,.?:;"\'{}[\]\^|+=_()*&%$#@!`~\-]+$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please use alphanumerics & punctuation only (no spaces).", "s2member-front", "s2member")); ?>'}else{if(/^alphanumerics\-[0-9]+(?:\-e)?$/.test(l)&&!/^[a-z0-9]+$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please use alphanumerics only (no spaces/punctuation).", "s2member-front", "s2member")); ?>'}else{if(/^alphabetics\-[0-9]+(?:\-e)?$/.test(l)&&!/^[a-z]+$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please use alphabetics only (no digits/spaces/punctuation).", "s2member-front", "s2member")); ?>'}else{if(/^numerics\-[0-9]+(?:\-e)?$/.test(l)&&!/^[0-9]+$/i.test(s)){return r+'\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please use numeric digits only.", "s2member-front", "s2member")); ?>'}else{if(/^(?:any|alphanumerics\-spaces\-punctuation|alphanumerics\-spaces|alphanumerics\-punctuation|alphanumerics|alphabetics|numerics)\-[0-9]+(?:\-e)?$/.test(l)){var n=l.split("-"),h=Number(n[1]),j=(n.length>2&&n[2]==="e");if(j&&s.length!==h){return r+"\n"+d.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be exactly %s %s.", "s2member-front", "s2member")); ?>',h,((n[0]==="numerics")?((h===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("digit", "s2member-front", "s2member")); ?>':'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("digits", "s2member-front", "s2member")); ?>'):((h===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("character", "s2member-front", "s2member")); ?>':'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("characters", "s2member-front", "s2member")); ?>')))}else{if(s.length<h){return r+"\n"+d.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Must be at least %s %s.", "s2member-front", "s2member")); ?>',h,((n[0]==="numerics")?((h===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("digit", "s2member-front", "s2member")); ?>':'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("digits", "s2member-front", "s2member")); ?>'):((h===1)?'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("character", "s2member-front", "s2member")); ?>':'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("characters", "s2member-front", "s2member")); ?>')))}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}return""};window.ws_plugin__s2member_animateProcessing=function(g,f){if(f){d(g).removeClass("ws-plugin--s2member-animate-processing")}else{d(g).addClass("ws-plugin--s2member-animate-processing")}};window.ws_plugin__s2member_escAttr=function(f){if(/[&\<\>"']/.test(f=String(f))){f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),f=f.replace(/"/g,"&quot;").replace(/'/g,"&#039;")}return f};window.ws_plugin__s2member_escjQAttr=function(f){return String(f).replace(/([.:\[\]])/g,"\\$1")}});