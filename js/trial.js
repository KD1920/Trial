// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "33.33%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// <![CDATA[  <-- For SVG support
// if ("WebSocket" in window) {
//   (function () {
//     function refreshCSS() {
//       var sheets = [].slice.call(document.getElementsByTagName("link"));
//       var head = document.getElementsByTagName("head")[0];
//       for (var i = 0; i < sheets.length; ++i) {
//         var elem = sheets[i];
//         var parent = elem.parentElement || head;
//         parent.removeChild(elem);
//         var rel = elem.rel;
//         if (
//           (elem.href && typeof rel != "string") ||
//           rel.length == 0 ||
//           rel.toLowerCase() == "stylesheet"
//         ) {
//           var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, "");
//           elem.href =
//             url +
//             (url.indexOf("?") >= 0 ? "&" : "?") +
//             "_cacheOverride=" +
//             new Date().valueOf();
//         }
//         parent.appendChild(elem);
//       }
//     }
//     var protocol = window.location.protocol === "http:" ? "ws://" : "wss://";
//     var address =
//       protocol + window.location.host + window.location.pathname + "/ws";
//     var socket = new WebSocket(address);
//     socket.onmessage = function (msg) {
//       if (msg.data == "reload") window.location.reload();
//       else if (msg.data == "refreshcss") refreshCSS();
//     };
//     if (
//       sessionStorage &&
//       !sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
//     ) {
//       console.log("Live reload enabled.");
//       sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", true);
//     }
//   })();
// } else {
//   console.error(
//     "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
//   );
// }
// ]]>
