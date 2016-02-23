

// main album
// old version....
//    var photoAlbums = "";
//    albums.forEach(function(element, idx) {
//      photoAlbums +=
//      "<ul>"
//      + "<li><a href='#'><img rel= '"+element.albumTitle+"' src= '"
//      + element.albumCover + "' /></a>"
//      + "<h3>"
//      + element.albumTitle
//      + "</h3></li></ul>";
//    });
//  $('.container').append(photoAlbums);
//  });
// new version...
$(document).ready(function() {
  var photoAlbums = "";
  var albumTmpl = _.template($('#grabLater').html())
  albums.forEach(function(element, idx) {
    photoAlbums += albumTmpl(element);
  });
$('.container').append(photoAlbums);
});

// This is what puts images from specific album to the page

$('.container').on('click', 'img', function(event){
  event.preventDefault();
   var selectedPage = $(this).attr('rel');
   var albumToPutOnPage = albums.filter(function(element){
     return selectedPage === element.albumTitle;
   }).pop();
  var albumHtmlStr="";
  var picTmpl = _.template($('#grabLaterEr').html())
   albumToPutOnPage.photos.forEach(function(element){
     albumHtmlStr += picTmpl(element);
   });
   $('.photoBox').html(albumHtmlStr);
   $('.container').hide();
});

// shows full images by it self

  $('.photoBox').on('click', 'img', function(event) {
    event.preventDefault();
      var selectedImg = $(this).attr('src');
      console.log(selectedImg);
      $('.photoBox').html("<img src='"+selectedImg+"'/>");
  });

// navBar appears
$('.container').on('click', 'img', function(event) {
  event.preventDefault();
  var albumNav="";
  var albumTmpl= _.template($('#grabNavBar').html())

  albums.forEach(function(element) {
    albumNav += albumTmpl(element);
  });
$('.navBar').append(albumNav);
});

// clicking navBar
$('.navBar').on('click', 'div', function(event){
  event.preventDefault();
   var selectedPage = $(this).attr('rel');
   var albumToPutOnPage = albums.filter(function(element){
     return selectedPage === element.albumTitle;
   }).pop();
  var albumHtmlStr="";
  var picTmpl = _.template($('#grabLaterEr').html())
   albumToPutOnPage.photos.forEach(function(element){
     albumHtmlStr += picTmpl(element);
   });
   console.log(albumHtmlStr);
   $('.photoBox').html(albumHtmlStr);
   $('.container').hide();
});



// $('.navBar').on('click', 'img', function(event){
//   event.preventDefault();
//   var albumNav="";
//   var addNavBar= _.template($('#grabNavBar').html())
//   albums.forEach(function(element) {
//        albumNav += albumTmpl(element);
//      });
//    $('.navBar').append(albumNav);
//    });

// var addNavBar= _.template($('#grabNavBar').html())
// $('.navBar').append(addNavBar);
// });
//
//
// $(document).ready(function() {
//   var photoAlbums = "";
//   var albumTmpl = _.template($('#grabLater').html())
//   albums.forEach(function(element, idx) {
//     photoAlbums += albumTmpl(element);
//   });
// $('.container').append(photoAlbums);
// });
//


// redo with templates




// <script type="text/template" id="postTmpl">
//  +      <ul>
//  +        <li><h3> Title: <%= title %></h3></li>
//  +        <li><p><%= body %></p></li>
//  +        <li><h6> <%= author %></h6></li>
//  +      </ul>
//  +    </script>
