$(document).ready(function() {
    $('input').on('keyup change', function() {
      $('td.'+$(this).attr("class")).text($(this).val());
    });
  });