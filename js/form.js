jQuery(document).ready(function(){
    $.validator.addMethod('customphone', function (value, element) {
        return this.optional(element) || /^(\+38-|\+38|0)?\d{10}$/.test(value);
    }, "Please enter a valid phone number");

    $.validator.addMethod('selectCountry', function(value){
        return (value != null);
    }, "Error");
        $('form[id="contact-form"]').validate({
            rules: {
                name : "required",
                email : {
                    required : true,
                    email : true
                },
                phone : 'customphone',
                country : 'selectCountry'
               
            }, messages: {
                name: 'This field is required',
                email: 'Enter a valid email',
            },
            submitHandler: function(form) {
                form.submit();
            }
            
        });
});