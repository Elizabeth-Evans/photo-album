

// main album

$(document).ready(function() {
  var photoAlbums = "";
  albums.forEach(function(element, idx) {
    photoAlbums += "<ul>" + "<li><a href><img src= '" + element.albumCover +
      "' /></a>" + "<h3>" + element.albumTitle + "</h3></li></ul>";
  });
$('.photoBox').append(photoAlbums);
});


//please work
// $("images/asheville10.jpg").on("click", "img", function(event){
//   event.preventDefault();
//   var albumToPutOnPage = {photoName:"Asheville1",
//   photoUrl:"images/asheville10.jpg",},
//   {photoName:"Asheville2",
//   photoUrl:"images/asheville2.jpg",},
//   {photoName:"Asheville3",
//   photoUrl:"images/asheville9.jpg",},
//   {photoName:"Asheville4",
//   photoName:"images/asheville4.jpg",},
//   {photoName:"Asheville5",
//   photoUrl:"images/asheville5.jpg",},
//   {photoName:"Asheville6",
//   photoUrl:"images/asheville8.jpg",}
// });


$('.albumCover').on('click', 'img', function(event){
 event.preventDefault();
 var selectedPage = $(this).attr('rel');
 var albumToPutOnPage = albums.asheville [''];
 console.log(selectedPage);
 console.log(albumToPutOnPage);
});

// another

// $('.albumCover').on('click', 'li', function(event){
//  event.preventDefault();
//  var selectedPage = $(this).attr('rel');
//  var albumToPutOnPage = "";
//  albums.forEach(function(element){
//    albumToPutOnPage += "<ul>" + "<li><a href><img src= '" + element.photoUrl +
//      "' /></a>" + "<h3>" + element.photoName + "</h3></li></ul>";
//  })
//  console.log(selectedPage);
//  console.log(albumToPutOnPage);
// });

// not working yet

// $(document).click(function(){
//   albums.forEach(function(element, idx) {
//   $('.photoBox').attr('src', element.asheville);
// });
// });


// or maybe

// $(element.albumCover).click(function()
// {
//   $('.photoBox').attr('src', element.album);
// });

// ...for this one, change all names to album


// (function(){
//   var ashevilleAlbum= "";
//
// })

// $(document).ready(function(){
//   var ashevilleAlbum = "";
//     $("element.albumCover").click(function(){
//       albums.forEach(function(element, idx) {
//         photoAlbums += "<ul>" + "<li><a href><img src= '" + element.photoUrl +
//           "' /></a>" + "<h3>" + element.photoName + "</h3></li></ul>";
//       });
//     $('.photoBox').append(ashevilleAlbum);
//     });
// });



// $('.blog').on('click', 'article', function (event) {
//  +    console.log($('article').html());
//  +      $(this).text("WE DID IT!!!!!")
//  +  });

// $('photoAlbums').css('display','inline-block');
//
// $(document).ready(function() {
//   var ashevilleAlbum = "";
//   asheville.forEach(function(element, idx) {
//     ashevilleAlbum += "<a href><img src= '" + element.photoUrl +
//       "' /></a>" + "<h3>" + element.photoName + "</h3>";
//   });
// $('.photoBox').append(ashevilleAlbum);
// });


//
// +$(document).ready(function () {
//  +  var posts = "";
//  +
//  +  blogPosts.forEach(function (element, idx) {
//  +    posts += "<article data-author='"
//  +      + element.author
//  +      + "'>"
//  +      + "<h3>"
//  +      + element.title
//  +      + "</h3>"
//  +      + "<p>"
//  +      + element.content
//  +      + "</p>"
//  +      + "</article>";
//  +
//  +  });
//  +
//  +
//  +  $('.blog').on('click', 'article', function (event) {
//  +    console.log($('article').html());
//  +      $(this).text("WE DID IT!!!!!")
//  +  });
//  +
//  +
//  +  // $('article').on('click', function (event) {
//  +  //   console.log($('article').html());
//  +  //     $(this).text("WE DID IT!!!!!")
//  +  // });
//  +  $('.blog').append(posts);
