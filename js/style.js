// JavaScript Document


      /*
       * Below limelight_message array is meant to allow you to translate javascript based messages to whatever language your webform is intended for.  webForms.js is out of your control
       */
      var limelight_messages=new Array();
      //Error messages
      limelight_messages["invalid_military"]            = 'All military states must have a city of either "APO", "FPO", or "DPO".  Please adjust your city.';    //caller inline - form_validator()
      limelight_messages["invalid_email"]               = "Invalid E-mail Address";              //caller webForms.js - isValidEmail()
      limelight_messages["invalid_promo"]               = "Please enter a valid promo code.";    //caller webForms.js - CheckProductCode()
      limelight_messages["invalid_routing_number"]      = "Please Enter Your Routing Number";    //caller inline - form_validator()
      limelight_messages["invalid_account_number"]      = "Please Enter Your Account Number";    //caller inline - form_validator()
      limelight_messages["invalid_eft_bank_number"]     = "Please Enter Your Bank Number";       //caller inline - form_validator()
      limelight_messages["invalid_eft_account_number"]  = "Please Enter Your Account Number";    //caller inline - form_validator()
      limelight_messages["invalid_no_fields_entered"]   = "Please Fill in all fields";           //caller inline - form_validator()
      limelight_messages["invalid_credit_card"]         = "Invalid credit card number";          //caller inline - form_validator()
      limelight_messages["invalid_boleto"]              = "Invalid CNPJ or CPF ID";              //caller inline - form_validator()
      limelight_messages["invalid_terms"]               = "Please Agree with the Terms";         //caller inline - form_validator()
      limelight_messages["invalid_billing_fname"]       = "Please enter your Billing First Name";//caller inline - form_validator()
      limelight_messages["invalid_billing_lname"]       = "Please enter your Billing Last Name"; //caller inline - form_validator()
      limelight_messages["invalid_billing_city"]        = "Please enter your Billing City";      //caller inline - form_validator()
      limelight_messages["invalid_billing_address"]     = "Please enter your Billing Address";   //caller inline - form_validator()
      limelight_messages["invalid_billing_zip"]         = "Please enter your Billing Zip";       //caller inline - form_validator()
      limelight_messages["invalid_billing_country"]     = "Please chooose your Billing Country"; //caller inline - form_validator()
      limelight_messages["invalid_state"]               = "Please specify the state";            //caller inline - form_validator()

      //Text messages
      limelight_messages["txt_issue_id"]    = "Issue Id:";                           //caller webForms.js - payment_change() for solo/switch/maestro
      limelight_messages["txt_cvv"]         = "Security Code:";                      //caller webForms.js - payment_change() for other card types when solo/switch/maestro are used
      limelight_messages["txt_credit_card"] = "Credit Card Number:";                 //caller webForms.js - payment_change() when toggling between boleto and credit card numbers the same data element is used and label changed
      limelight_messages["txt_boleto"]      = "CNPJ or CPF ID:";                     //caller webForms.js - payment_change() when toggling between boleto and credit card numbers the same data element is used and label changed
      limelight_messages["txt_account_no"]  = "Account Number:";                     //caller webForms.js - payment_change() when toggling between checking and EFT payments the same data element is used and label changed
      limelight_messages["txt_routing_no"]  = "Routing Number:";                     //caller webForms.js - payment_change() when toggling between checking and EFT payments the same data element is used and label changed
      limelight_messages["txt_eft_bank_no"] = "Bank Number:";                        //caller webForms.js - payment_change() when toggling between checking and EFT payments the same data element is used and label changed
      limelight_messages["txt_eft_act_no"]  = "Account Number:";                     //caller webForms.js - payment_change() when toggling between checking and EFT payments the same data element is used and label changed

      //State Labels
      
      limelight_messages["txt_state_label_state"]      = "State";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_province"]      = "Province";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_county"]      = "County";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_island"]      = "Island";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_parish"]      = "Parish";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_region"]      = "Region";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_district"]      = "District";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_governorate"]      = "Governorate";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_division"]      = "Division";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_department"]      = "Department";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_municipality"]      = "Municipality";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_prefecture"]      = "Prefecture";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_commune"]      = "Commune";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_quarter"]      = "Quarter";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_canton"]      = "Canton";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_emirate"]      = "Emirate";                     //caller webForms.js - ChangeStateLabel()
      limelight_messages["txt_state_label_city"]      = "City";                     //caller webForms.js - ChangeStateLabel()
      
      limelight_messages["txt_state_select_state"]      = "Select State";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_province"]      = "Select Province";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_county"]      = "Select County";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_island"]      = "Select Island";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_parish"]      = "Select Parish";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_region"]      = "Select Region";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_district"]      = "Select District";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_governorate"]      = "Select Governorate";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_division"]      = "Select Division";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_department"]      = "Select Department";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_municipality"]      = "Select Municipality";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_prefecture"]      = "Select Prefecture";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_commune"]      = "Select Commune";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_quarter"]      = "Select Quarter";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_canton"]      = "Select Canton";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_emirate"]      = "Select Emirate";                     //caller webForms.js - ChangeCountry() first selection in select box label
      limelight_messages["txt_state_select_city"]      = "Select City";                     //caller webForms.js - ChangeCountry() first selection in select box label

      //Paypal
      limelight_messages["paypal_begin"]                   = "A new window will be opened for you. Once completed, you will be returned here to finish the payment process.";  //caller paypal.js - Process begin message
      limelight_messages["paypal_response_received"]       = "Paypal reponse received...";                                                                                     //caller paypal.js - Response retrieval success, continue processing
      limelight_messages["paypal_waiting_timer"]           = "Waiting for response...<div id=\"paypal_timer\"><TIME></div>";                                               //caller paypal.js - Timer alert while waiting for paypal response. If using custom handler, an html element with id 'paypal_timer' can be wrapped around <TIME> token to be dynamically updated
      limelight_messages["paypal_error_security_token"]    = "Security error, token does not match!";                                                                          //caller paypal.js - Error matching limelight token from response. Processing ends
      limelight_messages["paypal_retry_time_limit"]        = "Time limit reached! If you have completed your paypal login, you can click ok to check again.";                  //caller paypal.js - Time limit reached. Manual check for response required
      limelight_messages["paypal_cancel"]                  = "Paypal cancellation detected! You must complete the paypal form to continue.";                                   //caller paypal.js - Error retrieving response. Manual retry
      limelight_messages["paypal_retry_response"]          = "Error retrieving response. Click ok to try again.";                                                              //caller paypal.js - Error retrieving response. Manual retry

      var required_fields=new Array();
      var required_fields_label=new Array();

	required_fields[0]='fields_fname';
	required_fields_label[0]='First Name';
	required_fields[1]='fields_lname';
	required_fields_label[1]='Last Name';
	required_fields[2]='fields_address1';
	required_fields_label[2]='Street Address';
	required_fields[3]='fields_city';
	required_fields_label[3]='City';
	required_fields[4]='fields_zip';
	required_fields_label[4]='Zip Code';
