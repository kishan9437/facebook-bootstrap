$(document).ready(function () {
    $("#dropdownMenuButton").click(function () {
        $(this).next('.dropdown-menu').toggle();
    })
    // Hide dropdown menu when clicking outside
    $(document).click(function (e) {
        var target = e.target
        if (!$(target).is("#dropdownMenuButton") && !$(target).closest(".dropdown").length) {
            $(".dropdown-menu").hide();
        }
    });

    $('#Choosecoverphoto').click(function (e) {
        e.preventDefault();
        $('#myModal').modal('show');
        $('#photoAlbumsDiv').hide();
    });

    $('#removeBtn').click(function(){
        $('#removeModal').modal('show');
    })

    $('#myModal').on('show.bs.modal', function () {
        // Make Recent photos button active
        $('#recentPhotosBtn').addClass('active-button');
    });

    // click event for recent photo btn
    $("#recentPhotosBtn").click(function () {
        // remove active class from all button
        $('.custom-button').removeClass('active-button')
        // Add active class for click button
        $(this).addClass('active-button')

        $('#imageContainer').removeClass('hideImageContainer');
        $('#photoAlbumsDiv').hide();
    })

    // click event for Photo Albums
    $("#photoAlbumsBtn").click(function () {
        // remove active class from all button
        $('.custom-button').removeClass('active-button')
        // Add active class for click button
        $(this).addClass('active-button')
        
        // Hide the image container
        $('#imageContainer').addClass('hideImageContainer');
        // Show the photoAlbumsDiv
        $('#photoAlbumsDiv').show();
    })

    $('#uploadlink').click(function(e){
        e.preventDefault()
        $('#uploadBtn').click();
    })

    $('#editProfileBtn').click(function(){
        $('#editProfile').modal('show');
    })

    //menu
    $('#postBtn').click(function(){
        $('.custom-button').removeClass('active-button hoverBtn')
        $(this).addClass('active-button')
        $(this).removeClass('hoverBtn')
        $('.custom-button').not(this).addClass('hoverBtn');
    })
    $('#postBtn').css({
        'color': 'blue',
        'border-bottom': '3px solid blue'
    });
    $('.custom-button').not('#postBtn').click(function() {
        // Remove styles from postBtn
        $('#postBtn').css({
            'color': '',
            'border-bottom': ''
        });
    });
    $('#aboutBtn').click(function(){
        $('.custom-button').removeClass('active-button hoverBtn')
        $(this).addClass('active-button')
        $(this).removeClass('hoverBtn')
        $('.custom-button').not(this).addClass('hoverBtn');
    })
    $('#friendBtn').click(function(){
        $('.custom-button').removeClass('active-button hoverBtn')
        $(this).addClass('active-button')
        $(this).removeClass('hoverBtn')
        $('.custom-button').not(this).addClass('hoverBtn');
    })
    $('#photoBtn').click(function(){
        $('.custom-button').removeClass('active-button hoverBtn')
        $(this).addClass('active-button')
        $(this).removeClass('hoverBtn')
        $('.custom-button').not(this).addClass('hoverBtn');
    })
    $('#videoBtn').click(function(){
        $('.custom-button').removeClass('active-button hoverBtn')
        $(this).addClass('active-button')
        $(this).removeClass('hoverBtn')
        $('.custom-button').not(this).addClass('hoverBtn');
    })
    $('#checkBtn').click(function(){
        $('.custom-button').removeClass('active-button hoverBtn')
        $(this).addClass('active-button')
        $(this).removeClass('hoverBtn')
        $('.custom-button').not(this).addClass('hoverBtn');
    })
    $('#dropdownMenu').click(function(){
        $('#dropdownMenushow').toggle();
    })
    $('#selectDropdown').click(function(){
        $('#selectDropdownShow').toggle();
    })

    $('#photovideoBtn').click(function(){
        $('#photovideoModal').modal('show')
    })
    $('#addPhotoUpload').click(function(e){
        e.preventDefault();
        $('#uploadPhoto').click();
    })
    $('#removePhotoBtn').click(function(){
        $('#photoVideoRemove').hide()
        $('#yourMind').show();
    })
    $('#focusInput').on('input',function(){
        var inputText=$(this).val().trim()
        if(inputText.length>0){
            $('#postButton').prop('disabled',false);
            $('#postButton').css({
                'background':'blue',
                'color':'white'
            });
        }
        else{
            $('#postButton').prop('disabled',true);
            $('#postButton').css({
                'background':'#eae9e9',
                'color':'#808080'
            });
        }
    })
    $('#addYourPostBtn').click(function(){
        $('#photovideoModal').addClass('hideImageContainer');
        $('#addYourPstMdl').modal('show');
    });
    
    $('#backCreatePost').on('click', function() {
        $('#photovideoModal').removeClass('hideImageContainer');
    });
})
