
      function validate() {
         if( document.myForm.FName.value == "" ) {
            alert( "Please provide your first name!" );
            document.myForm.FName.focus() ;
            return false;
         }
         if( document.myForm.LName.value == "" ) {
            alert( "Please provide your last name!" );
            document.myForm.LName.focus() ;
            return false;
         }
         if( document.myForm.DOB.value == "" ) {
            alert( "Please select your date of birth!" );
            return false;
         }
         if( document.myForm.Address.value == "" ) {
            alert( "Please provide your address!" );
            return false;
         }
         if( document.myForm.City.value == "" ) {
            alert( "Please provide your city!" );
            return false;
         }
         if( document.myForm.Prov.value == "-1" ) {
            alert( "Please select your province!" );
            return false;
         }
        
         if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
            document.myForm.Zip.value.length != 5 ) {
            
            alert( "Please provide a zip code" );
            document.myForm.Zip.focus() ;
            return false;
         }
         if( document.myForm.EMail.value == "" || !isEmailValid(document.myForm.EMail.value)) {
            alert( "Please provide valid Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
         if( document.myForm.Phone.value == "" || isNaN( document.myForm.Phone.value ) ||
            document.myForm.Phone.value.length != 10 ) {
            
            alert( "Please provide correct number" );
            document.myForm.Phone.focus() ;
            return false;
         }
         if( document.myForm.Date.value == "" ) {
            alert( "Please select your start date!" );
            return false;
         }
         if( document.myForm.Des.value == "" ) {
            alert( "Please select your designation!" );
            return false;
         }
        
         return( true );
      }
   
      function isEmailValid(EMail){
       const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(EMail);
   };
   