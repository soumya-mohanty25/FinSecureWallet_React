$(function() {

		$('.AlphabetsOnly').keydown(function(e) {
			
	    	var regex = new RegExp(/^[a-zA-Z\s]+$/);
	   		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
	    	var isNumberPadKey = e.keyCode >= 96 && e.keyCode <= 111;
	    
	    	if (e.key != "Backspace") {
	        	// Check if the space is entered as the first character
	        if (e.target.selectionStart === 0 && str.trim() === "") {
	            e.preventDefault();
	            return false;
	        }        
	        if (regex.test(str) && !isNumberPadKey) {
	            return true;
	        } else {
	            e.preventDefault();
	            return false;
	        }
	    }
	});
	
	$('.emailsOnly').on("blur", function (e) {
	    var regex = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
		if($(this).val() != ""){
	 	   if (regex.test($(this).val())) {
			    $(this).removeClass("is-invalid");
	     	    return true;
	   		 } else {
	       		 $(this).val('').addClass("is-invalid");
	       		 return false;
	   		 }
		}
	});
	
	
	$('.NumbersOnly').on('keyup', function(event) {
				var regex = new RegExp("/^\d+$/");
				var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
				if (!regex.test(key)) {
					var getkey;
					getkey = $(event.target);
					getkey.val(getkey.val().replace(/[^0-9]+/g, ""));
					event.preventDefault();
					return false;
				}
		});
		
		$('.NumbersOnlyWithDots').on('keyup', function(event) {
				var regex = new RegExp("/^\d+$/");
				var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
				if (!regex.test(key)) {
					var getkey;
					getkey = $(event.target);
					getkey.val(getkey.val().replace(/[^0-9.]+/g, ""));
					event.preventDefault();
					return false;
				}
		});


	$('.NumbersOnlyWithoutDot').keydown(function(e) {
		var regex = new RegExp(/^[0-9]+|[\b]+$/); // space given because of issue
		var str = e.key;
		if (regex.test(str) || str == 'Backspace' || str == 'Tab') {
			return true;
		} else {
			e.preventDefault();
			return false;
		}
	});
	
	$('.NumbersOnlyWithoutDotAndFirstNoNotZero').keydown(function(e) {
	    var inputValue = $(this).val();
	    if (inputValue.length === 0 && e.key === '0') {
	        e.preventDefault();
	        return false;
	    }
	    var regex = new RegExp(/^[0-9]+|[]+$/); // space given because of issue
	    var str = e.key;
	    if (regex.test(str) || str === 'Backspace' || str === 'Tab') {
	        return true;
	    } else {
	        e.preventDefault();
	        return false;
	    }
	});


	
	$('.AlphaNumericOnly').on('keypress', function(event) {
				 var regex = /^[a-zA-Z0-9]+$/; // Updated regular expression without hyphen
  				 var key = String.fromCharCode(event.charCode);
  				if (key === '-') {
   					    event.preventDefault();
    				    return false;
  						}
  				if (!regex.test(key)) {
    					  event.preventDefault();
    					  return false;
  								}
		});
	
	$('.AlphaNumericWithOneHypen').on('keypress', function(event) {
  			var input = $(this).val();
  			var regex = /^[a-zA-Z0-9-]*$/;
  			var key = String.fromCharCode(event.charCode);
 			 if (key === '-') {
   			 if (input.length === 0) {
      				event.preventDefault();
      				return false;
    			}

    		// Prevent multiple hyphens
    		if (input.includes('-')) {
      				event.preventDefault();
      				return false;
    		}
  		}

  			// Test the key against the regular expression
  			if (!regex.test(key)) {
    				event.preventDefault();
    				return false;
  				}
		});
});


