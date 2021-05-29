window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style = "background-color: #131313";
  }
    else{
         document.getElementById("navbar").style = "background-color: none";
    }
}