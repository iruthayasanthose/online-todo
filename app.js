$(function () {
  $("#add").on("click", function () {
    var val = $("input").val();
    if (val !== "") {
      var elem = $("<li></li>").text(val);
      $(elem).append("<button class='rem'>X</button>");
      $("#mylist").append(elem);
      $("input").val("");
      $(".rem").on("click", function () {
        $(this)
          .parent()
          .css({ "font-style": "oblique", "text-decoration": "line-through" });
      });
      $(".rem").on("dblclick", function () {
        $(this)
          .parent()
          .css({ "font-style": "normal", "text-decoration": "none" });
      });
    }
  });
});