required_fields[5]='country';
required_fields_label[5]='Country';
	required_fields[6]='fields_state';
	required_fields_label[6]='State';
	required_fields[7]='fields_phone';
	required_fields_label[7]='Phone';

	required_fields[8]='fields_email';
	required_fields_label[8]='Email';
	required_fields[9]='cc_type';
	required_fields_label[9]='Payment Type';
	required_fields[10]='cc_number';
	required_fields_label[10]='Credit Card Number';
	required_fields[11]='cc_expires';
	required_fields_label[11]='Exp. Date';
	required_fields[12]='cc_cvv';
	required_fields_label[12]='Security Code';

   /*
    * AlertHandler allows you to either use a standard alert to show errors or customize to some kind of HTML version of your own
    */
   function AlertHandler(message)
   {
      alert(message);
   }

   /*
    * ConfirmHandler allows you to either use a standard winbdow.confirm to show errors or customize to some kind of HTML version of your own. Must return boolean
    */
   function ConfirmHandler(message)
   {
      return window.confirm(message);
   }

   function form_validator()
   {
      if (document.getElementById('hasFormSubmitted').value != '')
      {
         var prevPost = new Date(document.getElementById('hasFormSubmitted').value);
         prevPost.setSeconds(prevPost.getSeconds() + 3);
         var currentTime = new Date();
         if (prevPost < currentTime)
         {
            // -- blank out the formsubmitted because user went back and forth and hidden values still cached
            document.getElementById('hasFormSubmitted').value = '';
         }
      }

      var ccReq = false;
      var empty_fields=new Array();
      var empty_field_num=new Array();
      var empty_count=0;
      var str='field indicated Cant be empty:';
      for (i=0;i<required_fields.length;i++)
      {
         var field_ref=document.getElementById(required_fields[i]);

         if (required_fields[i] == 'cc_number')
         {
            ccReq = true;
         }

         if ((required_fields[i] == 'cc_number' || required_fields[i] == 'cc_expires' || required_fields[i] == 'cc_cvv') &&
             (document.getElementById('cc_type').value == 'checking' ||
             document.getElementById('cc_type').value == 'eft_germany' ||
             document.getElementById('cc_type').value == 'offline' ||
             document.getElementById('cc_type').value == 'boleto' ||
             document.getElementById('cc_type').value == 'giro' ||
             document.getElementById('cc_type').value == 'paypal'
             ))
         {
            ccReq = false;
            continue;
         }


         if (required_fields[i] == 'fields_state2')
         {
            var funcName = 'SetCountryValue2';
            if (typeof funcName == 'string' && eval('typeof ' + funcName) == 'function')
            {
               eval(funcName+'()');
            }
         }

         if (required_fields[i] == 'fields_state2' || required_fields[i] == 'fields_state') {
            if (validateMilitary(required_fields[i],'fields_city') == false)
            {
               AlertHandler(GetTranslation('invalid_military'));
               return;
            }
         }


         //catch all spaces, this is invalid
         var tempStr = field_ref.value.ltrim();

         if ((tempStr =='') || (tempStr == ' '))
         {
            var label = required_fields_label[i];
            if (label == 'State')
            {
               label = ll('#fields_state_region').text().replace(':', '');
            }
            empty_fields[empty_count] = label;
            empty_field_num[empty_count]=i;
            empty_count++;
         }
         if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value==''))
         {
            empty_fields[empty_count]=required_fields_label[i];
            empty_field_num[empty_count]=i;
            empty_count++;
         }
      }

      if (document.getElementById('cc_type'))
      {
         if (document.getElementById('cc_type').value == 'checking' || document.getElementById('cc_type').value == 'eft_germany')
         {
            // -- checking account / eft validation
            var routing_key = 'invalid_routing_number',
                account_key = 'invalid_account_number';

            if (document.getElementById('cc_type').value == 'eft_germany')
            {
               var routing_key = 'invalid_eft_bank_number',
                   account_key = 'invalid_eft_account_number';
            }

            field_ref = document.getElementById('routing_number');
            if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value==''))
            {
               AlertHandler(GetTranslation(routing_key));
               field_ref.focus();
               return;
            }
            field_ref = document.getElementById('account_number');
            if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value==''))
            {
               AlertHandler(GetTranslation(account_key));
               field_ref.focus();
               return;
            }
         }
      }

      for(x in empty_fields)
      {
         str=str+'<br/>'+empty_fields[x];
         if(empty_fields[x] != undefined )
         {
            AlertHandler('Please Enter Your ' + empty_fields[x] + '');
            document.getElementById(required_fields[empty_field_num[x]]).focus();
         }
         else
         {
            AlertHandler(GetTranslation('invalid_no_fields_entered'));
         }
         return;
      }

      if ( document.getElementById('cc_number')!=undefined && (ccReq || document.getElementById('cc_type').value == 'boleto'))
      {
         if (document.getElementById('cc_type').value == 'boleto' && document.getElementById('cc_number').value.length < 11)
         {
            AlertHandler(GetTranslation('invalid_boleto'));
            return;
         }
         else if (document.getElementById('cc_type').value != 'boleto' && document.getElementById('cc_number').value.length<13)
         {
            AlertHandler(GetTranslation('invalid_credit_card'));
            return;
         }
      }
      var tm_check = document.getElementById('terms');
      if(tm_check && tm_check.checked==false)
      {
         AlertHandler(GetTranslation('invalid_terms'));
         return;
      }
      if (document.getElementById('radioTwo')!=undefined)
      {
         var radio2Obj = document.getElementById('radioTwo');
         if (radio2Obj.checked)
         {
            field_ref = document.getElementById('billing_street_address');
            if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == '') )
            {
               AlertHandler(GetTranslation('invalid_billing_address'));
               return;
            }
            field_ref = document.getElementById('billing_fname');
            if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == '') )
            {
               AlertHandler(GetTranslation("invalid_billing_fname"));
               return;
            }
            field_ref = document.getElementById('billing_lname');
            if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == '') )
            {
               AlertHandler(GetTranslation("invalid_billing_lname"));
               return;
            }
            field_ref = document.getElementById('billing_city');
            if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == ''))
            {
               AlertHandler(GetTranslation('invalid_billing_city'));
               return;
            }
            var state_select_is_visible = (ll('#billing_state').is(':visible') == true);
            field_ref = document.getElementById('billing_state');
            if (state_select_is_visible)
            {
               if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == ''))
               {
                  var label = ll('#billing_state_region').text().replace(':', '');
                  AlertHandler("Please enter your " + label);
                  return;
               }

               if (validateMilitary('billing_state','billing_city') == false)
               {
                  AlertHandler(GetTranslation('invalid_military'));
                  return;
               }
            }
            var region_is_visible = (ll('#billing_state2').is(':visible') == true);
            field_ref = document.getElementById('billing_state2');
            if (region_is_visible)
            {
               if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == ''))
               {
                  var label = ll('#billing_state_region').text().replace(':', '');
                  AlertHandler("Please enter your " + label);
                  return;
               }
               else
               {
                  //store the international region value
                  ll(new Option(ll('#billing_state2').val(), ll('#billing_state2').val())).appendTo('#billing_state').attr('selected', 'selected');
               }
            }

            field_ref = document.getElementById('billing_postcode');
            if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == ''))
            {
               AlertHandler(GetTranslation('invalid_billing_zip'));
               return;
            }
            if (document.getElementById('billing_country')!=undefined)
            {
               field_ref = document.getElementById('billing_country');
               if((field_ref.length==0)||(field_ref.value==null) || (field_ref.value=='') || (field_ref.value.ltrim() == ''))
               {
                  AlertHandler(GetTranslation('invalid_billing_country'));
                  return;
               }
            }

         }
      }
      if(empty_count!=0)
      {
         var diverr=document.getElementById('err');
         diverr.innerHTML='';
         diverr.innerHTML=str;
      }
      else
      {
         if (ll('#fields_email').is(':visible') == true)
         {
            var emailCheck = isValidEmail(document.forms['opt_in_form'].fields_email.value);
         }
         else
         {
            var emailCheck = true;
         }
         if(emailCheck)
         {
            if (document.getElementById['state_cus2']!=undefined)
            {
               if ((document.getElementById['state_cus2'].style.display == 'inline') && (document.forms['opt_in_form'].fields_state2.value.length<2))
               {
                  AlertHandler(GetTranslation('invalid_state'));
                  return;
               }
               else
               {
                  if (document.getElementById('hasFormSubmitted').value == '')
                  {
                     if (ll('#cc_type').val() == 'paypal')
                     {
                        PaypalPopup();
                     }
                     else
                     {
                        SubmitForm();
                     }
                  }
               }
            }
            else
            {
               if (document.getElementById('hasFormSubmitted').value == '')
               {
                  if (ll('#cc_type').val() == 'paypal')
                  {
                     PaypalPopup();
                  }
                  else
                  {
                     SubmitForm();
                  }
               }
            }
         }
      }
   }

   function SubmitForm()
   {
      var d=new Date();
      document.getElementById('hasFormSubmitted').value = d.toUTCString();
      document.charset = 'ISO-8859-1';
      document.opt_in_form.submit();
   }

   

   ll(document).ready(function() {
      

      hidState = ll('#fields_state_hid');
      if (hidState.length && hidState.val().length > 0)
      {
         var list = {
            obj       : '#country',
            targetObj : '#state_cus1',
            sel       : hidState.val(),
            id        : false,
            spinner   : false,
            focus     : false
         };
         ChangeCountry(list);
      }

      hidBillingState = ll('#billing_state_hid');
      if (hidBillingState.length && hidBillingState.val().length > 0)
      {
         var list = {
            obj       : '#billing_country',
            targetObj : '#billing_state_cus1',
            sel       : hidBillingState.val(),
            id        : 'billing_state',
            spinner   : false,
            focus     : false
         };
         ChangeCountry(list);
      }

      // Re-check billing fields
      if (ll('input[name="billingSameAsShipping"]:checked').val() == 'no')
      {
         ll('#radioTwo').click();
      }

      // Reset paypal check
      if (ll('#paypal_response_flag'))
      {
         ll('#paypal_response_flag').val('0');
      }
   });
 