$(document).ready(function() {
           $('.NumbersAndOnlyOneDot').keypress(function(event) {
            return isNumber(event, this)
             });
         });

    function isNumber(evt, element) {
    	var value = $(element).val();
    	var charCode = (evt.which) ? evt.which : event.keyCode;

    	// Check if the dot is entered as the first character
    	if (charCode === 46 && value.length === 0) {
       	 		return false;
    		}
   		 if (
	//          (charCode != 45 || value.indexOf('-') != -1) && // "-" CHECK MINUS, AND ONLY ONE.
        		(charCode != 46 || value.indexOf('.') != -1) && // "." CHECK DOT, AND ONLY ONE.
        		(charCode < 48 || charCode > 57)
    		) {
        return false;
    	}
    	return true;
	}
	
	
	
	
	$(document).ready(function() {
    $('.NumbersAndOnlyOneDotAfterDecimalTwoLetter').keypress(function(event) {
        return isDecimalNumber(event, this);
    });
});


	$(document).ready(function() {
    $('.OneDotAfterDecimalTwoLetterFirstZeroAllowed').keypress(function(event) {
        return isDecimalNumberWithZeroStart(event, this);
    });
});


function isDecimalNumber(evt, element) {
    var value = $(element).val();
    var charCode = (evt.which) ? evt.which : event.keyCode;

    // Check if the dot is entered as the first character
    if (charCode === 46 && value.length === 0) {
        return false;
    }

	    // Check if the first character is '0'
    if (value.length === 0 && charCode === 48) {
        return false;
    }
    
    if (
        
        (charCode != 46 || value.indexOf('.') != -1) && 
        (charCode < 48 || charCode > 57)
    ) {
        return false;
    }

    if (value.indexOf('.') != -1) {
        var parts = value.split('.');
        if (parts[1].length >= 2) {
            return false;
        }
    }

    return true;
}

function formatDecimal(input) {
  var value = input.value;

  // Check if there's a decimal point
  if (!value.includes('.')) {
    // If not, add ".00" to the end
    value += ".00";
  } else {
    // If there's a decimal point, split the value
    var parts = value.split('.');
    if (parts[1].length === 1) {
      // If there's only one decimal place, add a trailing zero
      value += "0";
    }
  }

  // Check if the input ends with a decimal point
  if (value.endsWith('.')) {
    value += "00";
  }

  input.value = value;
}

	function validatedMobileNumber(mobile) {
    // Remove spaces or dashes (optional)
    mobile = mobile.replace(/\s|-/g, '');

    // Regex to check if mobile number is exactly 10 digits
    var regex = /^[0-9]{10}$/;

    return regex.test(mobile);
}
	
	
	
	function validateMobileNo(element) {
    
    var inputValue = element.value.replace(/\D/g, '');
    if (inputValue === '' || isNaN(inputValue)) {
        element.value = '';
        return false;
    }
    if (inputValue.length !== 10) {
        element.value = '';
        return false;
    }
    element.value = inputValue;
    return true;
}

$('.pinInput').on("blur", function (e) {
	debugger
    var pinRegex = /^\d{6}$/; // Regex for a 6-digit PIN code

    if ($(this).val() != "") {
        if (pinRegex.test($(this).val())) {
            $(this).removeClass("is-invalid");
            return true;
        } else {
            $(this).val('').addClass("is-invalid");
            return false;
        }
    }
});

