$('.hs-cta-container input[type=submit]').on('click', function(e){
  e.preventDefault;

  var portalId = '',
      formId = '',
      formContainer = $('.hs-cta-container');
  // var currentIndex = e.target.className.replace('answerInput answer', '');
  // var questionId = questionnaireContainer.find('.questionId')[currentIndex].value;
  // var userType = questionnaireContainer.find('.userType')[0].value;
  // var answer = e.target.value;


  var request = $.ajax({
    method: "POST",
    url: 'https://forms.hubspot.com/uploads/form/v2/' +
          portalId + '/' + formId,
    data: {
      // answer: {
      //   user_id: userId,
      //   user_type: userType,
      //   question_id: questionId,
      //   answer: answer
      // }
    }
  })

  request.done(function(data) {
    // if (data.questionnaireComplete) {
    //   $('#completeRegistrationButton').show()
    // }
  })
});