function validateEmail(emailField) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (reg.test(emailField.value) == false) {
		bootbox.alert("Please provide a valid Email ID");
		var result = emailField.value.replace(
				/[a-zA-Z!&#@^/#+()$~%&\\\|\.''"":;*?<>{}]/g, '');
		emailField.value = result;
		emailField.value = '';
		emailField.focus();
		return false;
	}
	return true;
}

function validMobileNo(element) {
    // Get value from input
    var mobile = element.value.trim();

    // ✅ Allow only digits
    if (!/^[0-9]+$/.test(mobile)) {
        bootbox.alert("Mobile number must contain digits only.");
        element.value = "";
        element.focus();
        return false;
    }

    // ✅ Check exact length = 10
    if (mobile.length !== 10) {
        bootbox.alert("Mobile number must be exactly 10 digits.");
        element.value = "";
        element.focus();
        return false;
    }

    // ✅ Check starting digit (6,7,8,9)
    if (!/^[6-9]/.test(mobile)) {
        bootbox.alert("Mobile number must start with 6, 7, 8, or 9.");
        element.value = "";
        element.focus();
        return false;
    }

    return true; // ✅ Passed all checks
}

function validVehicleNumber(element) {
    // Get value from input
    var value = element.value.toUpperCase().trim();

    // ✅ Combined regex: Civilian (no spaces) OR Army
    var vehicleRegex = /(^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{1,4}$)|(^[0-9]{2}[A-Z][0-9]{5}[A-Z]?$)/;

    // ❌ Test regex
    if (!vehicleRegex.test(value)) {
        bootbox.alert("Invalid vehicle number format.");
        element.value = "";
        element.focus();
        return false;
    }

    // ✅ Passed all checks
    element.value = value; // Normalize to uppercase
    return true;
}

function validateName(input) {
    const regex = /^[A-Za-z][A-Za-z.', ]*$/;

    if (!regex.test(input.value)) {
        bootbox.alert("Only alphabets (A-Z, a-z), dot (.) and apostrophe (') are allowed.");
        input.value = "";   // clear invalid input
        input.focus();
        return false;
    }

    return true;
}

//function imageCheck(that){
//	var ValidFileExtension = [ 'jpg','jpeg','png','bmp'];
//	if($(that).val().split('.').length == 2 ) {
//	if ($.inArray($("#"+that.id).val().split('.').pop().toLowerCase(), ValidFileExtension) == -1) {
//		$("#"+that.id).val("");
//		bootbox.alert("Sorry! allowed format is jpg,jpeg,png and bmp only.");
//		event.preventDefault();
//		return false;
//	}
//	if ((that.files[0].size) > 5242880) {
//		$(that).val("");
//		bootbox.alert("File size exceeds maximun image size of 5 MB!");
//		return false;
//	}
//  }else{
//	  	   bootbox.alert("Unsupported file format,Please check your file extension");
//	  	   $(that).val("");
//	}
//}

function imageCheck(that) {

    if (!that.files || !that.files[0]) {
        return;
    }

    var file = that.files[0];
    var fileName = file.name.toLowerCase();
    var fileSize = file.size; // in bytes

    var validExtensions = ['jpg', 'jpeg', 'png', 'bmp'];

    var extension = fileName.substring(fileName.lastIndexOf('.') + 1);

    // Extension check
    if ($.inArray(extension, validExtensions) === -1) {
        bootbox.alert("Sorry! Only JPG, JPEG, PNG and BMP files are allowed.");
        that.value = "";
        return false;
    }

    // Size check (5 MB)
    var maxSize = 5 * 1024 * 1024; // 5 MB

    if (fileSize > maxSize) {
        bootbox.alert("File size exceeds maximum limit of 5 MB!");
        that.value = "";
        return false;
    }

    return true;
}



function fileCheck(that){
		var ValidFileExtension = ['pdf'];

	if($(that).val().split('.').length == 2 ) {
		  if ($.inArray($(that).val().split('.').pop().toLowerCase(), ValidFileExtension) == -1) {
				bootbox.alert("Sorry! allowed format is pdf only.");
				$(that).val("");
				return false;
			}
			if ((that.files[0].size) > 2097152) {
				bootbox.alert("File size exceeds maximun file size of 2 MB!");
				$(that).val("");
				return false;
			}
		}else{
	  	   bootbox.alert("Unsupported file format,Please check your file extension");
	  	   $(that).val("");
	 }
	}
	
	function inputFileCheck(that) {
	    const fileInput = $(that);
	    const filePath = fileInput.val();
	    const fileNameParts = filePath.split('.');
	
	    if (fileNameParts.length < 2) {
	        bootbox.alert("Unsupported file format. Please check your file extension.");
	        fileInput.val('');
	        return false;
	    }
	
	    const extension = fileNameParts.pop().toLowerCase();
	    const file = that.files[0];
	
	    // File type config
	    const fileTypes = {
	        image: {
	            extensions: ['jpg', 'jpeg', 'png', 'bmp'],
	            maxSize: 2, // MB
	            message: "image"
	        },
	        pdf: {
	            extensions: ['pdf'],
	            maxSize: 2, // MB
	            message: "PDF"
	        }
	    };
	
	    // Check type and validate
	    for (const type in fileTypes) {
	        const config = fileTypes[type];
	        if (config.extensions.includes(extension)) {
	            if (file && file.size > config.maxSize * 1024 * 1024) {
	                bootbox.alert(`File size exceeds maximum allowed size of ${config.maxSize} MB for ${config.message}!`);
	                fileInput.val('');
	                return false;
	            }
	            return true; // Valid file
	        }
	    }
	
	    bootbox.alert("Sorry! Allowed formats: jpg, jpeg, png, bmp, pdf.");
	    fileInput.val('');
	    return false;
	}
	
	function PPTfileCheck(that){
			debugger;
			var ValidFileExtension = ['ppt','pptx'];
		if($(that).val() != ""){
		if($(that).val().split('.').length == 2 ) {
			  if ($.inArray($(that).val().split('.').pop().toLowerCase(), ValidFileExtension) == -1) {
					bootbox.alert("Sorry! allowed format is PPT or PPTX only.");
					$(that).val("");
					return false;
				}
				if ((that.files[0].size) > 2097152) {
					bootbox.alert("File size exceeds maximun file size of 2 MB!");
					$(that).val("");
					return false;
				}
			}else{
		  	   bootbox.alert("Unsupported file format,Please check your file extension");
		  	   $(that).val("");
		 }}
		}
	
	function SpecificFileCheck(that){
			debugger;
			var ValidFileExtension = ['pdf','jpg','jpeg','png','bmp'];
		if($(that).val() != ""){
		if($(that).val().split('.').length == 2 ) {
			  if ($.inArray($(that).val().split('.').pop().toLowerCase(), ValidFileExtension) == -1) {
					bootbox.alert("Sorry! allowed format is PDF , JPG , PNG only.");
					$(that).val("");
					return false;
				}
				if ((that.files[0].size) > 2097152) {
					bootbox.alert("File size exceeds maximun file size of 2 MB!");
					$(that).val("");
					return false;
				}
			}else{
		  	   bootbox.alert("Unsupported file format,Please check your file extension");
		  	   $(that).val("");
		 }}
		}
		
		
function visitedValidation(that) {

    if (!that.files || !that.files[0]) {
        return;
    }

    var file = that.files[0];
    var fileName = file.name.toLowerCase();
    var fileSize = file.size; // in bytes

    // Allowed extensions
    var validExtensions = ['jpg', 'jpeg', 'png', 'bmp'];

    var extension = fileName.substring(fileName.lastIndexOf('.') + 1);

    // Check extension
    if ($.inArray(extension, validExtensions) === -1) {
        bootbox.alert("Only image files are allowed (JPG, JPEG, PNG, BMP).");
        that.value = "";
        return false;
    }

    // 15 MB = 15 * 1024 * 1024 = 15728640 bytes
    var maxSize = 15 * 1024 * 1024;

    if (fileSize > maxSize) {
        bootbox.alert("File size must be less than or equal to 15 MB.");
        that.value = "";
        return false;
    }

    return true;
}
		
	
	
function nonZeroFirstDigit(that) {
if (that.value.length == 1 && that.value == 0) {
	$("#"+that.id).val('');
}
}
	
function todayDateWithoutTime(dateTime) {
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}

$('.AlphaNumericANDscAnd').keydown(function(e) {
debugger;
		var regex = new RegExp(/^[a-zA-Z0-9_\-@/.\s]+|[\b]+$/);
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			return true;
		} else {
			e.preventDefault();
			return false;
		}
	});

		$('.AllotmentSpcl').on(
			'keydown',
			function(event) {
				var regex = new RegExp("^[1-9]\d*$");
				var key = String.fromCharCode(!event.charCode ? event.which
						: event.charCode);
				if (!regex.test(key)) {
					event.preventDefault();
					return false;
				}
			});
			
	$('.AlphaNumericWithLimitedSpecialChars').keydown(function(e) {
		var regex = new RegExp(/^[a-zA-Z0-9_\-@/./,/;/:/+/=\s]+$/);
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		
		const key = event.key; // const {key} = event; ES6+
	    if (key === "Backspace") {
	       return true;
	    }
		
		if (regex.test(key)) {
			return true;
		} else {
			e.preventDefault();
			return false;
		}
	});
	
	
	function removeLastIndexCommasWithWhiteSpaces(that){
		var finalCheck ="";
		finalCheck =that.value.trim().replace(/,*(?=$)/,''); //.split('-').join('');
	    finalCheck = finalCheck.trim().replace(/-*(?=$)/,''); 		//that.value=that.value.replace(/,(\s+)?$/, '') //.split('-').join('');
		if(finalCheck.match(/,(\s+)?$/)){
		that.value=finalCheck.trim().replace(/,*(?=$)/,'');
		}else{
		that.value=finalCheck.trim().replace(/-*(?=$)/,'');
		}
		return false;  
	}
	
	function currencyConverter(that,fieldId){
		if(that!=""){
			var value = that.replaceAll(",","");
			if(value.includes(".")){
				var splitValues = value.split(".");
				if(splitValues.length>=2){
					if(splitValues[0]==""){
						splitValues[0]="0";
					}
					value=splitValues[0]+"."+splitValues[1];
					if(splitValues[1].length==1){
						value=splitValues[0]+"."+splitValues[1]+"0";		
					}
					if(splitValues[1].length>2 || splitValues[1]==""){
						value=splitValues[0]+".00";		
					}
				}else{
					value=splitValues[0];
				}
			}else{
				value=value+".00";
			}
			//var hiddenFieldId = fieldId.split("Conv")[0];
			$("#"+fieldId+"Converted").val(value);
			value = value.replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
			$("#"+fieldId).val(value);
		}
	}
	
		function currencyConverterForProject(fieldId,index){
		if($("#"+fieldId+""+index).val()!=""){
			var value = $("#"+fieldId+""+index).val().replaceAll(",","");
			if(value.includes(".")){
				var splitValues = value.split(".");
				if(splitValues.length>=2){
					if(splitValues[0]==""){
						splitValues[0]="0";
					}
					value=splitValues[0]+"."+splitValues[1];
					if(splitValues[1].length==1){
						value=splitValues[0]+"."+splitValues[1]+"0";		
					}
					if(splitValues[1].length>2 || splitValues[1]==""){
						value=splitValues[0]+".00";		
					}
				}else{
					value=splitValues[0];
				}
			}else{
				value=value+".00";
			}
			//var hiddenFieldId = fieldId.split("Conv")[0];
			$("#"+fieldId+"Converted"+index).val(value);
			value = value.replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
			$("#"+fieldId+""+index).val(value);
		}
	}
	
	function CodeValidation(Type,fieldId,value){	
		$.ajax({
			type : "GET",
			url : window.contextPath+'/mst/validateCode',
			data : {
				"Code" : value,
				"type" :Type
			}, 
			success : function(response) {
			var data=JSON.parse(response);
			if(data[0].isDuplicate ==true){			
						bootbox.alert("Duplicate Code Not Allowed");
						$("#"+fieldId).val("");
					}			
			}, 
			error : function(error) {
			bootbox.alert("Time out");
			
			}
		});
	} 
	
	function changeCase(txt,fieldId) {
    let str1 = "";
    for (let i = 0; i < txt.length; i++) {
        if (/[A-Z]/.test(txt[i])) str1 += txt[i].toUpperCase();
        else str1 += txt[i].toUpperCase();
    }
   
    $("#"+fieldId).val(str1);
}


function checkSpaces(that){
debugger;
var id= that.id;
var value = that.value;
var replacedValue = value.replaceAll(" ","");
if(replacedValue.length==0){
	bootbox.alert("Field value cannot contain only spaces.");
	$("#"+id).val("");
	return false;
	}else{
	return true;
	}
}


  function validatePAN(Obj)
	{
		console.log(Obj)
		if (Obj == null)
			Obj = window.event.srcElement;
		if (Obj.value != ""){
			ObjVal = Obj.value;
			var panPat = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
				if (panPat.test(ObjVal)) {
                        checkDuplicateItem('PAN');
                        return true;
                    } else {
                        bootbox.alert("Invaild Personal PAN Card No.");
                        $("#pan").val('');
                        return false;
                  }
	}
  }
  
  
  function validateGSTNumber(gstNumber) {
  debugger;
		  var gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
		  if (!gstRegex.test(gstNumber)) {
		    return false;
		  }
		  // Check the check digit
		  var factor = [2, 4, 5, 7, 8, 10, 11, 13];
		  var checkSum = 0;
		  for (var i = 0; i < factor.length; i++) {
		    var digit = parseInt(gstNumber.charAt(factor[i] - 1));
		    checkSum += (factor[i] * digit);
		  }
		  checkSum = (checkSum % 11);
		  if (checkSum == 0) {
		    return true;
		  } else {
		    var checkDigit = 11 - checkSum;
		    if (checkDigit == 1 || checkDigit == 0) {
		      return false;
		    }
		    var lastChar = gstNumber.charAt(gstNumber.length - 1);
		    if (checkDigit == 10) {
		      return (lastChar.toUpperCase() == 'A');
		    } else {
		      return (parseInt(lastChar) == checkDigit);
		    }
		  }
}



function isDecimalNumberWithZeroStart(evt, element) {
    var value = $(element).val();
    var charCode = (evt.which) ? evt.which : event.keyCode;

    // Check if the dot is entered as the first character
    if (charCode === 46 && value.length === 0) {
        return false;
    }

	    // Check if the first character is '0'
//    if (value.length === 0 && charCode === 48) {
//        return false;
//    }

    if (

        (charCode != 46 || value.indexOf('.') != -1) &&
        (charCode < 48 || charCode > 57)
    ) {
        return false;
    }

    if (value.indexOf('.') != -1) {
        var parts = value.split('.');
        if (parts[1].length >= 2) {
            return false;
        }
    }

    return true;
}

$(document).ready(function () {
	
$('.validate-textarea').on('input', function () {
	
            validateTextarea($(this));
        });

        function validateTextarea(textarea) {
            // Get the textarea value
            var text = textarea.val();

            // Check if the first character is a space
            if (text.length > 0 && text.charAt(0) === ' ') {
                textarea.addClass('validation-error');
                // Optionally, you can also show an error message or perform other actions
            } else {
                // Check for more than one space after a letter
                if (/ [ ]+/.test(text)) {
                    textarea.addClass('validation-error');
                    // Optionally, you can also show an error message or perform other actions
                } else {
                    textarea.removeClass('validation-error');
                }
            }
        }
 });
 
 
 
 
  var d = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
            [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
            [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
            [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
            [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
            [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
            [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
            [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
            [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
        ];

        var p = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
            [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
            [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
            [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
            [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
            [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
            [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
        ];

        var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

        function generateVerhoeff(array) {
            if (typeof array === 'number') {
                array = String(array);
            }
            if (typeof array === 'string') {
                array = array.split("").map(Number);
            }
            return array.reverse();
        }

        function ValidAadhaarNo(array) {
            var c = 0;
            var invertedArray = generateVerhoeff(array);

            for (var i = 0; i < invertedArray.length; i++) {
                c = d[c][p[i % 8][invertedArray[i]]];
            }
            return c === 0;
        }

        function validateAadhaar(id) {
            var aadhaar = document.getElementById(id).value.trim();

            if (!/^\d{12}$/.test(aadhaar)) {
                bootbox.alert("Aadhaar number must be exactly 12 digits.");
                 $("#"+id).val('');
                return false;
            }

            if (!ValidAadhaarNo(aadhaar)) {
                bootbox.alert("Invalid Aadhaar number.");
                $("#"+id).val('');
                return false;
            }

            return true;
        }
 